import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="bg-slate-900 text-slate-50 px-4 py-6">
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
