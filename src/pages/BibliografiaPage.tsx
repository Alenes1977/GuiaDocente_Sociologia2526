import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaBibliografia from '../components/TarjetaBibliografia';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const BibliografiaPage: React.FC = () => {
  const bibliografiaData = {
    secciones: [
      {
        tituloSeccion: "Bibliografía de Referencia",
        items: [
          { texto: "Guy ROCHER: Introducción a la sociología general, Herder, Barcelona, última edición." },
          { texto: "Georg RITZER: Teoría Sociológica Clásica, McGraw-Hill, Madrid, última edición." },
          { texto: "Raymond ARON: Las etapas del pensamiento sociológico, Siglo Veinte, Buenos Aires, 1985." },
          { texto: "Georg RITZER: Teoría Sociológica Contemporánea, McGraw-Hill, Madrid, 1998." },
          { texto: "Antonio LUCAS MARÍN: Sociología, una invitación al estudio de la realidad social, Eunsa, Pamplona, última edición." }
        ]
      }
    ],
    notaAdicional: "Bibliografía más específica de cada tema podrá ser facilitada por el Profesor de la asignatura durante el desarrollo de las clases."
  };

  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaBibliografia 
          icono={faBookOpen}
          categoria="Recursos de Aprendizaje"
          tituloPrincipal="Bibliografía"
          secciones={bibliografiaData.secciones}
          notaAdicional={bibliografiaData.notaAdicional}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default BibliografiaPage; 