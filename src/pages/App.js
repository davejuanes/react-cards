import { Routes, Route } from "react-router-dom";
import { PostProvider } from "../context/postContext";
import { HomePost } from "./HomePost/HomePost";
import { FormPost } from "./FormPost/FormPost";
import { NotFound } from "./NotFound/NotFound";
import { NavBar } from "../components/NavBar";
import "./App.css";
import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <NavBar />

      <div className="px-10 container m-auto">
        <PostProvider>
            <Routes>
              <Route path="/" element={<HomePost />}></Route>
              <Route path="nueva" element={<FormPost />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Toaster />
        </PostProvider>
      </div>

      <Footer />

    </div>
  );
}

export default App;
