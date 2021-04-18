import React from "react";

export const Pricing = (props: {}) => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Simple pricing. Cancel anytime.
          </p>
          <p className="max-w-4xl mx-auto mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl"></p>
        </div>
      </div>

      <div className="pb-12 mt-16 bg-white lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 bg-gray-900 h-5/6 lg:h-2/3"></div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-gray-900"
                          id="tier-hobby"
                        >
                          Open Source
                        </h3>

                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">0</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            1 Published Tweet Wall
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            2 Mentions (Tracking Feed)
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Content Delivery Network
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            target="_blank"
                            href="https://app.vouchpanel.com/"
                            className="block w-full px-6 py-3 text-base font-medium text-center text-indigo-600 bg-white border border-transparent rounded-lg hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start for free
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="absolute inset-0 border-2 border-indigo-600 rounded-lg pointer-events-none"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-indigo-600 rounded-full">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
                    <div>
                      <h3
                        className="text-3xl font-semibold text-center text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Business
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">19</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-10 pb-8 border-t-2 border-gray-100 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          5 Published Walls
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          9 Mentions (Tracking Feed)
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Content Delivery Network
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Business License
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Export To HTML
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          No Watermark
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          target="_blank"
                          href="https://app.vouchpanel.com/"
                          className="block w-full px-6 py-4 text-xl font-medium leading-6 text-center text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto mt-10 lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-gray-900"
                          id="tier-scale"
                        >
                          Agency
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">99</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Unlimited Published Walls
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Unlimited Mentions
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Multiple Projects
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Client Billing
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-green-500"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Everything included in business...
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            target="_blank"
                            href="https://app.vouchpanel.com/"
                            className="block w-full px-6 py-3 text-base font-medium text-center text-indigo-600 bg-white border border-transparent rounded-lg hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
