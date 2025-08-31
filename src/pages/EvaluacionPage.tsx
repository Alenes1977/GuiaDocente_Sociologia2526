import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaEvaluacion from '../components/TarjetaEvaluacion';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const EvaluacionPage: React.FC = () => {
  const evaluacionData = {
    convocatoriaOrdinaria: {
      titulo: "CONVOCATORIA ORDINARIA",
      categoriasEvaluacion: [
        {
          tituloCategoria: "Pruebas escritas",
          porcentajeCategoria: "60%",
          items: [
            { nombre: "iTests (tests individuales de cada tema)", porcentajeItem: "20%", tipo: "Individual" as const, badge: "exámenes" },
            { nombre: "Examen Final", porcentajeItem: "40%", tipo: "Individual" as const, badge: "exámenes" },
          ],
        },
        {
          tituloCategoria: "Casos prácticos y actividades presenciales",
          porcentajeCategoria: "10%",
          items: [
            { nombre: "tTests (tests en equipo TBL)", porcentajeItem: "10%", tipo: "Equipo" as const, badge: "trabajos" },
          ],
        },
        {
          tituloCategoria: "Elaboración y presentación de trabajos dirigidos",
          porcentajeCategoria: "30%",
          items: [
            { nombre: "Actividades aplicadas (TBL)", porcentajeItem: "20%", tipo: "Equipo" as const, badge: "trabajos" },
            { nombre: "Proyecto PPE-Insights", porcentajeItem: "10%", tipo: "Equipo" as const, badge: "trabajos" },
          ],
        }
      ],
      notaGlobalEquipos: "Importante: para todas las calificaciones de equipo, se aplicará un multiplicador individual resultante de la evaluación inter-pares.",
      notasAdicionales: [
        {
          titulo: "Examen final",
          contenido: "Los contenidos para el examen final podrán ser preparados a partir de las explicaciones y materiales entregados por el profesor durante el desarrollo de las clases.",
          tipo: 'info' as 'info',
        },
        {
          titulo: 'Calificación de "No Presentado"',
          contenido: 'La calificación de "No presentado" se otorgará a los alumnos que no se hayan presentado a ninguna de las actividades evaluables. El resto de alumnos tendrán la nota numérica final que resulte de las distintas calificaciones.',
          tipo: 'warning' as 'warning',
        },
      ],
    },
    convocatoriaExtraordinaria: {
      titulo: "CONVOCATORIA EXTRAORDINARIA",
      descripcionGeneral: [
        'Los alumnos con calificación de "Suspenso" o "No Presentado" en la convocatoria ordinaria podrán presentarse a la convocatoria extraordinaria.',
        'Las calificaciones correspondientes a "Pruebas escritas" (60% de la nota final: iTests 20% y Examen Final 40%) se recuperarán mediante una única prueba escrita. Las calificaciones obtenidas previamente en estos componentes en la convocatoria ordinaria se dejarán sin efecto.',
        'El 20% de las calificaciones por equipo correspondientes a los test en equipo (tTest, 10%) y el proyecto "PPE-Insights" (10%) podrán ser sustituidas, a petición del alumno, por un trabajo aplicado que se acordará individualmente con el profesor.',
        'La calificación por equipo obtenida en las "Actividades aplicadas (20%)" se mantendrá para la convocatoria extraordinaria.',
      ],
    },
    alumnosLibresInfo: {
      titulo: "Alumnos libres o con dispensa de escolaridad",
      contenido: "Los alumnos de matrícula libre, con dispensa de escolaridad o aquellos que se encuentren en circunstancias excepcionales que le impidan acudir a clase y cumplir con las diversas tareas encomendadas, deberán ponerse en contacto con el profesor antes del 20 de septiembre para acordar un plan de trabajo personalizado. En caso de no hacerlo, se aplicará el régimen ordinario de trabajo y evaluación.",
      tipo: 'info' as 'info',
    },
    necesidadesEducativasEspeciales: {
      titulo: "Estudiantes con necesidades educativas especiales",
      contenido: "Los estudiantes con necesidades educativas especiales deberán ponerse en contacto con la Coordinación de Estudios de la Facultad de Filosofía y Letras con el fin de obtener la autorización correspondiente para la oportuna adaptación de las condiciones de evaluación. El estudiante deberá enviar dicha autorización al profesor al comienzo del cuatrimestre, en ningún caso en fecha posterior al 1 de octubre.",
      tipo: 'info' as 'info',
    },
    advertenciaFraude: {
      titulo: "ATENCIÓN: Advertencia sobre fraude académico",
      contenido: "Se recuerda que cualquier intento de fraude, copia, plagio u otro comportamiento irregular supone una infracción grave, tal y como está contemplado en el título IV \"Normas de disciplina académica de los estudiantes\" dentro del sistema de normas sobre la convivencia en la Universidad de Navarra.",
      tipo: 'warning' as 'warning',
    },
  };

  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaEvaluacion
          icono={faClipboardCheck}
          categoria="Sistema de Evaluación"
          tituloPrincipal="Evaluación de la Asignatura"
          convocatoriaOrdinaria={evaluacionData.convocatoriaOrdinaria}
          convocatoriaExtraordinaria={evaluacionData.convocatoriaExtraordinaria}
          alumnosLibresInfo={evaluacionData.alumnosLibresInfo}
          necesidadesEducativasEspeciales={evaluacionData.necesidadesEducativasEspeciales}
          advertenciaFraude={evaluacionData.advertenciaFraude}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default EvaluacionPage; 