import React from "react";
import { gridItems } from "@/data";

function Features() {
  return (
    <>
      <div className=" sm:py-32 sm:bg-[#000000] mb-5">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto w-full text-balance text-left text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            <span className="text-green-400">Turbocharge</span> your coding <br /> All tools on your deck
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2 border-2 border-zinc-600 border-dashed">
              <div className="absolute inset-px rounded-lg bg-zinc-950 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-400 max-lg:text-center ">
                    Cache
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    A first-class API for accessing your db store, supports
                    MySQL and Postgres. Experience the declarative syntax.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm ">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-[#000000] bg-zinc-950 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-green-500">
                          intent.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <p className="py-10 px-4 text-justify">Cache in applications may perform resource-intensive operations, such as complex computations or retrieving large amounts of data. These tasks can be time-consuming and put a strain on the CPU. Additionally, if the data doesn't change frequently, it's often beneficial to store it in a cache.</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1 border-2 border-zinc-600 border-dashed">
              <div className="absolute inset-px rounded-lg bg-zinc-950 max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-400 max-lg:text-center">
                    Console
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    A first-class API for accessing your db store, supports
                    MySQL and Postgres. Experience the declarative syntax.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 border-2 border-zinc-600 border-dashed">
              <div className="absolute inset-px rounded-lg bg-zinc-950"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-400 max-lg:text-center">
                    Error Handling
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    With Intent error handling you will never miss out on
                    handling an error. Out of the box Sentry integration.
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2 border-2 border-zinc-600 border-dashed">
              <div className="absolute inset-px rounded-lg bg-zinc-950 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-400 max-lg:text-center">
                    Database Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    A first-class API for accessing your db store, supports
                    MySQL and Postgres. Experience the declarative syntax.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow ">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-zinc-950 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          intent.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <p>
                        node intent make:config settings <br />
                        <br />
                        We recommend keeping the usage of process.env limited to
                        the config directory only. You can then read the values
                        from the IntentConfig class. Another reason of doing
                        this is that reading process.env will be a little slow
                        as compared to reading the value from IntentConfig
                        class. <br />
                        <br />
                        node intent make:command updateUser # Successfully
                        created app/console/updateUserCommand.ts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
            {gridItems.map((item, i) => (
              <div key={i}>
                <div className="w-full p-6 rounded-lg shadow bg-zinc-950 border-2 border-zinc-600 border-dashed">
                  <a href="#">
                    <h5 className="mt-2 text-lg font-medium tracking-tight text-green-400 pb-4  text-left">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal dark:text-white pb-4">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 hover:bg-green-700 pb-4 "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
