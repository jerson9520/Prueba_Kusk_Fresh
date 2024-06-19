

export const Coment = () => {
  return (
    <div className="w-auto h-20 p-5 grid grid-cols-4 gap-5 rounded-lg m-2 shadow-xl py-2 lg:flex-row lg:justify-center lg:shadow-none lg:text-2xl lg:items-center lg:ml-24">
      <div className="rounded-lg col-start-1 col-end-4 row-span-2">
        <h2 className="p-3">
          {" "}
          !! People who loves to eat are always Best People{" "}
        </h2>
      </div>
      <div className="rounded-lg col-start-4 row-start-2">
        <p className="gap-4 text-primary">Julia Child</p>
      </div>
    </div>
  );
};
