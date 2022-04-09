import moment from "moment";
import React from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircle } from "react-icons/bs";
import 'moment/locale/es';
moment.locale('es');

export const CardPost = ({ post }) => {

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

  /* return (
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
  ); */

  return (
    <div className="flex" /* onClick={() => navigate(`/publicacion/${post._id}`)} */>
      <img src={post.imagen.url} className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' alt="imagen"/>

      <div className="bg-zinc-800 rounded-b hover:bg-zinc-700 cursos-pointer lg:rounded-b-none lg:rounded-r p-4 w-full flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <p className="text-sm text-gray-400 flex items-center">
            <BsCheckCircle className="text-gray-400"/>
            &nbsp; Publicación
          </p>
          <div className="text-white font-bold text-lg mb-2">{post.titulo}</div>
          <p className="text-white text-base">
            { (post.descripcion).slice(0, 90) } { ((post.descripcion).length > 90) ? '...' : ''}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-300">{moment(post.createdAt).startOf('day').fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  )
};
