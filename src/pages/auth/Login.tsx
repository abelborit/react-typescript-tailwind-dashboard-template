import { FcGoogle } from "react-icons/fc";
import {
  RiMailLine,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const iconSize = 22;
  const inputContainerClass =
    "flex justify-center items-center bg-gray-800 hover:bg-gray-900 w-full max-w-[350px] rounded-xl px-4 py-3 gap-3";

  const inputClass = "bg-inherit w-full outline-none text-sm md:text-base";

  return (
    <div className="text-color-light bg-primary-dark-900/75 md:bg-primary-dark-900 flex flex-col justify-center items-center gap-6 py-6 px-6 shadow-lg relative rounded-xl md:rounded-none w-[90vw] md:w-[50vw] lg:w-[40vw] md:h-screen">
      {/* borde con efecto fade-in fade-out */}
      {/* <div className="rounded-xl w-full h-full shadow-xl shadow-accent-primary/40 animate-pulse absolute"></div> */}

      <h2 className="text-4xl md:text-5xl text-center uppercase font-bold tracking-[4px] text-accent-primary">
        Welcome Back!
      </h2>

      <button className="bg-zinc-600 hover:bg-zinc-700 w-full max-w-[350px] py-3 rounded-full flex justify-center items-center gap-3 outline-none hover:scale-95 transition-all duration-300">
        <FcGoogle size={20} />
        <span className="text-sm md:text-base">Login with Google</span>
      </button>

      <hr className="border-color-light/50 w-[100%] sm:w-[90%]" />

      <form className="flex flex-col justify-center items-center gap-4 w-full">
        <div className={inputContainerClass}>
          <RiMailLine className="text-accent-primary" size={iconSize} />
          <input
            type="email"
            placeholder="correo@example.com"
            className={inputClass}
          />
        </div>

        <div className={inputContainerClass}>
          <RiLock2Line className="text-accent-primary" size={iconSize} />
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="false"
            placeholder="Contraseña"
            className={inputClass}
          />
          {showPassword ? (
            <RiEyeLine
              className="text-accent-primary cursor-pointer"
              size={iconSize}
              onClick={handleShowPassword}
            />
          ) : (
            <RiEyeOffLine
              className="text-accent-primary cursor-pointer"
              size={iconSize}
              onClick={handleShowPassword}
            />
          )}
        </div>

        <button className="bg-accent-primary hover:bg-accent-primary/75 hover:scale-95 transition-all duration-300 w-full max-w-[350px] py-3 rounded-xl flex justify-center items-center outline-none">
          <span className="text-sm md:text-base xl:text-lg font-bold text-primary-dark-900">
            Login
          </span>
        </button>
      </form>

      <div className="flex flex-col w-full max-w-[350px] text-right text-sm md:text-base">
        <span>You don't have account?</span>
        <Link
          to="/auth/register"
          className="text-accent-secondary hover:text-accent-secondary/75"
        >
          Register now!
        </Link>
      </div>
    </div>
  );
};
