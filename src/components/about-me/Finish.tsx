import EuSouDoRock from "/images/about-me/eu-sou-do-rock.svg";

export const Finish = () => {
  return (
    <>
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
    </>
  );
};
