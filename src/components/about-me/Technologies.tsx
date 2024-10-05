import html from "/images/logos/html-logo.svg";
import css from "/images/logos/css-logo.svg";
import javascript from "/images/logos/js-logo.svg";
import {
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { InfiniteSlider } from "../slider/InfiniteSlider";

export const Technologies = () => {
  return (
    <div className="flex flex-col gap-4 text-justify">
      <p>
        Primeiro comecei com HTML, CSS e então o{" "}
        <span className="highlight">JavaScript</span>. Foi com ele também que o
        professor Gustavo Guanabara me ensinou lógica de programação básica e os
        principais conceitos da linguagem.
      </p>
      <div className="flex sm:justify-center sm:gap-16 justify-evenly">
        <img className="w-[25%]" src={html} alt="Logotipo da linguagem HTML" />
        <img className="w-[25%]" src={css} alt="Logotipo da linguagem CSS" />
        <img
          className="w-[25%]"
          src={javascript}
          alt="Logotipo da linguagem JavaScript"
        />
      </div>
      <p>
        Com o passar do tempo fui descobrindo e me aprofundando em novas
        tecnologias
      </p>
      <InfiniteSlider
        Logos={[
          <SiHtml5 key={0} className="text-green-500" />,
          <SiCss3 key={1} className="text-green-500" />,
          <SiJavascript key={2} className="text-green-500" />,
          <SiReact key={3} className="text-green-500" />,
          <SiTypescript key={4} className="text-green-500" />,
          <SiFigma key={5} className="text-green-500" />,
          <SiGit key={6} className="text-green-500" />,
          <SiNodedotjs key={7} className="text-green-500" />,
          <SiMysql key={8} className="text-green-500" />,
        ]}
      />
    </div>
  );
};
