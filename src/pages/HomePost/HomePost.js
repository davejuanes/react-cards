import { CardPost } from "../../components/CardPost";
import { usePosts } from "../../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";

export const HomePost = () => {
  const { posts } = usePosts();

  //Si no hay publicaciones
  if (posts.length === 0) {
    return (
      <div className="mt-6 flex flex-col justify-center items-center">
        <VscEmptyWindow className="text-5xl text-white mt-6" />
        <h3 className="text-white">No hay publicaciones aún. Registra una nueva Aquí.</h3>
      </div>
    );
  }

  //Caso contratio, muestra las publicaciones
  return (
    <div className="text-white">
      <p className="text-lg text-center mt-6">Todas las publicaciones</p>
      <div className="mx-16 mt-6 grid grid-cols-1 gap-3 pb-20">
        {posts.map((post) => (
          <CardPost post={post} key={post._id} />
        //   <CardPost nombreEnComponenteHijo={elVarlorAPasar} clave={ClaveUnica}/>
        ))}
      </div>
    </div>
  );
};
