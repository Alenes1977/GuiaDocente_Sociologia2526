import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'; // Asumiendo que los iconos vendrán de free-solid
import { PRIMARY_BLUE } from '../constants/colors';

interface TarjetaBaseProps {
  icono: IconDefinition;
  categoria: string;
  titulo: string;
  children: React.ReactNode;
  className?: string; // Para poder pasar clases adicionales al contenedor principal
}

const TarjetaBase: React.FC<TarjetaBaseProps> = ({
  icono,
  categoria,
  titulo,
  children,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 md:mb-12 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ${className}`}
    >
      {/* Decorador Orgánico Modificado */}
      <div 
        className="absolute top-0 right-0 w-40 h-32 bg-gradient-to-br from-blue-100 to-blue-200 opacity-30 z-0 pointer-events-none"
        style={{
          transform: 'translate(20%, -25%) rotate(15deg)',
          borderRadius: '60% 40% 30% 70% / 70% 30% 70% 40%',
        }}
      ></div>
      {/* SVG omitido ya que elementoSVG no fue proporcionado */}

      <div className="relative z-10">
        {/* Cabecera de la Tarjeta */}
        <div className="flex items-center mb-8">
          <div className="mr-5 p-4 rounded-xl bg-gradient-to-br from-blue-100/70 to-blue-50/40 shadow-md transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
            <FontAwesomeIcon
              icon={icono}
              className="text-3xl sm:text-4xl"
              style={{ color: PRIMARY_BLUE }}
            />
          </div>
          <div>
            <div className="mb-1 opacity-75 text-xs tracking-wider uppercase font-semibold flex items-center" style={{ color: PRIMARY_BLUE }}>
              <span className="inline-block w-5 h-0.5 bg-blue-400 mr-2"></span>
              {categoria}
            </div>
            <h2 
              className="text-2xl sm:text-3xl relative font-bold" 
              style={{ color: PRIMARY_BLUE }} 
            >
              {titulo}
            </h2>
          </div>
        </div>

        {/* Contenido (children) directamente aquí */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* La sección de "Rasgos distintivos" y "RasgosNavBar" se omite según lo solicitado */}
      </div>
    </div>
  );
};

export default TarjetaBase; 