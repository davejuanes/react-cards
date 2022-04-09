import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className="text-white flex justify-center mt-24">
      <div className="inline-flex items-center">
        <h3 className="text-3xl">404</h3>
        <div className="text-3xl">&nbsp;|&nbsp;</div>
        <p className="text-sm">
          Esta pagina no esta disponible
          <small
            onClick={(e) => { e.preventDefault(); navigate(-1); }} 
            className="text-sky-600 text-sm cursor-pointer"
            >
            &nbsp; &#8592; Volver
          </small>
        </p>
      </div>
    </div>
  );
};
