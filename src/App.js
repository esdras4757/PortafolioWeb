import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Button, Popover, Tour } from "antd";
import mexico from './images/mexico.png'
import us from './images/united-states.png'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

const isMobile = window.innerWidth <= 768;



function App() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(localStorage.getItem('Tour')=='1'||isMobile==true?false:true);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    sessionStorage.clear()
    localStorage.setItem('lenguage',lng)

  };

  const content = (
    <div>
      <p onClick={() => changeLanguage('es')} className="row align-content-center align-items-center border border-2 py-1"><p className="col-5 m-0">Spanish</p> <img style={{width:70}} src={mexico}/> </p>
      <p onClick={() => changeLanguage('en')} className="row align-content-center align-items-center border border-2 py-1"><p className="col-5 m-0">English</p> <img style={{width:70}} src={us}/> </p>
    </div>
  );
  

  const tourContainerStyle = isMobile
  ? {
      maxWidth: '90vw',
      fontSize: '0.8rem',
      lineHeight: '1.2',
    }
  : {
      maxWidth: 'auto',
      fontSize: '1rem',
      lineHeight: '1.5',
    };


  
    const steps = [
      {
        title: <span style={tourContainerStyle}>Hola!</span>,
        description: (
          <div style={tourContainerStyle}>
            Si te pierdes en mi aplicación, no te preocupes, nadie te verá dando
            vueltas en círculos. Simplemente usa el menú de navegación.
          </div>
        ),
        target: () =>isMobile? document.querySelector('#responsive-navbar-nav'): document.querySelector('.navbar-nav'),
        placement: isMobile ? 'bottom' : 'right',
      },
      {
        title: <span style={tourContainerStyle}>C.V</span>,
        description: (
          <div style={tourContainerStyle}>
            ¿Buscas mi CV? No te preocupes, ¡yo tampoco lo encuentro a veces! Pero
            está en el menú.
          </div>
        ),
        target: () => document.querySelector('#cv'),
        placement: isMobile ? 'bottom' : 'right',
      },
      {
        title: <span style={tourContainerStyle}>Cambia el idioma</span>,
        description: (
          <div style={tourContainerStyle}>
            Si el idioma no es tu rollito, dale al botóncito
          </div>
        ),
        target: () => document.querySelector('.fa-earth-americas'),
        placement: 'rightTop',
      },
      {
        title: <span style={tourContainerStyle}>Tutorial</span>,
        description: (
          <div style={tourContainerStyle}>
            ¿Te perdiste el tutorial? ¡No pasa nada! El botón mágico lo trae de
            vuelta en un instante.
          </div>
        ),
        target: () => document.querySelector('.tuto'),
        placement: isMobile ? 'bottom' : 'leftTop',
      },
    ];
    
  


  return (
    <div className="App">
      <div className="App-header">
        <Header t={t}/>
        <About t={t}/>
        <Skills t={t}/>
        <Projects t={t} i18n={i18n}/>
        <Contact t={t} />
        <div
          className="row idioma"
          style={{
            position: "fixed",
            borderRadius: 200,
            bottom: "4%",
            left: isMobile?"8%" :"3%",
            background: "rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          <Popover content={content} title="Lenguage">
           <i className="fas fa-earth-americas text-white"></i>
          </Popover>
        </div>
      </div>
      <Tour open={open} onClose={() => {
        setOpen(false)
        localStorage.setItem('Tour','1')
        }} 
        steps={steps} />
      <Button className="tuto" onClick={()=>setOpen(true)} style={{
            position: "fixed",
            borderRadius: 200,
            display: isMobile?'none':'block',
            bottom: "2%",
            right: "1%",
            background: "rgba(255,255,255,0.1)",
            cursor: "pointer",
            color:"white"
          }}>Ver tutorial</Button>
    </div>
  );
}

export default App;
