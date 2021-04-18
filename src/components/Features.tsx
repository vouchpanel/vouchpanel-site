import React from "react";

export const Features = (props: {}) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">
          The easiest way to embed twitter testimonials.
        </h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <dt>
              <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                Blazing Fast
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Your social proofs will load off a CDN in less than 10ms.
            </dd>
          </div>

          <div>
            <dt>
              <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                Compatible with ... everything!
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Works with React, Vue, Webflow, Shopify, Squarespace, Wix, etc...
            </dd>
          </div>

          <div>
            <dt>
              <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                No code
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              You don't need to juggle API keys, javascript, html, and css. Get
              started in seconds rather than hours.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
