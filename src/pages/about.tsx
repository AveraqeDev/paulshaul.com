import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PaulImage from "../assets/paul.jpg";
import HeroImage from "../assets/hero-image.jpg";
import TreesImage from "../assets/trees.jpg";
import CallToAction from "../components/CallToAction";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | paulshaul.com</title>
      </Head>
      <div className="mt-10 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Paul
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl">
            Reliable • Affordable • Friendly
          </p>
        </div>
        <div className="bg-gray-50 rounded-md shadow py-6 px-10 max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="w-full flex justify-center md:block">
              <Image src={PaulImage} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-extrabold">Paul Parrish</h3>
              <p>
                I am an energetic hardworking entrepreneur dedicated to
                providing quality services when you need them most. I graduated
                from CSUSB, class of 2018, with a Bachelor of Science in
                Mathematics. Since graduating I decided to start my own business
                and have been serving the mountain {"communities'"} hauling
                needs ever since.
              </p>
            </div>
          </div>
        </div>
        <CallToAction />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-1/3">
            <Image src={HeroImage} alt="" />
          </div>
          <div className="w-1/2">
            <Image src={TreesImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
