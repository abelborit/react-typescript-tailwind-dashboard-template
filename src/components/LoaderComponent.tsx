export const LoaderComponent = () => {
  return (
    <div className="bg-primary-dark-900 w-screen h-screen flex flex-col gap-6 justify-center items-center">
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>

      <p className="text-2xl text-color-light tracking-[3px] text-loader">
        -- Loading --
      </p>
    </div>
  );
};
