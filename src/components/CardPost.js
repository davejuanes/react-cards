import React from "react";
import { toast } from "react-hot-toast";

export const CardPost = () => {
  const handleDelete = () => {
    toast((t) => (
      <div className="px-2 py-2">
        <p className="text-white my-4">
          ¿Esta seguro de eliminar la publicación?
        </p>
        <hr />
        <div className="my-4">
          <button className="bg-red-500 hover:bg-red-400 px-3 py-3 text-sm text-white rounded-sm mx-2">
            Eliminar
          </button>
          <button className="bg-slate-400 hover:bg-slate-500 px-3 py-3 text-white rounded-sm mx-2">
            Cancelar
          </button>
        </div>
      </div>
    ), {style: {background: '#202020'}});
  };

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>Titulo</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={() => handleDelete()}
          >
            Eliminar
          </button>
        </div>
        <p>Descripcion</p>
      </div>
    </div>
  );
};
