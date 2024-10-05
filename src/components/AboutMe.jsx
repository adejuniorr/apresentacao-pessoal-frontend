import GustavoGuanabaraMobile from "/gustavo-guanabara-mobile.svg";
import GustavoGuanabaraDesktop from "/gustavo-guanabara-desktop.svg";
import EuSouDoRock from "/eu-sou-do-rock.svg";

export const AboutMe = () => {
  return (
    <div>
      <div>
        <p>Eu sou um curioso e um amante das artes.</p>
        <p>
          E também sou <span>desenvolvedor de websites</span> 🙂
        </p>
        <p>
          Meu nome é Ademir Júnior, sou baiano, tenho 22 anos e pra mim esta
          área é o melhor dos dois mundos: <span>arte e tecnologia</span>.
        </p>
      </div>
      <div>
        <p>
          Iniciei meus estudos em desenvolvimento frontend há mais ou menos{" "}
          <span>2 anos</span> atrás, assistindo ao{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLeuwJul7tRBfsm7sxnR5_7wG3KvaQ6oOt"
          >
            curso em vídeo de JavaScript no Youtube
          </a>
        </p>
        <picture>
          <source media="(min-width: 768px)" srcSet={GustavoGuanabaraDesktop} />
          <img src={GustavoGuanabaraMobile} alt="" />
        </picture>
      </div>
      <p>
        No final de 2023, durante as férias após o terceiro semestre do curso de
        <span>Ciência da Computação (UESB)</span>, passei a investir
        intensamente em minha carreira profissional como dev. E aqui estou =)
      </p>
      <div>
        <p>Ah! E se te interessa saber:</p>
        <img src={EuSouDoRock} alt="" />
      </div>
    </div>
  );
};
