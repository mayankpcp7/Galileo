import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gallileo Sky</title>
        <meta name="description" content="Description of your page" />
      </Head>
      <Header />
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
