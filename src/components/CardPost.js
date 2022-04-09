import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const CardPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="flex" onClick={() => navigate(`/publicacion/${post._id}`)}>
      <img src={post.imagen.url} className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' alt="imagen"/>

      <div className="bg-zinc-800 rounded-b hover:bg-zinc-700 cursor-pointer lg:rounded-b-none lg:rounded-r p-4 w-full flex flex-col justify-between leading-normal">
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
