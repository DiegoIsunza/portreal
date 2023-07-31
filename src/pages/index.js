import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {

  console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Portreal</title>
      </Head>

      <Header />

      <main className="max-w-screen-xl mt-5 mx-auto">

        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps = async(context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  ).catch((err) => console.log(err));

  return {
    props: {
      products,
    }
  }
};
