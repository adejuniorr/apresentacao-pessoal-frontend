import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="text-slate-50 px-4 py-6 w-[90vw] lg:w-[70vw] xl:w-[50vw] m-auto">
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
