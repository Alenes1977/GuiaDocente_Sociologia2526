import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaCronograma from '../components/TarjetaCronograma';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const cronogramaData = [
  { semana: "SEMANA 1", martes: "Presentación Asignatura y Plan de Trabajo", jueves: "Trabajo en Equipo y Metodología" },
  { semana: "SEMANA 2", martes: "Tema 1. La naturaleza de lo social", jueves: "Tema 1. La naturaleza de lo social" },
  { semana: "SEMANA 3", martes: "Tema 1. La naturaleza de lo social", jueves: "Tema 1. La naturaleza de lo social" },
  { semana: "SEMANA 4", martes: "Tema 2. Cultura y diversidad cultural", jueves: "Tema 2. Cultura y diversidad cultural" },
  { semana: "SEMANA 5", martes: "Tema 2. Cultura y diversidad cultural", jueves: "Tema 2. Cultura y diversidad cultural" },
  { semana: "SEMANA 6", martes: "Tema 3. Acción social e Instituciones sociales", jueves: "Presentaciones por equipo" },
  { semana: "SEMANA 7", martes: "Tema 3. Acción social e Instituciones sociales", jueves: "Presentaciones por equipo" },
  { semana: "SEMANA 8", martes: "Tema 4. Persona, ideología y estratificación social", jueves: "Tema 4. Persona, ideología y estratificación social" },
  { semana: "SEMANA 9", martes: "Tema 5. Metodología sociológica", jueves: "Tema 5. Metodología sociológica" },
  { semana: "SEMANA 10", martes: "Tema 7. Autores clásicos I", jueves: "Presentaciones proyectos" },
  { semana: "SEMANA 11", martes: "Tema 7. Autores clásicos I", jueves: "Presentaciones proyectos" },
  { semana: "SEMANA 12", martes: "Tema 7. Autores clásicos I", jueves: "Tema 7. Autores clásicos I" },
  { semana: "SEMANA 13", martes: "Tema 8. Autores clásicos II", jueves: "Tema 8. Autores clásicos II"},
  { semana: "SEMANA 14", martes: "Tema 9. Autores clásicos II", jueves: "Repaso final"},
];

const CronogramaPage: React.FC = () => {
  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaCronograma 
          icono={faCalendarAlt}
          categoria="Planificación Semanal"
          tituloPrincipal="Cronograma de la Asignatura"
          semanas={cronogramaData}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default CronogramaPage; 