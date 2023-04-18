import { Row, message } from "antd";
import React, { useState } from "react";
import wp from "../images/whattsappIcon.png";
import fb from "../images/faceBookIcon.png";
import whatsAppIcon from "../images/whattsappIcon.png";
import facebookIcon from "../images/faceBookIcon.png";
import instagramIcon from "../images/instagramIcon.png";
import linkedinIcon from "../images/inkedinIcon.png";
import image1 from "../images/pngwing.com(9).png";
import image2 from "../images/pngwing.com(8).png";
import image3 from "../images/pngwing.com(7).png";
import image4 from "../images/pngwing.com(12).png";
import cv from "./files/files_cv_uriel_lara.pdf";
import image5 from "../images/pngwing.com(10).png";

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const error = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar que todos los campos estén completos
    if (
      formData.nombre.trim() === "" ||
      formData.correo.trim() === "" ||
      formData.asunto.trim() === "" ||
      formData.mensaje.trim() === ""
    ) {
      setShowMessage(true);
      // Ocultar el mensaje después de 1 segundo
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return;
    }
    // Enviar el formulario
    const form = e.target;
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // Mostrar un mensaje de éxito
        success("¡Tu mensaje ah sido enviado!");
        // Limpiar los campos del formulario
        setFormData({
          nombre: "",
          correo: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        // Mostrar un mensaje de error
        error("Error al enviar el formulario");
      }
    };
    xhr.send(new FormData(form));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      {contextHolder}
      <div className="w-100 d-flex justify-content-center mt-5 mb-5">
        <h2 className="m-4 col-10 col-md-3 p-2 subtitle">
          <i class="fas fa-address-card mx-1" /> {t("Contact.title")}
        </h2>
      </div>

      <Row className="align-items-center justify-content-center justify-items-center">
        <div className="col-12 col-md-5">
          <h2>{t("Contact.hello")}</h2>
        </div>

        <div className="row justify-content-center">
          <form
            action="https://formspree.io/f/mnqwgpzj"
            method="POST"
            id="ElementoForm"
            className="form-group row col-8 col-md-8 justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="col-sm-8 col-lg-8 w-100">
              <label className="col-12 text-start">{t("Contact.name")}</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="col-sm-8 col-lg-8 w-100">
              <label className="col-12 text-start">{t("Contact.email")}</label>
              <input
                type="email"
                id="correo"
                name="correo"
                className="form-control"
                value={formData.correo}
                onChange={handleChange}
              />
            </div>

            <div className="col-sm-8 col-lg-8 w-100">
              <label className="col-12 text-start">
                {t("Contact.titleField")}
              </label>
              <input
                type="text"
                id="mensaje"
                name="asunto"
                className="form-control"
                value={formData.asunto}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-8 col-lg- w-100 ">
              <label className="col-12 text-start">
                {t("Contact.content")}
              </label>
              <textarea
                className="w-100 p-2 resize-none"
                name="mensaje"
                id="txtarea"
                cols="30"
                rows="2"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              id="btn-enviar"
              className="text-white btn btn-success mt-5 col-3"
              type="submit"
            >
              {t("Contact.send")}
            </button>
          </form>
        </div>
        {showMessage && (
          <div className="alert alert-danger col-6 mt-3" role="alert">
            {t("Contact.fillAllFields")}
          </div>
        )}
      </Row>

      <Row className="my-5">
        <a
          href="https://wa.me/+525564978543"
          target="_blank"
          className="col-6 p-2"
        >
          <img height={100} src={wp} />
          <p className="mt-2" col-12>
            {t("Contact.whatsapp")}
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/people/Esdras/pfbid0bXHVSaCf9pwcbMC9E9LQ3gEnsxtrJA6TwfinFWhhscxZAVzamZob2fdPHNMvyk3Ml/"
          className="col-6 p-2"
        >
          <img height={100} src={fb} />
          <p className="mt-2">{t("Contact.facebook")}</p>
        </a>
      </Row>

      <Row id="footer" className="mt-5 bg-dark">
        <Row className="mt-3 align-content-center justify-content-center align-items-center w-100">
          <ul className="col-md-4 col-6" id="menuFooter">
            <li>
              <a download="files_cv_uriel_lara.pdf" href={cv}>
                {t("Contact.downloadCv")}
              </a>
            </li>
            <li>
              <a href="#skills">{t("Contact.skillset")}</a>
            </li>
            <li>
              <a href="#proyectos">{t("Contact.projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("Contact.contact")}</a>
            </li>
          </ul>

          <div className="col-md-4 col-6" id="redes">
            <h3>{t("Contact.socialMedia")}</h3>

            <div id="imgRedes">
              <a  target="_blank" href="https://wa.me/+525564978543">
                <img
                  height={50}
                  className="m-4"
                  src={whatsAppIcon}
                  alt="WhatsApp Icon"
                />
              </a>

              <a  target="_blank" href="https://www.facebook.com/people/Esdras/pfbid0bXHVSaCf9pwcbMC9E9LQ3gEnsxtrJA6TwfinFWhhscxZAVzamZob2fdPHNMvyk3Ml/">
                <img
                  height={50}
                  className="m-4"
                  src={facebookIcon}
                  alt="Facebook Icon"
                />
              </a>

              <a  target="_blank" href="https://instagram.com/esdras_0736?igshid=ZDdkNTZiNTM=">
                <img
                  height={50}
                  className="m-4"
                  src={instagramIcon}
                  alt="Instagram Icon"
                />
              </a>

              <a   target="_blank" href="https://www.linkedin.com/in/esdras-uriel-lara-0038a71a0"><img
                height={50}
                className="m-4"
                src={linkedinIcon}
                alt="LinkedIn Icon"
              />
               </a>
            </div>
          </div>

          <div className="col-md-4 col-12" id="elaborado">
            <h3>{t("Contact.madeWith")}</h3>
            <div id="imgElaborado">
              <img height={50} className="m-2" src={image1} alt="Image 1" />
              <img height={50} className="m-2" src={image2} alt="Image 2" />
              <img height={50} className="m-2" src={image3} alt="Image 3" />
              <img height={50} className="m-2" src={image4} alt="Image 4" />
              <img height={50} className="m-2" src={image5} alt="Image 5" />
            </div>
          </div>
          <p className="mt-5">&copy;{t("Contact.rightsReserved")}</p>
        </Row>
      </Row>
    </div>
  );
};

export default Contact;
