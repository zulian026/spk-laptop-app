import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPK Rekomendasi Laptop",
  description:
    "Sistem Pendukung Keputusan untuk rekomendasi laptop menggunakan metode TOPSIS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
