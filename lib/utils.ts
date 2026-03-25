export function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}
