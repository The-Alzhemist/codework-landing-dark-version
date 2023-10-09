"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurProject from "./withOurPoject";


const serviceList = [
  {
    name: "Seamoor marine",
    detail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  }
];

export const OurProject = () => {

  return (
    <section className="relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px]  bg-neutralVariant-1000 ">
      <div className=" m-auto max-w-[1440px]">
        {/* title */}
        <div
      
          className="flex items-center flex-col mb-16 ease-out"
        >
          <h2 className="text-lg md:text-4xl font-semibold flex mb-7 text-center">
          <span className="text-white border-b-2 border-primary-100 underline underline-offset-3  decoration-8 decoration-primary-100">
              Projects.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-base sm:text-md  text-gray-400  text-center font-light `}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.`}
          </Paragraph>
        </div>

        {/* card */}

        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px] m-auto ">
            <div className="bg-neutral-950-750 w-full rounded-2xl  border-slate-500   border-2 overflow-hidden">
              {/* img */}
               <div className="flex justify-center w-full h-[300px]  rounded-t-xl overflow-hidden mt-10  px-5 ">
               <img
                    src="/images/seamoor.png"
                    alt=""
                    className="rounded-t-3xl border-t-[10px]  border-l-[10px]  border-r-[10px] border-[#59ADA0]"

                  />
               </div>

               {/* text */}
               <div className=" text-slate-400 p-7 border-t-2  border-dashed text  border-slate-500">
                <h2 className="text-3xl ">Seamoor marine</h2>
                <p className="font-light ">Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.</p>
               </div>
            </div>
        </div>

        
      </div>
    </section>
  );
};


const WrappedComponent = withOurProject(OurProject);
export default WrappedComponent;
