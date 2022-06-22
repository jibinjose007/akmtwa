import "../styles/globals.css";
import SEO from "@bradgarropy/next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SEO
        title="Lia Group International"
        description="We’re here to offer the best support, to help you troubleshoot any career related issues and superior education"
        keywords={[
          "better career opportunity",
          "better career prospects",
          "better career growth",
          "better career",
          "better career prospects meaning",
          "for better career prospects",
          "for better career growth",
          "Lia Group International",
          "lia group international",
          "Liagroupinternational",
          "liagroupinternational",
          "liagroupinternational.com",
          "www.liagroupinternational.com",
        ]}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
