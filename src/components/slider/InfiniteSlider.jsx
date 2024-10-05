export const InfiniteSlider = ({ Logos }) => {
  return (
    <div className="rounded-lg relative m-auto md:w-full w-[80vw] h-[100px] flex overflow-hidden bg-slate-900 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#0f172a_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#0f172a_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex gap-16 text-[50px]">
        {Logos.map((logo, index) => (
          <div className="slide flex w-fit items-center" key={index}>
            {logo}
          </div>
        ))}
        {Logos.map((logo, index) => (
          <div
            className="slide flex w-fit items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
