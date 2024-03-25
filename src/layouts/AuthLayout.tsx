import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="relative bg-primary-dark-900 w-screen min-h-screen">
      {/* Imagen de fondo */}
      {/* cargar la imagen más adecuada según el dispositivo */}
      {/* Atribución de la imagen: https://unsplash.com/es/fotos/bloques-de-madera-blancos-y-negros-ICTjWYzpoc0?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash */}
      <img
        className="h-screen w-screen object-cover md:w-[50vw] md:translate-x-[50vw] lg:w-[60vw] lg:translate-x-[40vw]"
        src="/src/assets/images/background-wallpaper-650.jpg"
        alt="Background Modern"
        srcSet="
          /src/assets/images/background-wallpaper-650.jpg 650w,
          /src/assets/images/background-wallpaper-1000.jpg 1000w,
          /src/assets/images/background-wallpaper-1500.jpg 1500w,
          /src/assets/images/background-wallpaper-2200.jpg 2200w,
          /src/assets/images/background-wallpaper-2958.jpg 2958w
        "
      />

      {/* Contenido */}
      <div className="absolute inset-0 z-[9999] flex justify-center items-center md:block">
        <Outlet />
      </div>

      {/* la capa oscura y la capa con gradiente se colocan aquí al último ya que si se coloca al principio entonces si se quiere mover la imagen usando el translate-x se movería todo junto o sino se pierde este efecto ya que de cierta forma están unidas, entonces al estar aquí al último respetarán su posición y no afecta al div del Outlet ya que tiene un z-[9999] */}
      {/* Capa oscura. La propiedad inset-0 hace que esta capa ocupe toda la pantalla */}
      <div className="absolute inset-0 bg-neutral-900/80"></div>
      {/* Capa con gradiente. La propiedad inset-0 hace que esta capa ocupe toda la pantalla */}
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-orange-900/10 sm:from-orange-900/5 to-transparent"></div>
    </div>
  );
};
