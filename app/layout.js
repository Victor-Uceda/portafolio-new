import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Victor Uceda | Soluciones de software a la medida",
  description:
    "Desarrollo de landing pages, sitios web y aplicaciones. Ingeniero en Sistemas e Informatica.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Victor Uceda | Soluciones de software a la medida",
    description:
      "Desarrollo de landing pages, sitios web y aplicaciones. Ingeniero en Sistemas e Informatica.",
    type: "website",
    locale: "es_PE",
    siteName: "Victor Uceda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Uceda | Soluciones de software a la medida",
    description:
      "Desarrollo de landing pages, sitios web y aplicaciones. Ingeniero en Sistemas e Informatica.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
