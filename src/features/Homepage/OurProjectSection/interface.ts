import { useTranslations } from "next-intl";

export interface ProjectListProps {
  projectName: string;
  projectDetail: string;
  projectTasks: { task: string }[];
  projectImage: string;
  projectImageWebP: string;
}

export interface OurProjectProps {
  t: any;
  projectList: ProjectListProps[];
}