import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portreal</title>
      </Head>

      {/* Header */}
      <Header />
    </div>
  );
}
