// app/components/Providers.jsx
"use client";

import { CookiesProvider } from "react-cookie";

export function Providers({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
