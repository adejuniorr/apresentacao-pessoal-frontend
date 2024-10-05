import me from "/me-dark.svg";

export const Home = () => {
  return (
    <main>
      <div>
        <h1>Oi, eu sou o <span>Adê</span> =)</h1>
        <h2>E sou <span>Desenvolvedor Front-End</span></h2>
        <p>
          Aqui nesta página de apresentação você pode conhecer um pouco mais{" "}
          <a href="#about-me">sobre mim</a> e também conhecer alguns dos{" "}
          <a href="#projects">meus projetos</a>.
        </p>
        <div>
          <p>Entre em contato ;)</p>
          <div>
            <a href="https://whatsa.me/5577991379957">whatsapp</a> {" "}
            <a href="https://github.com/adejuniorr/">github</a> {" "}
            <a href="https://www.linkedin.com/in/dev-ademirjunior/">linkedin</a>
          </div>
        </div>
      </div>
      <div>
        <img src={me} alt="Foto do desenvolvedor" />
      </div>
    </main>
  );
};
