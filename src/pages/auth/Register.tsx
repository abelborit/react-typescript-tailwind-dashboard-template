import { FcGoogle } from "react-icons/fc";
import {
  RiMailLine,
  RiUserLine,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowConfirmPassword(false);
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowPassword(false);
    setShowConfirmPassword(!showConfirmPassword);
  };

  const iconSize = 22;
  const inputContainerClass =
    "flex justify-center items-center bg-gray-800 hover:bg-gray-900 w-full max-w-[350px] rounded-xl px-4 py-3 gap-3";

  const inputClass = "bg-inherit w-full outline-none text-sm md:text-base";
  const titleClass =
    "font-LatoItalic text-5xl md:text-6xl text-center font-bold tracking-[4px]";

  return (
    <div className="text-color-light bg-primary-dark-900/75 md:bg-primary-dark-900 flex flex-col justify-center items-center gap-6 py-6 px-6 shadow-lg relative rounded-xl md:rounded-none w-[90vw] md:w-[50vw] lg:w-[40vw] md:h-screen">
      {/* borde con efecto fade-in fade-out */}
      {/* <div className="rounded-xl w-full h-full shadow-xl shadow-accent-primary/40 animate-pulse absolute"></div> */}

      <div className="relative w-full">
        <h2 className={`relative text-accent-primary z-40 ${titleClass}`}>
          Register Now!
        </h2>
        <h2
          className={`absolute top-[3.5px] left-[3px] w-full text-accent-primary/25 ${titleClass}`}
        >
          Register Now!
        </h2>
      </div>

      <button className="bg-zinc-600 hover:bg-zinc-700 w-full max-w-[350px] py-3 rounded-full flex justify-center items-center gap-3 outline-none hover:scale-95 transition-all duration-300">
        <FcGoogle size={20} />
        <span className="text-sm md:text-base">Register with Google</span>
      </button>

      <hr className="border-color-light/50 w-[100%] sm:w-[90%]" />

      <form className="flex flex-col justify-center items-center gap-4 w-full">
        <div className={inputContainerClass}>
          <RiUserLine className="text-accent-primary" size={iconSize} />
          <input
            type="text"
            placeholder="Juan Pedraza"
            className={inputClass}
          />
        </div>

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

        <div className={inputContainerClass}>
          <RiLock2Line className="text-accent-primary" size={iconSize} />
          <input
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="false"
            placeholder="Confirmar contraseña"
            className={inputClass}
          />
          {showConfirmPassword ? (
            <RiEyeLine
              className="text-accent-primary cursor-pointer"
              size={iconSize}
              onClick={handleShowConfirmPassword}
            />
          ) : (
            <RiEyeOffLine
              className="text-accent-primary cursor-pointer"
              size={iconSize}
              onClick={handleShowConfirmPassword}
            />
          )}
        </div>

        <button className="bg-accent-primary hover:bg-accent-primary/75 hover:scale-95 transition-all duration-300 w-full max-w-[350px] py-3 rounded-xl flex justify-center items-center outline-none">
          <span className="text-sm md:text-base xl:text-lg font-bold text-primary-dark-900">
            Create Account
          </span>
        </button>
      </form>

      <div className="flex flex-col w-full max-w-[350px] text-right text-sm md:text-base">
        <span>You already have account?</span>
        <Link
          to="/auth/login"
          className="font-LatoItalic font-bold tracking-[1px] text-accent-secondary hover:text-accent-secondary/75"
        >
          Login now!
        </Link>
      </div>
    </div>
  );
};
