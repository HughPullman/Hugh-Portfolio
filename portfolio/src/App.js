import Header from "./components/Header/Header";
import "./App.scss"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CanvasMac from "./components/CanvasMac/CanvasMac";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "react";
import "./web.config";

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    }, 3500)
  },[])

  return (
    <div className="app">
      {loading ? <Loading/> 
      :<>
      <Loading/>
      <Header/>
      <CanvasMac/>
      <Home/>
      <About />
      <Projects/>
      <Contact/>
      </>}
    </div>
  );
}

export default App;
