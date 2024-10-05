import GustavoGuanabaraMobile from "/images/gustavo-guanabara-mobile.svg";
import GustavoGuanabaraDesktop from "/images/gustavo-guanabara-desktop.svg";
import EuSouDoRock from "/images/eu-sou-do-rock.svg";
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
import { InfiniteSlider } from "./slider/InfiniteSlider";

export const AboutMe = () => {
  return (
    <div id="about-me" className="py-2 flex flex-col gap-4">
      <h1>
        <a href="#about-me">
          <span className="highlight">#sobre_mim</span>
        </a>
      </h1>
      <p>Eu sou um curioso e um amante das artes.</p>
      <p>
        E também sou{" "}
        <span className="highlight">desenvolvedor de websites</span> 🙂
      </p>
      <p>
        Meu nome é Ademir Júnior, sou baiano, tenho 22 anos e pra mim esta área
        é o melhor dos dois mundos:{" "}
        <span className="highlight">arte e tecnologia</span>.
      </p>
      <div className="flex flex-col md:flex-col-reverse gap-4 my-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={GustavoGuanabaraDesktop} />
          <img
            src={GustavoGuanabaraMobile}
            alt="Print da playlist do curso de JavaScript do canal cursoemvideo no YoutTube"
            className="w-[80vw] m-auto"
          />
        </picture>
        <p>
          Comecei meus estudos em desenvolvimento frontend há{" "}
          <span className="highlight">2 anos</span> atrás, assistindo ao{" "}
          <a
            className="link-text"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLeuwJul7tRBfsm7sxnR5_7wG3KvaQ6oOt"
          >
            curso em vídeo de JavaScript no YouTube.
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4 text-justify">
        <p>
          Primeiro comecei com HTML, CSS e então o{" "}
          <span className="highlight">JavaScript</span>. Foi com ele também que
          o professor Gustavo Guanabara me ensinou lógica de programação básica
          e os principais conceitos da linguagem.
        </p>
        <div className="flex sm:justify-center sm:gap-16 justify-evenly">
          <img
            className="w-[25%]"
            src={html}
            alt="Logotipo da linguagem HTML"
          />
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
      <p className="text-center">
        No final de 2023, durante as férias após o terceiro semestre do curso de{" "}
        <span className="highlight">Ciência da Computação (UESB)</span>, passei
        a investir intensamente em minha carreira profissional como dev.{" "}
        <span className="highlight">E aqui estou =)</span>
      </p>
      <div className="flex flex-col items-center gap-4 my-16">
        <p>Ah! E se te interessa saber:</p>
        <img
          className="shadow-lg shadow-green-500 rounded-lg"
          width={150}
          src={EuSouDoRock}
          alt="Esqueleto com cartola e calça de latex justa tocando uma guitarra com os dizeres: SIM AMIGO. EU SOU DO ROCK!"
        />
      </div>
    </div>
  );
};
