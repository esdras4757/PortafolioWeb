import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import cv from './files/files_cv_uriel_lara.pdf'

const ResponsiveNavbar = ({t}) => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark">
       <Container>
    <Navbar.Brand href="#home"><h1>{t('homeTitle')}</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#sobreMI">{t('Nav.about')}</Nav.Link>
        <Nav.Link href="#proyectos">{t('Nav.projects')}</Nav.Link>
        <Nav.Link href="#skills">{t('Nav.skills')}</Nav.Link>
        <Nav.Link href="#contact">{t('Nav.contact')}</Nav.Link>
        <Nav.Link id='cv' download="files_cv_uriel_lara.pdf" href={cv}>{t('Nav.download')}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
