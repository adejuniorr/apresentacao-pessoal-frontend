import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="h-screen bg-slate-900 text-slate-50">
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
