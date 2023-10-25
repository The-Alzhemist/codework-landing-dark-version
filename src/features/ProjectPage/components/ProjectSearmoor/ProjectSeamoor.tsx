import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";

export default function ProjectSeamoor() {
  return (
    <section className="relative md:py-[50px] mx-auto bg-neutral-1000  ">
      {/* 1 */}
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full rounded-e-full"
          />
        </div>

        <div className="w-1/2 pr-5 px-5 lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl  text-primary-100 font-semibold  mb-5 ">
            <span>Seamoor marine</span>
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
            {` Develop an internal system for a marine and logistics company,
            optimizing operations, tracking shipments, and facilitating
            efficient communication.`}
          </Paragraph>

          <div className="text-base font-light opacity-80 text-white mb-5">
            <h3 className="font-semibold">Pain point</h3>
            <ul>
              <li>
                {` - Difficulty with Offline System: The current offline system
                presents challenges in efficiently locating and tracking
                documents, leading to a time-consuming and frustrating user
                experience.`}
              </li>

              <li>
                {` - Incompatible Third-Party Tools: The current third-party tools
                don't align with the client's specific requirements, resulting
                in functional gaps and integration issues that hinder workflow
                and productivity.`}
              </li>
            </ul>
          </div>

          <div className="text-base font-light opacity-80 text-white">
            <h3 className="font-semibold">Solution</h3>
            <ul>
              <li>
                {` - Streamline and digitize all processes, transitioning from
                offline to online platforms for enhanced trackability and
                efficiency.`}
              </li>

              <li>
                {`- Tailor the software that perfectly aligns with the client's
                unique requirements, ensuring a seamless and user-friendly
                experience.`}
              </li>

              <li>
                {`  - Offer guidance and support to facilitate a smooth transition
                during software implementation.`}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div></div>
    </section>
  );
}
