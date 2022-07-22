import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Affordable, reliable hauling service in the san bernardino mountains"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="shadow">
        <Header />
      </header>
      <main className="max-w-7xl m-auto px-4 py-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
