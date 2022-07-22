import { NextPage } from "next";
import Head from "next/head";
import { FormEvent } from "react";

const Contact: NextPage = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <>
      <Head>
        <title>Contact | paulshaul.com</title>
      </Head>
      <div className="mt-10 max-w-4xl mx-auto flex flex-col gap-14">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Contact
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl">
            Hauling • Handyman • Tree Service
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Get A Quote
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Provide the details of the job you need done and I will get in
                touch ASAP with an accurate quote!
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-gray-50 space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                          className="focus:ring-zinc-500 focus:border-zinc:500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="john.doe@example.com"
                          className="focus:ring-zinc-500 focus:border-zinc:500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="details"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Details
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <textarea
                          id="details"
                          name="details"
                          rows={3}
                          className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                          placeholder="Details of job you need done..."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Attachments
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-zinc-600 hover:bg-zinc-700 text-white rounded-md p-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
