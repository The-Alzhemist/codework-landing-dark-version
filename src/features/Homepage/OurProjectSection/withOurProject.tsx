import React from "react";
import { OurProjectProps, ProjectListProps } from "./interface";
import { useTranslations } from "next-intl";

const withOurProject = (Component: React.FC<OurProjectProps>) => {
  const Hoc = () => {
    const t = useTranslations("Home");

    const projectList: ProjectListProps[] = [
      {
        projectName: "Seamoor Marine",
        projectDetail: t("OurProject.Swiper.Seamoor.Description"),
        projectTasks: [
          {
            task: "Project solution consultancy",
          },
          {
            task: "UX/UI Design",
          },
          {
            task: "Web development",
          },
          {
            task: "Digital marketing",
          },
          {
            task: "Digital transformation consultancy",
          },
        ],
        projectImage: "/images/seamoorMock.png",
        projectImageWebP: "/images/seamoorMock.webp",
      },
      {
        projectName: "The Pine",
        projectDetail: t("OurProject.Swiper.ThePine.Description"),
        projectTasks: [
          {
            task: "Project solution consultancy",
          },
          {
            task: "UX/UI Design",
          },
          {
            task: "Web development",
          },
          {
            task: "Digital marketing",
          },
          {
            task: "Digital transformation consultancy",
          },
        ],
        projectImage: "/images/homePage/the-pine-mock-project-v1.webp",
        projectImageWebP: "/images/homePage/the-pine-mock-project-v1.jpg",
      },
      {
        projectName: "Tonsai Market",
        projectDetail: t("OurProject.Swiper.TonsaiMarket.Description"),
        projectTasks: [
          {
            task: "Project solution consultancy",
          },
          {
            task: "UX/UI Design",
          },
          {
            task: "Web development",
          },
          {
            task: "Digital marketing",
          },
          {
            task: "Digital transformation consultancy",
          },
        ],
        projectImage: "/images/homePage/tonsai-mock-project-v1.webp",
        projectImageWebP: "/images/homePage/tonsai-mock-project-v1.jpg",
      },
    ];

    const newProps: OurProjectProps = {
      t,
      projectList
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurProject;
