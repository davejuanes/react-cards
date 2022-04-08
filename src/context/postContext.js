import { createContext, useContext, useEffect, useState } from "react";
import { createPostReq, getPostsReq } from "../services/post";

// Creamos el contexto
const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

// Componente proveedor
export const PostProvider = ({ children }) => {
  // Data centralizada utilizando el hook useState
  const [posts, setPosts] = useState([]);

  // funciones que interactuan con el cliente http
  // y que modifican una parte del State
  const getPosts = async () => {
    const res = await getPostsReq();
    setPosts(res.data.posts);
  }

  const crearPost = async (post) => {
    const res = await createPostReq(post);
    setPosts([...posts, res.data.post]);
  }

  // Renderiza el componente
  useEffect(() => { getPosts(); },[])

  // Retornamos el context provider, y la data o valores
  // que pueden ser accedidos por los componentes hijos
  return (
      <postContext.Provider value={ { posts, crearPost, getPosts } }>
        { children }
      </postContext.Provider>
  )
}
