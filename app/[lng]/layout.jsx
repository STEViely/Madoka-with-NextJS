import Header from "./_components/header";
import Footer from "./_components/footer";

export default async function LocaleLayout({ children, params }) {
  const { lng } = await Promise.resolve(params);

  return (
    <>
      <Header lng={lng} />
      {children}
      <Footer />
    </>
  );
}
