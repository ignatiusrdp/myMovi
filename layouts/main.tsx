import Head from "next/head";
import { FunctionComponent } from "react";
import { Footer } from "../components/footer";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Movi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
