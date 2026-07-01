import { redirect } from "next/navigation";
import { defaultLocale, getLocaleFromCookie } from "@/lib/getDictionary";

export default async function Home() {
  const locale = (await getLocaleFromCookie()) ?? defaultLocale;
  redirect(`/${locale}`);
}
