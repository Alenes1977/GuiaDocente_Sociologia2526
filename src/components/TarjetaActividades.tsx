import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faTasks, faClock } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface ActividadFormativaItem {
  denominacionOficial: string;
  texto?: string;
  textoIntro?: string;
  terminoResaltado?: string;
  textoContinuacion?: string;
}

interface DistribucionTiempoItem {
  horas: number;
  descripcion: string;
}

interface TarjetaActividadesProps {
  icono: IconDefinition;
  categoria: string;
  titulo: string;
  introduccionMetodologia?: string;
  terminoTBL?: string;
  descripcionGeneral: string;
  actividades: ActividadFormativaItem[];
  distribucionTiempo: DistribucionTiempoItem[];
  className?: string;
}

const TarjetaActividades: React.FC<TarjetaActividadesProps> = ({
  icono,
  categoria,
  titulo,
  introduccionMetodologia,
  terminoTBL,
  descripcionGeneral,
  actividades,
  distribucionTiempo,
  className = ''
}) => {
  // Calcular el total de horas para la escala de las barras
  const totalHoras = distribucionTiempo.reduce((sum, item) => sum + item.horas, 0);

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ${className}`}
    >
      {/* Decorador Orgánico */}
      <div 
        className="absolute top-0 left-0 w-32 h-28 sm:w-40 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-200 opacity-25 sm:opacity-30 z-0 pointer-events-none"
        style={{
          transform: 'translate(-20%, -25%) rotate(-15deg)',
          borderRadius: '30% 70% 60% 40% / 70% 40% 30% 60%',
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

        {/* Contenido de Actividades Formativas */}
        <div className="mb-6 sm:mb-8">
          {(introduccionMetodologia || terminoTBL) && (
            <p className="text-sm sm:text-md text-gray-700 mb-2 leading-relaxed">
              {introduccionMetodologia}
              {terminoTBL && (
                <span 
                  className="font-semibold px-2 py-0.5 mx-0.5 rounded-md text-white text-xs align-middle"
                  style={{ backgroundColor: PRIMARY_BLUE }}
                >
                  {terminoTBL}
                </span>
              )}
            </p>
          )}
          <p className="text-sm sm:text-md text-gray-700 mb-4 leading-relaxed">
            {descripcionGeneral}
          </p>
          <ul className="space-y-2 sm:space-y-3 list-none pl-0">
            {actividades.map((actividad, index) => (
              <li 
                key={index} 
                className="flex items-start p-2.5 sm:p-3 rounded-md bg-blue-50/30 border-l-4"
                style={{ borderColor: PRIMARY_BLUE }}
              >
                <FontAwesomeIcon icon={faTasks} className="text-blue-500 mr-2 sm:mr-3 mt-0.5 text-sm sm:text-base flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-800">
                  <span 
                    className="font-semibold px-2 py-0.5 mr-1 rounded-md text-white text-xs align-middle"
                    style={{ backgroundColor: PRIMARY_BLUE }} 
                  >
                    {actividad.denominacionOficial}
                  </span>
                  {actividad.terminoResaltado ? (
                    <>
                      {actividad.textoIntro}
                      <span 
                        className="font-semibold px-2 py-0.5 mx-0.5 rounded-md text-white text-xs align-middle"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                      >
                        {actividad.terminoResaltado}
                      </span>
                      {actividad.textoContinuacion}
                    </>
                  ) : (
                    actividad.texto
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Distribución del Tiempo */}
        <div>
          <h3 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center" style={{ color: PRIMARY_BLUE }}>
            <FontAwesomeIcon icon={faClock} className="mr-2 sm:mr-3 text-base sm:text-lg" />
            Distribución del tiempo aproximada
          </h3>
          <ul className="space-y-3 sm:space-y-4 list-none pl-0">
            {distribucionTiempo.map((item, index) => (
              <li key={index} className="py-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs sm:text-sm text-gray-700">{item.descripcion}</span>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: PRIMARY_BLUE }}>
                    {item.horas} horas
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                  <div
                    className="h-2 sm:h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: totalHoras > 0 ? `${(item.horas / totalHoras) * 100}%` : '0%',
                      backgroundColor: PRIMARY_BLUE,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TarjetaActividades; 