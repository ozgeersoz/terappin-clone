import "../css/Header.css";
import "../css/Home.css";
import "../css/AbilityCard.css";
import "../css/Footer.css";
import "../css/QuestionAccordion.css";
import "../css/ExpertPersonCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Layout from "../components/Common/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Component Did Mount");
    }
  }, []);

  return (
    <>
    {/* Layout içerisinde ana içeriklerimizi sarmallamaya yarayan kısım */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
