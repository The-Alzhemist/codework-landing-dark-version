import Paragraph from "@/components/typography/paragraph/Paragraph";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectChavalak() {
  const t = useTranslations("Project");
  return (
    <section className="relative py-10 md:py-[50px] mx-auto bg-neutral-1000  ">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row-reverse  gap-y-10 lg:gap-y-0 justify-center  items-start lg:items-center">
        <div className="w-[100%] lg:w-1/2">
          <picture className="flex justify-end ">
            <source srcSet="https://placehold.co/1024x717" type="image/webp" />
            <img
              src="https://placehold.co/1024x717"
              alt="the-pine-project-cover."
              title="the-pine-project-cover."
              loading="lazy"
              className="rounded-l-full w-[90%] lg:w-full"
            />
          </picture>
        </div>

        <div className="w-full lg:w-1/2 pr-5 px-5 lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl  text-primary-100 font-semibold  mb-5 flex items-center gap-x-2">
            <a
              className="grayscale-[50%] group-hover:grayscale-0 w-[100px] h-[100px]   bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
              href="https://chavarakpipe.com/"
              target="_blank"
              rel="noopener nofollow"
            >
              <img
                src="/logo/our-partner/chavarak-logo.png"
                width={0}
                height={0}
                className={`h-auto w-[90%] p-1  rounded-full `}
                alt={`the pine  project image cover`}
              />
            </a>
            <span>Chavalak</span>
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
            {t("Chavarak.Description")}
          </Paragraph>

          <div className="text-base font-light opacity-80 text-white mb-5">
            <h3 className="font-semibold mb-2">Pain point</h3>
            <ul>
              <li className="mb-2">- {t("Chavarak.PainPoint.List1")}</li>
              <li className="mb-2">- {t("Chavarak.PainPoint.List2")}</li>
              <li className="mb-2">- {t("Chavarak.PainPoint.List3")}</li>
              <li className="mb-2">- {t("Chavarak.PainPoint.List4")}</li>
              <li className="mb-2">- {t("Chavarak.PainPoint.List5")}</li>
            </ul>
          </div>

          <div className="text-base font-light opacity-80 text-white">
            <h3 className="font-semibold mb-2">Solution</h3>
            <ul>
              <li className="mb-2">- {t("Chavarak.Solution.List1")}</li>
              <li className="mb-2">- {t("Chavarak.Solution.List2")}</li>
              <li className="mb-2">- {t("Chavarak.Solution.List3")}</li>
              <li className="mb-2">- {t("Chavarak.Solution.List4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
