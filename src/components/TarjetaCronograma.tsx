import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface CronogramaSemana {
  semana: string;
  jueves: string;
  martes: string;
}

interface TarjetaCronogramaProps {
  icono: IconDefinition;
  categoria: string;
  tituloPrincipal: string;
  semanas: CronogramaSemana[];
  className?: string;
}

const TarjetaCronograma: React.FC<TarjetaCronogramaProps> = ({
  icono,
  categoria,
  tituloPrincipal,
  semanas,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden ${className}`}
    >
      {/* Decorador superior derecha */}
      <div 
        className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-100 to-transparent opacity-30 z-0 pointer-events-none rounded-full transform rotate-45"
      ></div>
      {/* Decorador inferior izquierda (ya existente, ajustado si es necesario) */}
      <div 
        className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-blue-50 to-transparent opacity-40 z-0 pointer-events-none rounded-full"
      ></div>

      <div className="relative z-10">
        {/* Cabecera de la Tarjeta */} 
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="mr-4 sm:mr-5 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-100/70 to-blue-50/40 shadow-md transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
            <FontAwesomeIcon
              icon={icono}
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{ color: PRIMARY_BLUE }}
            />
          </div>
          <div>
            <div className="mb-1 opacity-75 text-xs tracking-wider uppercase font-semibold flex items-center" style={{ color: PRIMARY_BLUE }}>
              <span className="inline-block w-4 h-0.5 bg-blue-400 mr-2"></span>
              {categoria}
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>
              {tituloPrincipal}
            </h2>
          </div>
        </div>

        {/* Tabla de Cronograma */} 
        <div className="overflow-x-auto rounded-lg shadow-md border border-blue-100">
          <table className="min-w-full bg-white">
            <thead /* Estilo de cabecera actualizado */
              style={{ backgroundColor: PRIMARY_BLUE }}
            >
              <tr>
                <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-xs font-semibold uppercase tracking-wider text-white">Semana</th>
                <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-xs font-semibold uppercase tracking-wider text-white">Martes (12:00 - 13:45)</th>
                <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-xs font-semibold uppercase tracking-wider text-white">Jueves (8:00 - 9:45)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {semanas.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'} hover:bg-blue-100/50 transition-colors duration-150`}>
                  <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">{item.semana}</td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-600">{item.martes}</td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-600">{item.jueves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCronograma; 