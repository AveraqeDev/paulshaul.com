import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../assets/hero-image.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | paulshaul.com</title>
      </Head>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Need A Haul?</span>
            <span className="block italic text-zinc-600 xl:inline">
              Call Paul!
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hauling • Handyman • Tree Service
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/services">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-600 hover:bg-zinc-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/contact">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-zinc-700 bg-zinc-100 hover:bg-zinc-200 md:py-4 md:text-lg md:px-10">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src={HeroImage}
          alt=""
          className="h-56 -z-10 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </>
  );
};

export default Home;
