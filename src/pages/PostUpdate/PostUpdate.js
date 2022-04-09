import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { usePosts } from '../../context/postContext';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


export const PostUpdate = () => {
  const { getPost, updatePost } = usePosts();
  const params = useParams();
  const [post, setPost] = useState({ titulo: "", descripcion: "", imagen: {} });

  useEffect(() => {
    async function init() {
      if (params.id) {
        const postTemp = await getPost(params.id);
        setPost(postTemp);
      }
    }
    init();
  }, [params.id, getPost]);

  return (
    <div className="w-full max-w-lg m-auto mt-6">
      <p className='text-white text-lg text-center mb-6'>Editar publicación</p>
      <Formik 
        initialValues={ post }
        enableReinitialize
        validationSchema={Yup.object({ 
          titulo: Yup.string().required('El titulo es requerido'),
          descripcion: Yup.string().required('La descripcion es obligatoria')
        })}
        onSubmit={ 
          async (values, action) => {
            await updatePost(params.id, values);
            // msg
            toast.success('Post actualizado!')
          }
        }
      >
        {
          ({handleSubmit, isSubmitting}) => (
            <Form className="bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 mb-20 flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">Titulo de la publicación</label>
                <Field className="bg-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="titulo" type="text"/>
                <ErrorMessage component='p' name='titulo' className='text-red-400 text-sm' />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Contenido de la publicación</label>
                <Field component="textarea" rows="5" className="bg-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="descripcion" type="text"/>
                <ErrorMessage component='p' name='descripcion' className='text-red-400 text-sm' />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Imagen de la publicación</label>
                <img className="w-full" src={post.imagen.url} alt="Imagen publicación" />
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
                  { isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />) : ("Actualizar") }
                </button>
              </div>
            </Form>
          )
        }
      </Formik>

      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Posts. - todos los derechos reservados.
      </p>
    </div>
  )
}
