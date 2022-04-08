import { Field, ErrorMessage, Form, Formik } from "formik";

export const FormPost = () => {
  return (
    <div className="w-full max-w-lg m-auto mt-6">
      <p className="text-white text-lg text-center mb-6">Nueva publicación</p>

      <Formik
        initialValues={{ titulo: "", descripcion: "", archivo: null }}
        onSubmit={async (values, action) => {}}
      >
        {({ handleSubmit }) => (
          <Form className="bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Titulo de la publicación
              </label>
              <Field
                className="bg-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="titulo"
                type="text"
              />
              <ErrorMessage
                component="p"
                name="titulo"
                className="text-red-400 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contenido de la publicación
              </label>
              <Field
                component="textarea"
                rows="5"
                className="bg-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="descripcion"
                type="text"
              />
              <ErrorMessage
                component="p"
                name="descripcion"
                className="text-red-400 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Imagen de la publicación
              </label>
              <input
                className="bg-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="archivo"
                type="file"
                accept="image/*"
              />
              <ErrorMessage
                component="p"
                name="archivo"
                className="text-red-400 text-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
