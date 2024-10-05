import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import me from "/me-dark.svg";

export const Home = () => {
  const highlightText = "text-green-500";
  const linkText = "text-green-500 underline";
  const hoverLinkText = "hover:text-green-500 transition-all duration-300";

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-center gap-2 px-4 py-6">
      <div className="text-center flex flex-col">
        <h1>
          Oi, eu sou o <span className={highlightText}>Adê</span> =)
        </h1>
        <h2>
          E sou <span className={highlightText}>Desenvolvedor Front-End</span>
        </h2>
        <p className="text-justify mt-4">
          Aqui nesta página de apresentação você pode conhecer um pouco mais{" "}
          <a href="#about-me" className={linkText}>
            sobre mim
          </a>{" "}
          e também conhecer alguns dos{" "}
          <a href="#projects" className={linkText}>
            meus projetos
          </a>
          .
        </p>
        <div className="flex flex-col items-end gap-2 mt-6">
          <p>Entre em contato 😉</p>
          <div className="flex gap-4 text-[1.8rem] w-fit mr-5">
            <a
              className={hoverLinkText}
              target="_blank"
              href="https://whatsa.me/5577991379957"
            >
              <FaWhatsapp />
            </a>{" "}
            <a
              className={hoverLinkText}
              target="_blank"
              href="https://github.com/adejuniorr/"
            >
              <FaGithub />
            </a>{" "}
            <a
              className={hoverLinkText}
              target="_blank"
              href="https://www.linkedin.com/in/dev-ademirjunior/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50vw]">
        <img className="object-contain" src={me} alt="Foto do desenvolvedor" />
      </div>
    </main>
  );
};
