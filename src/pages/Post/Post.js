import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { usePosts } from "../../context/postContext";
import moment from "moment";

export const Post = () => {
  const params = useParams();
  const { getPost, deletePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({ titulo: '', descripcion: '', imagen: {} });

  useEffect(() => {
    async function init() {
        if (params.id) {
            const postTemp = await getPost(params.id);
            setPost(postTemp);
        } 
    }     
    init();
  }, [params.id, getPost]);

  const handleDelete = (id) => {
    toast((t) => (
      <div className="px-2 py-2">
        <p className="text-white my-4">
          ¿Esta seguro de eliminar la publicación?
        </p>
        <hr />
        <div className="my-4">
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-3 text-sm text-white rounded-sm mx-2"
            onClick={ () => { toast.dismiss(t.id); deletePost(id); navigate('/'); } }
          >
            Eliminar
          </button>

          <button
            className="bg-slate-400 hover:bg-slate-500 px-3 py-3 text-white rounded-sm mx-2"
            onClick={ () => toast.dismiss(t.id) }
          >
            Cancelar
          </button>
        </div>
      </div>
    ), {style: {background: '#202020'}});
  };

  return (
    <div className="w-full max-w-md m-auto mt-6 pb-20">
      <div className="bg-zinc-800 max-w-md rounded overflow-hidden shadow-lg">
        <img className="w-full" src={post.imagen.url} alt="Imagen publicaciÃ³n" />
        <div className="px-6 py-4">
          <div className="text-white font-bold text-xl mb-2">{post.titulo}</div>
          <p className="text-gray-300 text-base">{post.descripcion}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <AiOutlineClockCircle className="text-gray-700 inline mr-1" />
            {moment(post.createdAt).startOf('day').fromNow()}
          </span>
          <span className="inline-block bg-emerald-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer">
            <AiOutlineEdit className="text-white inline mr-1" />
            Editar
          </span>
          <span 
          className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer" 
          onClick={() => handleDelete(post._id)}>
            <BsTrash className="text-white inline mr-1" />
            Borrar
          </span>
        </div>
      </div>
    </div>
  );
};
