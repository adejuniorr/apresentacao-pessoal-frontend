import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  link?: string;
  repo?: string;
}

export const Card = ({
  img,
  imgAlt,
  title,
  description,
  link,
  repo,
}: CardProps) => {
  if (img === "") {
    return (
      <div className="animate-floating-element w-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-50">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[80vw] sm:w-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-[250px] overflow-hidden">
        <a title="Clique para ir até o projeto" href={link} target="_blank">
          <img className="rounded-t-lg object-contain" src={img} alt={imgAlt} />
        </a>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-50">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-4">
          <a
            target="_blank"
            href={link}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-slate-50 bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Deploy
            <FaExternalLinkAlt />
          </a>
          <a
            target="_blank"
            href={repo}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-slate-50 bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
