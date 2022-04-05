import { createContext, useContext, useState } from "react";
import { createPostReq } from "../services/post";

// Creamos el contexto
const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

// Componente proveedor
export const PostProvider = ({ children }) => {
  // Data
  const [posts, setPosts] = useState([]);

  // funciones que interactuan con el cliente http
  const crearPost = async (post) => {
    const res = await createPostReq(post);
    setPosts([...posts, res.data.post]);
  }

  return (
      <postContext.Provider value={ { posts, crearPost } }>
        { children }
      </postContext.Provider>
  )
}
