import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import me from "/images/me-dark.svg";

export const Home = () => {
  const hoverLinkText = "hover:text-green-500 transition-all duration-300";

  return (
    <main
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 h-[85vh] mb-6"
    >
      <div className="flex flex-col">
        <h1>
          Oi, eu sou o <span className="highlight">Adê</span> =)
        </h1>
        <h2>
          E sou <span className="highlight">Desenvolvedor Front-End</span>
        </h2>
        <p className="text-justify mt-4">
          Aqui nesta página de apresentação você pode conhecer um pouco mais{" "}
          <a href="#about-me" className="link-text">
            sobre mim
          </a>{" "}
          e também conhecer alguns dos{" "}
          <a href="#projects" className="link-text">
            meus projetos
          </a>
          .
        </p>
        <div className="flex flex-col items-end gap-2 mt-6">
          <p>Entre em contato 😉</p>
          <div className="flex gap-4 text-[1.8rem] w-fit mr-5">
            <a
              title="Whatsapp"
              rel="noopener noreferrer"
              className={hoverLinkText}
              target="_blank"
              href="https://whatsa.me/5577991379957"
            >
              <FaWhatsapp />
            </a>{" "}
            <a
              title="LinkedIn"
              rel="noopener noreferrer"
              className={hoverLinkText}
              target="_blank"
              href="https://www.linkedin.com/in/dev-ademirjunior/"
            >
              <FaLinkedin />
            </a>{" "}
            <a
              title="GitHub"
              rel="noopener noreferrer"
              className={hoverLinkText}
              target="_blank"
              href="https://github.com/adejuniorr/"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50vw] md:w-[70vw]">
        <img className="object-contain" src={me} alt="Foto do desenvolvedor" />
      </div>
    </main>
  );
};
