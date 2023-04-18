import { Card, Carousel, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import Filters from "./sections/Filters";
import { isEmpty, isNil } from "lodash";


const images = require.context('../images', true);

const imagePaths = images.keys();

const imagesObj = imagePaths.reduce((acc, path) => {
  acc[path] = images(path);
  return acc;
}, {});
const isMobile = window.innerWidth <= 768;
console.log(imagesObj);

const contentStyle = {
  margin: '10px auto',
  width: '80%',
  height: '800px',
  color: '#fff',
  lineHeight: '25px',
  textAlign: 'center',
  background: '#2b2b2b',
  borderRadius:'30px',
  boxShadow:'0px 0px 2px black'
};

const proyectos = [
  {
    id: 0,
    images: imagesObj['./paginaClientes.png'],
    title: "ADMINISTRADOR DE CLIENTES",
    description: "Aplicacion para llevar el registro de la informacion de los clientes en un negocio",
    tecnologies: "Tecnologias Utilizadas: Css,Javascript,Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Medio'
  },
  {
    id: 1,
    images: [imagesObj['./objectDetectionTf.png']],
    title: "DETECCION DE OBJETOS CON INTELIGENCIA ARTIFICIAL",
    description: "Deteccion de objetos en tiepo real entrenando una red convolucional, este proyecto se entreno para diferenciar entre 2 objetos diferentes",
    tecnologies: "Tecnologias Utilizadas: Python, TensorFlow, Cv2",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Inteligencia artificial',
    Tecnologias:'Inteligencia artificial',
    Duracion:'Corto'
  },
  {
    id: 2,
    images: [imagesObj['./proyectoVollumenGestos.png']],
    title: "CONTROL DE VOLUMEN POR GESTOS",
    description: "Controla el volumen de una computadora mediante los gestos de la mano usando vision por computadora",
    tecnologies: "Tecnologias Utilizadas: Python, TensorFlow, Cv2",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Inteligencia artificial',
    Duracion:'Corto'
  },
  {
    id: 3,
    images: [imagesObj['./detetctorDePosePython.png']],
    title: "ESTIMADOR DE POSE",
    description: "Extrae informacion de la pose que tiene una persona dentro de un video, esto puede ser util para creacion de animaciones para personajes o aplicaciones en IOT",
    tecnologies: "Tecnologias Utilizadas: Python,Mediapipe,Cv2",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Inteligencia artificial',
    Duracion:'Corto'
  },
  {
    id: 4,
    images: [imagesObj['./clima.png']],
    title: "BUSCADOR DEL ESTADO DEL CLIMA POR CIUDAD",
    description: "Implementación de fetchApi para dar la informacion del clima",
    tecnologies: "Tecnologias Utilizadas: Sass,Javascript,Html,Axios",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Corto'
  },
  {
    id: 5,
    images: [imagesObj['./ProyectoSeguro.png']],
    title: "COTIZADOR DE SEGUROS",
    description: "Esta pagina elabora un presupuesto para la contratación de un seguro dependiendo varios parametros",
    tecnologies: "Tecnologias Utilizadas: Sass,Javascript,Html,React",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Corto'
  },
  {
    id: 6,
    images: [imagesObj['./Pagina carrito de compras.png']],
    title: "PROYECTO CARRITO DE COMPRAS",
    description: "Gestion de un carrito de compras donde se puede agregar editar y eliminar productos",
    tecnologies: "Tecnologias Utilizadas: Css,Javascript,Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Corto'
  },
  {
    id: 7,
    images: [imagesObj['./tauri3d.png']],
    title: "TIENDA ONLINE",
    description: "Tienda online para un negocio de impresión 3d",
    tecnologies: "Tecnologias Utilizadas: Sass,Javascript,Html,Bootsrap",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Largo'
  },
  {
    id: 8,
    images: [imagesObj['./ProyectoSala.png']],
    title: "DISEÑO PAGINA WEB",
    description: "Diseño de pagina web para una muebleria",
    tecnologies: "Tecnologias Utilizadas: Figma,Photoshop, Illustrator",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Medio'
  },
  {
    id: 9,
    images: [imagesObj['./rickymorthy.png']],
    title: "RICK Y MORTHY",
    description: "El proyecto es una aplicación web que muestra información sobre los personajes de la popular serie de televisión Rick y Morty, utilizando la API pública de Rick y Morty. La aplicación está construida con React para el frontend y Express para el backend, utilizando MongoDB para almacenar la información de los usuarios y sus favoritos.",
    tecnologies: "Tecnologias Utilizadas: Node, Express, React, JavaScript, Axios, Bootstrap, Css, MongoDB",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Medio'
  },
  {
    id: 10,
    images: [imagesObj['./pokemon.png']],
    title: "POKEMON",
    description: "La aplicación muestra una lista de personajes de Pokémon, junto con sus nombres, imágenes y algunas de sus características, como su tipo de Pokémon, habilidades y estadísticas. El usuario puede hacer clic en cada personaje para obtener más detalles, como una descripción detallada de sus habilidades y estadísticas.",
    tecnologies: "Tecnologias Utilizadas: React, JavaScript, Axios, Bootstrap, Css, Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Medio'
  },
  {
    id: 11,
    images: [imagesObj['./administrativo.png']],
    title: "SOFTWARE ADMINISTRATIVO",
    description:'El programa es una aplicación de escritorio construida en Electron que permite a los usuarios llevar un registro detallado de los clientes, ingresos y egresos del dinero de una empresa. Además, el programa cuenta con una agenda, calendario y recordatorios para ayudar a los usuarios a mantenerse organizados y al tanto de las citas y tareas importantes.',
    tecnologies: "Tecnologias Utilizadas: Electron, JavaScript, Axios, Bootstrap, Css, Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Programacion',
    Duracion:'Largo'
  },
  {
    id: 12,
    images: [imagesObj['./impresora.jpg']],
    title: "IMPRESORA 3D",
    description: "El proyecto consiste en la construcción de una impresora 3D desde cero, incluyendo el diseño y la compra de materiales. La impresora 3D es una herramienta que permite a los usuarios crear objetos en tres dimensiones a partir de un archivo digital. La construcción de la impresora 3D implicó la compra de materiales, la construcción de la estructura y la electrónica, así como la calibración y ajuste final de la impresora.",
    tecnologies: "Habilidades Utilizadas: Mecanica, Programación, Electronica, Automatización, Control",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Robotica',
    Duracion:'Largo'
  },
  {
    id: 13,
    images: [imagesObj['./bar.jpg']],
    title: "BAR AUTOMATIZADO",
    description: "El proyecto consiste en la construcción de una máquina que se encarga de preparar bebidas automáticamente y cuenta con una aplicación para Android con el menú de bebidas para un bar. La máquina es capaz de mezclar varias botellas de licor y otros ingredientes en diferentes porciones para preparar la bebida deseada.",
    tecnologies: "Tecnologias Utilizadas: React, JavaScript, Axios, Bootstrap, Css, Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Robotica',
    Duracion:'Largo'
  },
  {
    id: 14,
    images: [imagesObj['./brazo2.jpg']],
    title: "BRAZO ROBOTICO",
    description: "La aplicación muestra una lista de personajes de Pokémon, junto con sus nombres, imágenes y algunas de sus características, como su tipo de Pokémon, habilidades y estadísticas. El usuario puede hacer clic en cada personaje para obtener más detalles, como una descripción detallada de sus habilidades y estadísticas.",
    tecnologies: "Tecnologias Utilizadas: React, JavaScript, Axios, Bootstrap, Css, Html",
    github: "https://github.com/esdras4757",
    project: "https://github.com/esdras4757",
    Area:'Robotica',
    Duracion:'Largo'
  },
];

const Projects = ({t,i18n}) => {
  const [selectedValues, setSelectedValues] = useState();
  const [defaultValues, setDefaultValues] = useState({});
  const [valuesEdit, setValuesEdit] = useState({});
  const [chipsEdit, setChipsEdit] = useState([{}]);
  const [proyectosState, setProyectosState] = useState(proyectos);

 
  useEffect(() => {

    if (isEmpty(valuesEdit)==false && isNil(valuesEdit)==false) {
      setProyectosState(proyectos.filter(proyecto=>{
        return ((valuesEdit.Area=='Todos'|| valuesEdit.Area=='All')?true:valuesEdit.Area.some((area) => t(`proyectos.${proyecto.id}.Area`)  === area))
        && ((valuesEdit.Duracion=='Todos'|| valuesEdit.Duracion=='All')?true:valuesEdit.Duracion.some((Dura) => t(`proyectos.${proyecto.id}.Duracion`)  === Dura)) 
        && ((valuesEdit.Tecnologias=='Todos'|| valuesEdit.Tecnologias=='All')?true:valuesEdit.Tecnologias.some((tecnologie) => t(`proyectos.${proyecto.id}.tecnologies`).toLocaleLowerCase().includes(tecnologie.toLocaleLowerCase()) )) 
        && ((valuesEdit.Name==''|| valuesEdit.Name==' ')?true:t(`proyectos.${proyecto.id}.title`).toLocaleLowerCase().includes(valuesEdit.Name.toLocaleLowerCase()))
      }))
    }
    
  }, [valuesEdit])

    



  return (
    <div id="proyectos" className="mt-5 mb-5">
      <row className="w-100 justify-content-center">
        <h2 className="subtitle col-10 col-md-3 p-2 mb-5">
          <i class="fas fa-laptop-file mx-1" /> {t('proyectos.title')}
        </h2>
      </row>

  {!isMobile?<Carousel autoplay>
    <div>
      <h3 className="row justify-content-center align-content-center" style={contentStyle}>
      <p className="p-3" style={{background:'rgba(255,255,255,0.2)',width:'30%',fontSize:25, borderRadius:10}}>{t(`proyectos.11.title`)}</p>
      <img style={{width:'75%', height:'500px', margin: '0px auto'}} src={proyectos[11].images} alt={proyectos[11].title}/>
      <p className="p-3 mt-3" style={{background:'rgba(255,255,255,0.2)',width:'80%',borderRadius:10}}>{t(`proyectos.11.description`)}</p>
      </h3>
    </div>
    <div>
      <h3 className="row justify-content-center align-content-center" style={contentStyle}>
      <p className="p-3" style={{background:'rgba(255,255,255,0.2)',width:'30%',fontSize:25, borderRadius:10}}>{t(`proyectos.2.title`)}</p>
      <img style={{width:'75%', height:'500px', margin: '0px auto'}} src={proyectos[2].images} alt={proyectos[2].title}/>
      <p className="p-3 mt-3" style={{background:'rgba(255,255,255,0.2)',width:'80%',borderRadius:10}}>{t(`proyectos.2.description`)}}</p>
      </h3>
    </div>
    <div>
      <h3 className="row justify-content-center align-content-center" style={contentStyle}>
      <p className="p-3" style={{background:'rgba(255,255,255,0.2)',width:'30%',fontSize:25, borderRadius:10}}>{t(`proyectos.12.title`)}</p>
      <div><img style={{width:'30%', height:'500px', margin: '0px auto'}} src={proyectos[12].images} alt={proyectos[12].title}/></div>
      <p className="p-3 mt-3" style={{background:'rgba(255,255,255,0.2)',width:'80%',borderRadius:10}}>{t(`proyectos.12.description`)}</p>
      </h3>
    </div>
    <div>
      <h3 className="row justify-content-center align-content-center" style={contentStyle}>
      <p className="p-3" style={{background:'rgba(255,255,255,0.2)',width:'30%',fontSize:25, borderRadius:10}}>{t(`proyectos.14.title`)}</p>
      <div><img style={{width:'30%', height:'500px', margin: '0px auto'}} src={proyectos[14].images} alt={proyectos[14].title}/></div>
      <p className="p-3 mt-3" style={{background:'rgba(255,255,255,0.2)',width:'80%',borderRadius:10}}>{t(`proyectos.14.description`)}</p>
      </h3>
    </div>
  </Carousel>:('')
  }
     

      <Filters 
      t={t} 
      selectedValues={selectedValues}
      i18n={i18n}
      defaultValues={defaultValues}
      valuesEdit={valuesEdit}
      chipsEdit={chipsEdit}
      setSelectedValues={setSelectedValues}
      setDefaultValues={setDefaultValues}
      setValuesEdit={setValuesEdit}
      setChipsEdit={setChipsEdit}
       />

      <Row className="w-100 justify-content-center">
        {proyectosState
          ? proyectosState.map((proyecto) => {
              return (
                <Card className="col-5 col-md-3 my-2 mx-1 my-md-3 mx-md-3 text-white card p-0" style={{ height: 'auto', background:'#2b2b2b',border:'1px solid #aaaa '}} >
                  <h2 className="my-2 my-md-4">{t(`proyectos.${proyecto.id}.title`)}</h2>
                  <img
                  className="my-1 my-md-4 p-0" 
                    width={'100%'}
                    src={proyecto.images}
                    alt={`imagen del proyecto ${proyecto.title}`}
                  />
                  <p className="my-2 my-md-4 p-0">{t(`proyectos.${proyecto.id}.description`)}</p>
                  <p className="my-1 my-md-4 p-0">{t(`proyectos.${proyecto.id}.tecnologies`)}</p>
                  <Row>
                  <a className="col-6 my-1 my-md-4 p-0" href={proyecto.project}><img className="col-3 my-3 mx-4" src={ imagesObj['./88422.png']}/><figcaption>{t('proyectos.proyect')}</figcaption></a>
                  <a className="col-6 my-1 my-md-4 p-0" href={proyecto.github}><img className="col-3 my-3 mx-4"  src={ imagesObj['./github.png']}/><figcaption>{t('proyectos.code')}</figcaption></a>
                  </Row>  
              </Card>
              );
            })
          : "Ah ocurrido un error"}
      </Row>
    </div>
  );
};

export default Projects;
