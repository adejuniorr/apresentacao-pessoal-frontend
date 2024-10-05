import { AboutMe } from "./components/AboutMe";
import { GoToTopButton } from "./components/GoToTopButton";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div className="text-slate-50 px-4 py-6 md:py-0 w-[90vw] lg:w-[70vw] xl:w-[50vw] m-auto">
        <Home />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
