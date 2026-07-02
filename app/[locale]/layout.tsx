import type { Metadata } from "next";
import { getDictionary, isValidLocale, Locale } from "@/lib/getDictionary";
import type { ReactNode } from "react";

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "SellerResponder",
      description: "SellerResponder landing page",
      metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
    };
  }

  const dictionary = getDictionary(locale as Locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.og.title,
      description: dictionary.metadata.og.description,
      type: "website",
      locale,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode, params: Promise<{locale: string}> }) {
  const { locale } = await params;
  return <div lang={isValidLocale(locale) ? locale : 'en'}>{children}</div>;
}