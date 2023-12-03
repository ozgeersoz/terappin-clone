import Head from "next/head";
import Home from "../pages/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Terappin Clone</title>
        <meta name="description" content="Terappin Clone App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tailwind.css */}
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Home />
      </main>
    </>
  );
}
