import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaPrograma from '../components/TarjetaPrograma';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

const programaData = [
  { numero: 1, titulo: "¿Qué es la sociología? La naturaleza de lo social" },
  { numero: 2, titulo: "Cultura y diversidad cultural" },
  { numero: 3, titulo: "Acción social e Instituciones sociales" },
  { numero: 4, titulo: "Persona, ideología y estratificación social" },
  { numero: 5, titulo: "Métodos de investigación social" },
  { numero: 6, titulo: "Autores clásicos de la sociología (I): A. Comte, H. Spencer, F. Tönnies y G.H. Mead" },
  { numero: 7, titulo: "Autores clásicos de la sociología (II): K. Marx, E. Durkheim, M. Weber" },
];

const ProgramaPage: React.FC = () => {
  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaPrograma 
          icono={faListCheck} 
          categoria="Contenidos"
          titulo="Programa de la asignatura"
          temas={programaData}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default ProgramaPage; 