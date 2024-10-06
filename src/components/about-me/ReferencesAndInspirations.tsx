import GustavoGuanabaraMobile from "/images/about-me/gustavo-guanabara-mobile.svg";
import GustavoGuanabaraDesktop from "/images/about-me/gustavo-guanabara-desktop.svg";

export const ReferencesAndInspirations = () => {
  return (
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
          rel="noopener noreferrer"
          className="link-text"
          target="_blank"
          href="https://www.youtube.com/playlist?list=PLeuwJul7tRBfsm7sxnR5_7wG3KvaQ6oOt"
        >
          curso em vídeo de JavaScript no YouTube.
        </a>
        👨‍💻
      </p>
    </div>
  );
};
