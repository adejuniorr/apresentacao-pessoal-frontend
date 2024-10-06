import { Card } from "./projects/Card";
import PetsAndTips from "/images/projects/pets-and-tips.jpg";
import ReactCards from "/images/projects/react-cards-music-legends.png";
import ReactLoginPage from "/images/projects/react-login-page.png";

const projects = [
  {
    img: PetsAndTips,
    imgAlt: "Imagem de um cachorrinho sorridente",
    title: "Pets&Tips",
    description:
      "Uma aplicação muito fofa e interessante pra quem ama ver cachorros e gatos na internet.",
    link: "https://pets-and-tips.vercel.app/",
    repo: "https://github.com/adejuniorr/pets-and-tips",
  },
  {
    img: ReactCards,
    imgAlt:
      "Imagem com os dizeres 'Music Legends. Selecione uma das coleções abaixo para ter acesso às cartas.'",
    title: "Music Legends",
    description:
      "Um baralho de coleções com as maiores LENDAS do Rock n Roll e do Pop.",
    link: "https://react-cards-musiclegends.vercel.app/",
    repo: "https://github.com/adejuniorr/react-cards",
  },
  {
    img: ReactLoginPage,
    imgAlt:
      "Imagem com tela de login contendo os dizeres 'Bem-vindo(a) ao System', título 'Entrar' e campos de CPF e senha",
    title: "Login Page Model",
    description:
      "Um modelo de página de login com design responsivo feito com React + Styled Components.",
    link: "https://system-login-page.netlify.app/",
    repo: "https://github.com/adejuniorr/login-page-model",
  },
  {
    img: "",
    imgAlt: "",
    title: "Em breve...",
    description: "Mais projetos incríveis estão por vir! 😉",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="pb-10">
      <h1 className="highlight">
        <a href="#projects">#projetos</a>
      </h1>
      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap gap-10 items-center justify-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};
