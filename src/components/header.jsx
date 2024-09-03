export const Header = () => {
  return (
    <section
      className="relative h-[120px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/header2.jpg')`,
      }}
    >
      <section className="absolute bottom-0 left-0 right-0 top-0 h-[150px] w-full overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600 bg-fixed opacity-90">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="font-p font-Pacifico text-5xl font-bold text-blue-300">
            Si<span className="text-blue-50">Contact</span>
          </h1>
          <p className="font-Poppins text-xs font-light text-slate-50">
            Welcome to myContact App
          </p>
        </div>
      </section>
    </section>
  );
};
