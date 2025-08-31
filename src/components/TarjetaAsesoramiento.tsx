import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface ProfesorInfo {
  nombre: string;
  email: string;
  despacho: string;
  horario: string;
  // imagen?: string; // Opcional: para una foto del profesor
}

interface TarjetaAsesoramientoProps {
  icono: IconDefinition;
  categoria: string;
  tituloPrincipal: string;
  profesores: ProfesorInfo[];
  className?: string;
}

const TarjetaAsesoramiento: React.FC<TarjetaAsesoramientoProps> = ({
  icono,
  categoria,
  tituloPrincipal,
  profesores,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ${className}`}
    >
      {/* Decorador suave */}
      <div 
        className="absolute bottom-0 left-0 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-100 to-blue-200 opacity-15 sm:opacity-20 z-0 pointer-events-none"
        style={{
          transform: 'translate(-30%, 30%) rotate(30deg)',
          borderRadius: '70% 30% 60% 40% / 60% 40% 70% 30%',
        }}
      ></div>

      <div className="relative z-10">
        {/* Cabecera de la Tarjeta */} 
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="mr-3 sm:mr-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-100/70 to-blue-50/40 shadow-md transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
            <FontAwesomeIcon
              icon={icono}
              className="text-xl sm:text-2xl lg:text-3xl"
              style={{ color: PRIMARY_BLUE }}
            />
          </div>
          <div>
            <div className="mb-1 opacity-75 text-xs tracking-wider uppercase font-semibold flex items-center" style={{ color: PRIMARY_BLUE }}>
              <span className="inline-block w-4 h-0.5 bg-blue-400 mr-1.5 sm:mr-2"></span>
              {categoria}
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: PRIMARY_BLUE }}>
              {tituloPrincipal}
            </h2>
          </div>
        </div>

        {/* Lista de Profesores */} 
        <div className="space-y-6 sm:space-y-8">
          {profesores.map((profesor, index) => (
            <div key={index} className="p-4 sm:p-5 rounded-lg bg-blue-50/30 border-l-4 shadow-sm" style={{ borderColor: PRIMARY_BLUE }}>
              <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: PRIMARY_BLUE }}>{profesor.nombre}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 sm:mr-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <a href={`mailto:${profesor.email}`} className="hover:text-blue-600 hover:underline break-all">{profesor.email}</a>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 sm:mr-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>{profesor.despacho}</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-2 sm:mr-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span>{profesor.horario}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarjetaAsesoramiento; 