import Head from "next/head";
import { FunctionComponent } from "react";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark: bg-gray-700">
      <Head>
        <title>My Movi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center dark: text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};
