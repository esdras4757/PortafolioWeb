import React, { useState } from "react";
import icon from "./icon.png";
import { Button, Drawer, Row, Col, Divider, Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import emoji1 from "../images/e1.gif";
import emoji2 from "../images/e2.gif";
import emoji3 from "../images/e3.gif";
import emoji4 from "../images/e4.gif";
import frontend from "../images/frontend.png";
import web from "../images/web.jpg";
import logoJS from "../images/logoJS.png";
import logoPython from "../images/logoPython.png";

const gifUrls = [
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  // ...agrega aquí las URL de los GIF que quieras mostrar
];

const About = ({ t }) => {
  const [open, setOpen] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleGifLoad = () => {
    setTimeout(() => {
      const nextIndex = (currentGifIndex + 1) % gifUrls.length;
      setCurrentGifIndex(nextIndex);
    }, 3500);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div id="sobreMI" className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ marginTop: "4.5rem" }}
      >
        <div className="col-md-4 col-12 mt-4 text-center mb-4 mb-md-0">
          <div className="perfil2"></div>
          <img
            className="perfil"
            id=""
            height={"auto"}
            src={gifUrls[currentGifIndex]}
            alt="logo"
            onLoad={handleGifLoad}
            style={{ transition: "opacity 1s ease-in-out" }}
          />
        </div>
        <div className="col-md-6 col-12 mt-4 text-center">
          <h2 className="px-5">{t("About.hiThere")}</h2>
          <p className=" text-justify px-2 px-md-2 w-100 text-md-start justify-content-center">
            {t("About.description")}
            <div className="divisor"></div>
          </p>
          <Button className="mx-5" onClick={showDrawer} type="primary">
            {t("About.seeMore")}
          </Button>

          <Drawer
            title={
              <div className="text-white">¡Un vistazo más de cerca! 😎</div>
            }
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            className="custom-drawer"
          >
            <Typography.Title level={3} className="section-title">
              Experiencia laboral
            </Typography.Title>
            <Row>
              <Col xs={24} sm={12}>
                <Typography.Title level={4}>
                  Compañía de seguros
                </Typography.Title>
                <p>
                  Durante mi año en la compañía de seguros, pude sumergirme en
                  el emocionante mundo de las páginas y aplicaciones web
                  utilizando Vue.js y Nuxt. Y no solo eso, también tuve la
                  oportunidad de coquetear con React, lo que me permitió obtener
                  una amplia experiencia en el desarrollo frontend. Gracias a
                  Axios, me convertí en un maestro en la conexión de servicios.
                  😏
                </p>
              </Col>
              <Col xs={24} sm={12}>
                <img
                  className="company-img"
                  src={web}
                  height={300}
                  width={300}
                  alt="Empresa de seguros"
                />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={24} sm={12}>
                <Typography.Title level={4}>
                  Empresa de desarrollo de software
                </Typography.Title>
                <p>
                  Después de un año y medio trabajando en una empresa de
                  desarrollo de software, me sumergí aún más en el ecosistema de
                  React, adquiriendo habilidades ninja para consumir APIs con
                  Axios. Durante este tiempo, mi experiencia en frontend creció
                  exponencialmente, ¡convirtiéndome en un verdadero guerrero del
                  código! 😂
                </p>
              </Col>
              <Col xs={24} sm={12}>
                <img
                  className="company-img"
                  src={frontend}
                  height={300}
                  width={300}
                  alt="Empresa de desarrollo de software"
                />
              </Col>
            </Row>
            <Divider />
            <Typography.Title level={3} className="section-title">
              Habilidades y pasatiempos
            </Typography.Title>
            <p>
              Mis habilidades abarcan desde la programación y la robótica hasta
              la fotografía y la pintura. En mis ratos libres, disfruto de una
              buena partida de videojuegos, cocinar deliciosas comidas e incluso
              ¡soy un hábil carpintero! En el ámbito técnico, mis habilidades
              incluyen electrónica, hidráulica, neumática y mecánica. ¡Soy un
              ingeniero mecatrónico y programador web multidisciplinario! 😁
            </p>
            <Divider />
            <Typography.Title level={3} className="section-title">
              Proyectos personales
            </Typography.Title>
            <p>
              A lo largo de mi carrera, he trabajado en diversos proyectos que
              involucran tecnologías de back-end y front-end, como Express,
              MongoDB, SQL, Python e inteligencia artificial. Desde crear
              aplicaciones web hasta proyectos de robótica, siempre busco
              desafíos que me permitan aprender y crecer como profesional.
            </p>
            <Row>
              <Col xs={24} sm={12} className="text-center">
                <img
                  className="project-img"
                  src={logoJS}
                  alt="Proyecto personal 1"
                />
              </Col>
              <Col xs={24} sm={12} className="text-center">
                <img
                  className="project-img"
                  src={logoPython}
                  alt="Proyecto personal 2"
                />
              </Col>
            </Row>
            <Divider />
            <Typography.Title level={3} className="section-title">
              ¡Hablemos!
            </Typography.Title>
            <p>
              Si crees que mis habilidades y experiencia encajan con lo que
              estás buscando, ¡no dudes en ponerte en contacto conmigo! Estoy
              ansioso por escuchar sobre tus proyectos y cómo puedo contribuir.
              ¡Hasta pronto! <SmileOutlined />
            </p>
          </Drawer>
        </div>

        <div className=" col-12 mt-5 order-md-2">
          <div className="row justify-content-center">


            <div className="row justify-content-center col-5 col-md-3 m-2 ">
              <div
                className=" row m-3 text-center p-2 rounded"
                style={{ background: "rgba(0,0,255,0.2)" }}
              >
                <h2 className="col-12 fs-5 mb-4 justify-content-center">
                  {t("About.hobbies")}
                </h2>
                <ul className="fs-5 ">
                  <li>{t("About.coding")}</li>
                  <li>{t("About.robotics")}</li>
                  <li>{t("About.gaming")}</li>
                  <li>{t("About.photography")}</li>
                  <li>{t("About.woodworking")}</li>
                  <li>{t("About.cooking")}</li>
                  <li>{t("About.painting")}</li>
                </ul>
              </div>
            </div>

            <div className="row justify-content-center  col-5 col-md-3 m-3 justify-content-center">
              <div
                className=" row text-center p-2 rounded justify-content-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <h2 className="col-12 fs-5 mb-4 justify-content-center">
                  {t("About.strengths")}
                </h2>
                <ul className="fs-5 justify-content-center">
                  <li>{t("About.positiveAttitude")}</li>
                  <li>{t("About.robotics")}</li>
                  <li>{t("About.strongWorkEthic")}</li>
                  <li>{t("About.resilience")}</li>
                  <li>{t("About.quickLearner")}</li>
                  <li>{t("About.flexibility")}</li>
                  <li>{t("About.teamwork")}</li>
                  <li>{t("About.leadership")}</li>
                </ul>
              </div>
            </div>

            <div className="row justify-content-center  col-5 col-md-3 m-3  justify-content-center">
              <div
                className=" row  text-center p-2 rounded justify-content-center"
                style={{ background: "rgba(0,255,0,0.2)" }}
              >
                <h2 className="col-12 fs-5 mb-4 justify-content-center">
                  {t("About.abilities")}
                </h2>
                <ul className="fs-5 justify-content-center">
                  <li>{t("About.electronics")}</li>
                  <li>{t("About.robotics")}</li>
                  <li>{t("About.hydraulics")}</li>
                  <li>{t("About.pneumatics")}</li>
                  <li>{t("About.mechanics")}</li>
                  <li>{t("About.frontendProgramming")}</li>
                  <li>{t("About.projectManagement")}</li>
                  <li>{t("About.problemSolving")}</li>
                  <li>{t("About.creativity")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
