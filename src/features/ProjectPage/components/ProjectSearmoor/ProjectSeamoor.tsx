import Paragraph from "@/components/typography/paragraph/Paragraph";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectSeamoor() {
  const t = useTranslations("Project");
  return (
    <section className="relative py-10 md:py-[50px] mx-auto bg-neutral-1000 ">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center  items-start lg:items-center">
        <div className="w-[90%] lg:w-1/2">
          <picture>
            <source
              srcSet="/images/projectPage/seamour-project-cover.webp"
              type="image/webp"
            />
            <img
              src="/images/projectPage/seamour-project-cover.jpg"
              alt="seamour-project-cover."
              title="seamour-project-cover."
              loading="lazy"
              className="w-full rounded-e-full"
            />
          </picture>
        </div>

        <div className="w-full lg:w-1/2 pr-5 px-5 lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl  text-primary-100 font-semibold  mb-5 flex items-center gap-x-2">
            <a
              className="grayscale-[50%] group-hover:grayscale-0 w-[100px] h-[100px]   bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
              href="https://seamoormarine.com/"
              target="_blank"
              rel="noopener nofollow"
            >
              <img
                src="/logo/our-partner/semour.png"
                width={0}
                height={0}
                className={`h-auto w-[90%] p-3 `}
                alt={`Seamoor  project image cover`}
              />
            </a>
            <span>Seamoor Marine</span>
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
            {t("Searmoor.Description")}
          </Paragraph>

          <div className="text-base font-light opacity-80 text-white mb-5">
            <h3 className="font-semibold mb-2">Pain point</h3>
            <ul>
              <li className="mb-2">- {t("Searmoor.PainPoint.List1")}</li>

              <li>- {t("Searmoor.PainPoint.List2")}</li>
            </ul>
          </div>

          <div className="text-base font-light opacity-80 text-white">
            <h3 className="font-semibold mb-2">Solution</h3>
            <ul>
              <li className="mb-2">- {t("Searmoor.Solution.List1")}</li>

              <li>- {t("Searmoor.Solution.List2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
