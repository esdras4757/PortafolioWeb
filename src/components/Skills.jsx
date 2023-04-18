import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { Row } from "antd";
import logoArduino from "../images/logoArduino.png"
import logoCss from "../images/logoCss.png"
import logoHtml from "../images/logohtml.png"
import logoJava from "../images/logoJava.png"
import logoJS from "../images/logoJS.png"
import logoPython from "../images/logoPython.png"
import logoRaspberry from "../images/logoRaspberry.png"


const highlights=[
  {
    url:logoArduino,
    alt:'logo'
  },{
    url:logoJava,
    alt:'logo'
  },
  {
    url:logoJS,
    alt:'logo'
  },
  {
    url:logoPython,
    alt:'logo'
  },
  {
    url:logoRaspberry,
    alt:'logo'
  },
  {
    url:logoHtml,
    alt:'logo'
  },
  {
    url:logoCss,
    alt:'logo'
  }
]

export const Skills = ({t}) => {

    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    };
  
    const calculateRadius = () => {
      const { width } = getWindowDimensions();
      if (width <= 576) {
        return width / 3;
      } else {
        return Math.min(800, width, window.innerHeight) / 2;
      }
    };

  return (
    <div id="skills" className="justify-items-center mt-5 mb-5">
    <div className="w-100 d-flex justify-content-center mt-3">
    <h2 className="m-4 col-10 col-md-3 p-2 subtitle"><i class="fa-brands fa-space-awesome mx-1"/> {t('Skills.skills')}</h2>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: calculateRadius(),
              maxSpeed: "medium",
            })}
            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {[
              "VSCode",
              "TypeScript",
              "React",
              "Preact",
              "Parcel",
              "Jest",
              "Next",
              "ESLint",
              "Framer Motion",
              "Three.js",
            ]}
          </TagCloud>
        </div>
      </div>
    </div>
    <Row className="justify-content-center">
    <div className="col-12 row justify-content-center">
    <h2 className="col-10 col-md-3 m-5">{t('Skills.highlights')} <div className="divisor w-100"></div></h2>
    </div>
    <Row className="justify-content-around w-75 mb-5">
    {highlights.map((highlight)=>{
      return <img className="m-4 col-3 col-md-1" src={highlight.url} alt={highlight.alt}/>
    })}
    </Row>
    
    </Row>
     
    </div>
  );
};
