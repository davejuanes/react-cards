import { createContext, useContext, useEffect, useState } from "react";
import { createPostReq, deletePostReq, getPostReq, getPostsReq } from "../services/post";

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
    try {
      const res = await getPostsReq();
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostReq(id);
      return res.data.post;
    } catch (error) {
      console.log(error);
    }
  };

  const crearPost = async (post) => {
    try {
      const res = await createPostReq(post);
      setPosts([...posts, res.data.post]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await deletePostReq(id);
      setPosts(posts.filter( post => post._id !== id ));
    } catch (error) {
      console.log(error);
    }
  };

  // Renderiza el componente
  useEffect(() => {
    getPosts();
  }, []);

  // Retornamos el context provider, y la data o valores
  // que pueden ser accedidos por los componentes hijos
  return (
    <postContext.Provider value={{ posts, crearPost, getPosts, getPost, deletePost }}>
      {children}
    </postContext.Provider>
  );
};
