import { Finish } from "./about-me/Finish";
import { Introduction } from "./about-me/Introduction";
import { ReferencesAndInspirations } from "./about-me/ReferencesAndInspirations";
import { Technologies } from "./about-me/Technologies";

export const AboutMe = () => {
  return (
    <div id="about-me" className="py-6 flex flex-col gap-4">
      <Introduction />
      <ReferencesAndInspirations />
      <Technologies />
      <Finish />
    </div>
  );
};
