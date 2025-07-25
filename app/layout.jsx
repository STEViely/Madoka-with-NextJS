import "./globals.css";
import { Providers } from "../app/[lng]/_components/Providers";

export const metadata = {
  title: "Example i18n App",
  description: "Example app with Next.js i18n",
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
