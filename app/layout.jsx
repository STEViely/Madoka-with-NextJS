import "./globals.css";
import { Providers } from "../app/[lng]/_components/Providers";

export const metadata = {
  title: "Madoka",
  description: "Madoka, Dog and Cat Perfume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
