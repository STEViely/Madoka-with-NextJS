import { dir } from "i18next";
import Header from "./header";

export function LayoutWrapper({ lng, children }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="bg-gray-100 text-gray-900">
        <Header lng={lng} />
        <main className="max-w-2xl mx-auto py-10 px-4">{children}</main>
      </body>
    </html>
  );
}
