import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const baseClass =
    "hover:animate-jump-button fixed bottom-0 right-0 text-green-500 text-[2rem] bg-slate-50 rounded-full p-2 m-4";
  const invisibleClass = "hidden";

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a
      className={visible ? baseClass : `${baseClass} ${invisibleClass}`}
      href="#home"
      title="Clique para ir para o topo da página"
    >
      <FaArrowUp />
    </a>
  );
};
