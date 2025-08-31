import React from 'react';
// Eliminamos la importación de Layout
// import Layout from '../components/Layout';
import TarjetaCompetencias from '../components/TarjetaCompetencias';
import NavBar from '../components/NavBar';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Icono para la tarjeta

// Datos de las competencias (los mismos que teníamos en HomePage)
const competenciasData = [
  { codigo: "CG1", descripcion: "Formular razonamientos críticos y bien argumentados, empleando para ello terminología precisa, recursos especializados y documentación que avale dichos argumentos en los ámbitos de la filosofía, la política y la economía." },
  { codigo: "CG5", descripcion: "Saber combinar el razonamiento económico con el propio de la ciencia socio-política y de la filosofía para una comprensión holística de la sociedad contemporánea." },
  { codigo: "CB3", descripcion: "Que los estudiantes tengan la capacidad de reunir e interpretar datos relevantes (normalmente dentro de su área de estudio) para emitir juicios que incluyan una reflexión sobre temas relevantes de índole social, científica o ética." },
  { codigo: "CB4", descripcion: "Que los estudiantes puedan transmitir información, ideas, problemas y soluciones a un público tanto especializado como no especializado." },
  { codigo: "CE1", descripcion: "Identificar y analizar los elementos más significativos que conforman las diferentes realidades sociales para interpretarlas desde un enfoque sistémico, que integre las áreas de conocimiento del Grado (filosofía, política y economía)." },
  { codigo: "CE3", descripcion: "Valorar y contrastar las distintas teorías políticas, económicas, o sociológicas que explican la organización particular de las sociedades contemporáneas." },
  { codigo: "CE5", descripcion: "Analizar e interpretar desde una perspectiva filosófica los problemas y retos que afectan al ser humano y su organización social en las sociedades contemporáneas." },
  { codigo: "CE8", descripcion: "Conocer las teorías políticas y sociológicas más representativas sobre la sociedad y la acción humana en sociedad." },
  { codigo: "CE9", descripcion: "Identificar y valorar desde las perspectivas filosófica, política y económica, el papel que la comunicación y la opinión pública desempeñan en la articulación social y las decisiones colectivas." },
];

const CompetenciasPage: React.FC = () => {
  return (
    // Eliminamos el componente Layout
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaCompetencias 
          icono={faGraduationCap} 
          categoria="Competencias del curso"
          titulo="Resultados de Aprendizaje"
          competencias={competenciasData}
          className="mb-6" 
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default CompetenciasPage; 