import LayoutClient from "./_components/layout-client";

export default async function Template({ children, params }) {
  const lng = params?.lng;
  return <LayoutClient lng={lng}>{children}</LayoutClient>;
}
