import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../assets/hero-image.jpg";
import PaulImage from "../assets/paul.jpg";
import CallToAction from "../components/CallToAction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | paulshaul.com</title>
      </Head>
      <div className="relative bg-white overflow-hidden mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg_px-8 xl:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Need a Haul?</span>
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
                        View Services
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
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image src={HeroImage} alt="" className="h-42 w-full object-cover" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto w-3/4 bg-zinc-100 p-6 mb-10 rounded-md shadow flex flex-col items-center justify-center gap-3">
        <Image src={PaulImage} alt="" className="h-16 w-full object-cover" />
        <h2 className="font-bold text-xl text-indigo-500">
          Affordable hauling with a smile!
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          I started a hauling business because I saw a need on our mountain for
          reliable haulers who offer affordable rates and service with a smile.
          {"It's"} always a pleasure to help take care of your hauling needs.
        </p>
      </div>
      <CallToAction />
      <div className="flex items-center justify-center flex-wrap gap-3 max-w-7xl mx-auto py-6">
        <div className="flex flex-col gap-2 items-center justify-center">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvincent.zandi%2Fposts%2F1943140832396547&amp;width=500"
            // style={{ border: "none", overflow: "hidden" }}
            style={{
              display: "block",
              maxWidth: "700px",
              minWidth: "400px",
              width: "100%",
              height: "314px",
              border: "0px none",
              borderRadius: "0.375rem",
            }}
            scrolling="no"
            allowTransparency
            allow="encrypted-media"
            width="500"
            height="161"
            frameBorder="0"
          ></iframe>
          <a
            href="https://www.facebook.com/MountainHauling/"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-blue-600 text-white rounded-md text-center py-2 hover:bg-blue-700"
          >
            Like Us On Facebook
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <iframe
            src="https://www.yelp.com/embed/review/dXIGBCmFHeCRZ4SHxUIGnw?embed_location=paulshaul.com"
            data-review-id="dXIGBCmFHeCRZ4SHxUIGnw"
            scrolling="no"
            style={{
              display: "block",
              maxWidth: "700px",
              minWidth: "400px",
              width: "100%",
              height: "314px",
              border: "0px none",
              borderRadius: "0.375rem",
            }}
          ></iframe>
          <a
            href="https://www.yelp.com/writeareview/biz/kmOS4cOfFo0wZkczNs29Qw?return_url=%2Fbiz%2FkmOS4cOfFo0wZkczNs29Qw&review_origin=biz-details-war-button"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-red-600 text-white rounded-md text-center py-2 hover:bg-red-700"
          >
            Review Us On Yelp
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3298.2658257214757!2d-117.2058735!3d34.24176!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1658523395333!5m2!1sen!2sus"
            width="600"
            height="450"
            // style={{ border: "0" }}
            style={{
              display: "block",
              maxWidth: "700px",
              minWidth: "400px",
              width: "100%",
              height: "314px",
              border: "0px none",
              borderRadius: "0.375rem",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://goo.gl/maps/FmoU6WHhrR52"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-white text-gray-500 border border-gray-500 rounded-md text-center py-2 hover:bg-gray-100"
          >
            Review Us On Google
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
