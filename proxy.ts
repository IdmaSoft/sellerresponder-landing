import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "es"] as const;

function isValidLocale(locale: string | undefined): locale is (typeof SUPPORTED_LOCALES)[number] {
  return typeof locale === "string" && SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number]);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE_NAME, maybeLocale, {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/") {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
    const targetLocale = isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};