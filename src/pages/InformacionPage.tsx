import React from 'react';
import TarjetaInformacion from '../components/TarjetaInformacion';
import NavBar from '../components/NavBar';
import {
  faInfoCircle,
  faAlignLeft,
  faClipboardList,
  faLayerGroup,
  faCalendarAlt,
  faUsers,
  faLanguage,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const cursoInfo = {
  descripcion: "Esta asignatura trata de aportar al alumno una visión general de la razón de ser de la sociología como ciencia: su objeto de estudio, sus metodologías y técnicas de investigación más habituales, las cuestiones y los conceptos fundamentales tratados en la investigación sociológica, así como las teorías sociológicas más importantes. De forma paralela y convergente, esta materia estimula la comprensión y reflexión del alumno sobre los problemas sociales más importantes en las sociedades contemporáneas.",
  titulacion: "Grado en Filosofía, Política y Economía (PPE)",
  modulo: "Política y Sociedad",
  materia: "Teoría política y social",
  curso: "1º",
  semestre: "1erº semestre",
  profesores: ["Pro. Dr. Alejandro Néstor García Martínez"],
  idioma: "Español",
  aulaHorario: "Martes de 12:00 a 13:45 en el aula 34 del Edificio Central, y Jueves de 08:00 a 09:45 en el aula 35 del Edificio Central",
};
const InformacionPage: React.FC = () => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-0">
        
        <TarjetaInformacion
          icono={faInfoCircle}
          categoria="Guía Docente"
          titulo="Información general de la asignatura"
          className="mb-6"
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="p-4 sm:p-6 rounded-xl bg-blue-50/50 shadow-md relative border-t-4 border-blue-300">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  className="text-xl sm:text-2xl"
                  style={{ color: PRIMARY_BLUE }}
                />
                <h3 className="font-semibold text-lg sm:text-xl" style={{ color: PRIMARY_BLUE }}>
                  Descripción general
                </h3>
              </div>
              <div className="relative px-4 sm:px-6 md:px-8"> 
                <div className="absolute top-0 left-0 opacity-15 text-5xl sm:text-6xl lg:text-7xl font-serif select-none" style={{ color: PRIMARY_BLUE, lineHeight: '1' }}>
                  “
                </div>
                <p className="text-sm sm:text-md text-gray-800 leading-relaxed relative z-10 text-center sm:text-left">
                  {cursoInfo.descripcion}
                </p>
                <div className="absolute bottom-0 right-0 opacity-15 text-5xl sm:text-6xl lg:text-7xl font-serif select-none" style={{ color: PRIMARY_BLUE, lineHeight: '0.5' }}>
                  ”
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-50/70 shadow-md border-t-4 border-gray-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="text-xl sm:text-2xl"
                  style={{ color: PRIMARY_BLUE }}
                />
                <h3 className="font-semibold text-lg sm:text-xl" style={{ color: PRIMARY_BLUE }}>
                  Detalles del curso
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 text-xs sm:text-sm">
                {[
                  { icon: faLayerGroup, label: "Titulación", value: cursoInfo.titulacion },
                  { icon: faLayerGroup, label: "Módulo/Materia", value: `${cursoInfo.modulo} / ${cursoInfo.materia}` },
                  { icon: faCalendarAlt, label: "Curso / Semestre", value: `${cursoInfo.curso} / ${cursoInfo.semestre}` },
                  { icon: faUsers, label: "Profesores", value: cursoInfo.profesores, isList: true, colSpan: true },
                  { icon: faLanguage, label: "Idioma", value: cursoInfo.idioma },
                  { icon: faClock, label: "Aula y Horario", value: cursoInfo.aulaHorario },
                ].map(item => (
                  <div
                    key={item.label}
                    className={`py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-lg bg-white shadow-sm border-l-4 hover:shadow-md transition-shadow duration-300 ${item.colSpan ? 'sm:col-span-2' : ''}`}
                    style={{ borderColor: PRIMARY_BLUE }}
                  >
                    <div className="flex items-start mb-1">
                      <FontAwesomeIcon icon={item.icon} className="mr-2 mt-0.5 text-md sm:text-lg" style={{color: PRIMARY_BLUE}} />
                      <span className="font-semibold text-gray-700">{item.label}:</span>
                    </div>
                    {item.isList && Array.isArray(item.value) ? (
                      <ul className="list-disc list-inside ml-4 sm:ml-5 text-gray-600">
                        {item.value.map(val => <li key={val}>{val}</li>)}
                      </ul>
                    ) : (
                      <p className="text-gray-600 ml-4 sm:ml-5">{String(item.value)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TarjetaInformacion>

        <NavBar />

    </div>
  );
};

export default InformacionPage; 