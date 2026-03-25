import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  serviceType: z.string().min(2),
  city: z.string().min(2),
  message: z.string().min(10),
  preferredContactMethod: z.enum(["call", "text", "email"]),
  pageSource: z.string().min(1),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  submittedAt: z.string().datetime(),
  company: z.string().optional(),
});

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip) ?? [];
  const nextWindow = current.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (nextWindow.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimit.set(ip, nextWindow);
    return true;
  }

  nextWindow.push(now);
  rateLimit.set(ip, nextWindow);
  return false;
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many quote requests from this device. Please try again shortly." },
      { status: 429 },
    );
  }

  const rawBody = await request.json();
  const parsed = quoteSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete the form and include a short project summary." },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ message: "Thanks. Your request has been received." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_TO_EMAIL;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Quote delivery is not configured yet. Add RESEND_API_KEY, QUOTE_TO_EMAIL, and QUOTE_FROM_EMAIL to enable submissions.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New ${parsed.data.serviceType} lead from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: [
        `Name: ${parsed.data.name}`,
        `Phone: ${parsed.data.phone}`,
        `Email: ${parsed.data.email}`,
        `Service: ${parsed.data.serviceType}`,
        `City: ${parsed.data.city}`,
        `Preferred Contact: ${parsed.data.preferredContactMethod}`,
        `Page Source: ${parsed.data.pageSource}`,
        `UTM Source: ${parsed.data.utmSource ?? "-"}`,
        `UTM Medium: ${parsed.data.utmMedium ?? "-"}`,
        `UTM Campaign: ${parsed.data.utmCampaign ?? "-"}`,
        `Submitted At: ${parsed.data.submittedAt}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    await resend.emails.send({
      from: fromEmail,
      to: [parsed.data.email],
      subject: "We received your ZJ Carpentry quote request",
      text: [
        `Hi ${parsed.data.name},`,
        "",
        "Thanks for reaching out to ZJ Carpentry.",
        "We received your quote request and will follow up soon.",
        "",
        `Service: ${parsed.data.serviceType}`,
        `City: ${parsed.data.city}`,
        `Preferred contact method: ${parsed.data.preferredContactMethod}`,
        "",
        "If you need a faster response, call us directly.",
      ].join("\n"),
    });
  } catch {
    return NextResponse.json(
      { message: "The quote request could not be sent. Please call now or try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "Thanks. Your quote request has been sent and we will follow up soon.",
  });
}
