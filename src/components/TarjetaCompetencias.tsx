import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface Competencia {
  codigo: string;
  descripcion: string;
}

interface TarjetaCompetenciasProps {
  icono: IconDefinition;
  categoria: string;
  titulo: string;
  competencias: Competencia[];
  className?: string;
}

const TarjetaCompetencias: React.FC<TarjetaCompetenciasProps> = ({
  icono,
  categoria,
  titulo,
  competencias,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ${className}`}
    >
      {/* Decorador Orgánico */}
      <div 
        className="absolute top-0 right-0 w-32 h-28 sm:w-40 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-200 opacity-25 sm:opacity-30 z-0 pointer-events-none"
        style={{
          transform: 'translate(20%, -25%) rotate(15deg)',
          borderRadius: '60% 40% 30% 70% / 70% 30% 70% 40%',
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
            <h2 
              className="text-lg sm:text-xl lg:text-2xl font-bold"
              style={{ color: PRIMARY_BLUE }} 
            >
              {titulo}
            </h2>
          </div>
        </div>

        {/* Lista de Competencias */}
        <div className="space-y-3 sm:space-y-4">
          {competencias.map((comp, index) => (
            <div 
              key={index} 
              className="p-3 sm:p-4 rounded-lg bg-blue-50/30 border-l-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start space-x-2 sm:space-x-3"
              style={{ borderColor: PRIMARY_BLUE }}
            >
              <span 
                className="flex-shrink-0 mt-0.5 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-bold text-white rounded-full shadow-sm"
                style={{ backgroundColor: PRIMARY_BLUE }}
              >
                {comp.codigo}
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {comp.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarjetaCompetencias; 