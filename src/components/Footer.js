import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-100 flex p-4 bg-zinc-700 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-white sm:text-center">
        © 2022. Dante Abraham Q. Todos los derechos reservados.
      </span>

      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Politicas de privacidad
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Contactos
          </Link>
        </li>
      </ul>
    </footer>
  );
};
