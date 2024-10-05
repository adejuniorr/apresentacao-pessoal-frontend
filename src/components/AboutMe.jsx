import GustavoGuanabaraMobile from "/images/gustavo-guanabara-mobile.svg";
import GustavoGuanabaraDesktop from "/images/gustavo-guanabara-desktop.svg";
import EuSouDoRock from "/images/eu-sou-do-rock.svg";
import html from "/images/logos/html-logo.svg";
import css from "/images/logos/css-logo.svg";
import javascript from "/images/logos/js-logo.svg";
import react from "/images/logos/react-logo.svg";
import figma from "/images/logos/figma-logo.svg";
import nodejs from "/images/logos/nodejs-logo.svg";
import mysql from "/images/logos/mysql-logo.svg";
import ts from "/images/logos/ts-logo.svg";
import git from "/images/logos/git-logo.svg";

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
        <div className="flex md:justify-center md:gap-16 overflow-x-scroll md:overflow-auto gap-6">
          <img
            className="w-[90px]"
            src={html}
            alt="Logotipo da linguagem HTML"
          />
          <img className="w-[90px]" src={css} alt="Logotipo da linguagem CSS" />
          <img
            className="w-[90px]"
            src={javascript}
            alt="Logotipo da linguagem JavaScript"
          />
        </div>
        <p>
          Com o passar do tempo fui descobrindo e me aprofundando em novas
          tecnologias
        </p>
        <div className="flex md:justify-center md:gap-16 overflow-x-scroll md:overflow-auto gap-6">
          <img
            className="w-[90px]"
            src={react}
            alt="Logotipo da biblioteca React"
          />
          <img
            className="w-[90px]"
            src={ts}
            alt="Logotipo da linguagem TypeScript"
          />
          <img className="w-[90px]" src={nodejs} alt="Logotipo do NodeJS" />
        </div>
        <div className="flex md:justify-center md:gap-16 overflow-x-scroll md:overflow-auto gap-6">
          <img className="w-[90px]" src={git} alt="Logotipo do Git" />
          <img className="w-[90px]" src={figma} alt="Logotipo do Figma" />
          <img className="w-[90px]" src={mysql} alt="Logotipo do SGBD MySQL" />
        </div>
      </div>
      <p className="text-center">
        No final de 2023, durante as férias após o terceiro semestre do curso de{" "}
        <span className="highlight">Ciência da Computação (UESB)</span>, passei
        a investir intensamente em minha carreira profissional como dev.{" "}
        <span className="highlight">E aqui estou =)</span>
      </p>
      <div className="flex flex-col items-center gap-4">
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
