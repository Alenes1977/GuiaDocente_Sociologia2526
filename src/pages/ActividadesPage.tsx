import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaActividades from '../components/TarjetaActividades';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

const ActividadesPage: React.FC = () => {
  const introduccionMetodologia = "Durante las sesiones presenciales se utilizará la ";
  const terminoTBL = "metodología Team-based Learning (TBL)";
  const descripcionGeneral = "El trabajo que el alumno debe realizar para lograr los objetivos propuestos es:";

  const actividadesFormativas = [
    { 
      denominacionOficial: "Asistencia a clases magistrales", 
      texto: "donde se expondrán, aclararán y trabajarán los conceptos fundamentales de la asignatura." 
    },
    { 
      denominacionOficial: "Estudio personal", 
      texto: "de los contenidos de la asignatura. El alumno dispone de diversos recursos y materiales didácticos en las guías de cada tema." 
    },
    { 
      denominacionOficial: "Análisis de casos y actividades prácticas presenciales", 
      texto: "que se propondrán a lo largo del curso." 
    },
    { 
      denominacionOficial: "Elaboración de trabajos dirigidos", 
      texto: "consistente en un proyecto de aprendizaje integrado (PPE Insights) y actividades aplicadas (TBL) que se desarrollará de acuerdo a las orientaciones facilitadas al respecto." 
    },
  ];

  const distribucionTiempo = [
    { horas: 25, descripcion: "Asistencia a clases magistrales" },
    { horas: 75, descripcion: "Estudio personal" },
    { horas: 20, descripcion: "Elaboración de trabajos dirigidos" },
    { horas: 30, descripcion: "Análisis de casos y actividades prácticas presenciales" },
  ];

  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaActividades 
          icono={faPersonChalkboard}
          categoria="Metodología Docente"
          titulo="Actividades Formativas"
          introduccionMetodologia={introduccionMetodologia}
          terminoTBL={terminoTBL}
          descripcionGeneral={descripcionGeneral}
          actividades={actividadesFormativas}
          distribucionTiempo={distribucionTiempo}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default ActividadesPage; 