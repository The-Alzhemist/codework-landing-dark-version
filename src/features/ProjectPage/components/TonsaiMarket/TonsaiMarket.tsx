import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";

export default function ProjectTonsaiMarket() {
  return (
    <section className="relative py-10 md:py-[50px] mx-auto bg-neutral-1000 ">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center  items-start lg:items-center">
        <div className="w-[90%] lg:w-1/2">
            <picture>
            <source
              srcSet="/images/homePage/tonsai-mock-project-v1.webp"
              type="image/webp"
            />
            <img
              src="/images/homePage/tonsai-mock-project-v1.jpg"
              alt="tonsai-market-project-cover."
              title="tonsai-market-project-cover."
              loading="lazy"
              className="w-full rounded-e-full"
            />
          </picture>
        </div>

        <div className="w-full lg:w-1/2 pr-5 px-5 lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl  text-primary-100 font-semibold  mb-5 flex items-center gap-x-2">
            <a
              className="grayscale-[50%] group-hover:grayscale-0 w-[100px] h-[100px]   bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
              href="https://www.facebook.com/Tonsaimarket456"
              target="_blank"
              rel="noopener nofollow"
            >
              <img
                src="/logo/our-partner/tonsai_market.png"
                width={0}
                height={0}
                className={`h-auto w-[90%] p-3 `}
                alt={`Tonsai market project image cover`}
              />
            </a>
            <span>Tonsai Market</span>
          </h2>
          {/* tag */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              Project solution consultancy
            </span>

            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              UX/UI Design
            </span>

            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              Web development
            </span>
          </div>

          {/* p */}
          <Paragraph className="text-base font-light opacity-80 text-white mb-5">
            {`Develop a back-end management system for Tonsai Market, including features such as rent collection, electricity fees, and booth reservations.`}
          </Paragraph>

          <div className="text-base font-light opacity-80 text-white mb-5">
            <h3 className="font-semibold mb-2">Pain point</h3>
            <ul>
              <li className="mb-2">
                {` - The absence of a back-end management system makes it difficult to monitor income and expenses.`}
              </li>

              <li>
                {` - There are issues with reconciling accounts.`}
              </li>

              <li>
                {` - Challenges exist in rent collection.`}
              </li>
            </ul>
          </div>

          <div className="text-base font-light opacity-80 text-white">
            <h3 className="font-semibold mb-2">Solution</h3>
            <ul>
              <li className="mb-2">
                {` - Develop a system that simplifies rent and electricity fee collection and allows for easy monitoring.`}
              </li>

              <li className="mb-2">
                {` - Make it easier to manage accounts.`}
              </li>

              <li>
                {` - Generate and view monthly profit and loss reports, enabling better future strategy planning.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
