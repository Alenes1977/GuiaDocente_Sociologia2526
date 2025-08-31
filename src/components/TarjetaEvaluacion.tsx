import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface EvaluacionItemAntiguo {
  nombre: string;
  porcentaje: string;
  subItems?: EvaluacionItemAntiguo[];
  descripcion?: string;
}

interface NotaAdicional {
  titulo: string;
  contenido: string | string[];
  tipo?: 'info' | 'warning'; // Para estilizar notas
}

interface ItemEvaluacion {
  nombre: string;
  porcentajeItem: string;
  tipo: "Individual" | "Equipo";
  badge?: string; // Añadido para mostrar "exámenes" o "trabajos"
}

interface CategoriaEvaluacion {
  tituloCategoria: string;
  porcentajeCategoria: string;
  items: ItemEvaluacion[];
}

interface Convocatoria {
  titulo: string;
  descripcionGeneral?: string | string[];
  itemsPuntuacion?: EvaluacionItemAntiguo[];
  categoriasEvaluacion?: CategoriaEvaluacion[];
  notaGlobalEquipos?: string;
  notasAdicionales?: NotaAdicional[];
}

interface TarjetaEvaluacionProps {
  icono: IconDefinition;
  categoria: string;
  tituloPrincipal: string;
  convocatoriaOrdinaria: Convocatoria;
  convocatoriaExtraordinaria: Convocatoria;
  alumnosLibresInfo: NotaAdicional;
  necesidadesEducativasEspeciales: NotaAdicional;
  advertenciaFraude: NotaAdicional;
  className?: string;
}

const renderContenido = (contenido: string | string[]) => {
  if (Array.isArray(contenido)) {
    return (
      <ul className="list-disc list-inside space-y-1 pl-2 sm:pl-4 text-xs sm:text-sm text-gray-600">
        {contenido.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    );
  }
  return <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{contenido}</p>;
};

const renderNotasAdicionales = (notas: NotaAdicional[]) => {
  return (
    <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
      {notas.map((nota, index) => (
        <div 
          key={index} 
          className={`
            p-3 sm:p-4 rounded-lg border-l-4 shadow-sm 
            transition-colors duration-150 ease-in-out
            ${nota.tipo === 'warning' ? 'bg-yellow-50 border-yellow-400 hover:bg-yellow-100/80' : 'bg-blue-50/50 border-blue-400 hover:bg-blue-100/60'}
          `}
        >
          <h4 className="font-semibold text-sm sm:text-md mb-1 flex items-center" style={{ color: nota.tipo === 'warning' ? '#D97706' : PRIMARY_BLUE }}>
            <FontAwesomeIcon icon={nota.tipo === 'warning' ? faExclamationTriangle : faInfoCircle} className="mr-2 text-base sm:text-lg" />
            {nota.titulo}
          </h4>
          {renderContenido(nota.contenido)}
        </div>
      ))}
    </div>
  );
};

const TarjetaEvaluacion: React.FC<TarjetaEvaluacionProps> = ({
  icono,
  categoria,
  tituloPrincipal,
  convocatoriaOrdinaria,
  convocatoriaExtraordinaria,
  alumnosLibresInfo,
  necesidadesEducativasEspeciales,
  advertenciaFraude,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden ${className}`}
    >
      {/* Decorador (opcional, se puede ajustar) */}
      <div 
        className="absolute -top-10 -right-10 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100 to-transparent opacity-25 sm:opacity-30 z-0 pointer-events-none rounded-full"
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

        {/* Sección Convocatoria Ordinaria */} 
        <section className="mb-6 sm:mb-8">
          <h3 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b-2" style={{ color: PRIMARY_BLUE, borderColor: PRIMARY_BLUE + '40' }}>
            {convocatoriaOrdinaria.titulo}
          </h3>
          
          {convocatoriaOrdinaria.categoriasEvaluacion && convocatoriaOrdinaria.categoriasEvaluacion.map((categoria, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <h4 
                className="text-sm sm:text-base font-semibold p-2.5 sm:p-3 rounded-t-lg text-white flex justify-between items-center"
                style={{ backgroundColor: PRIMARY_BLUE }}
              >
                <span>{categoria.tituloCategoria}</span>
                <span>{categoria.porcentajeCategoria}</span>
              </h4>
              <ul className="list-none pl-0 bg-gray-50 rounded-b-lg shadow-sm border border-gray-200 border-t-0">
                {categoria.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx} 
                    className="p-2.5 sm:p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block font-medium text-xs sm:text-sm text-gray-800">{item.nombre}</span>
                        <span 
                          className={`inline-block text-xxs sm:text-xs px-1.5 py-0.5 rounded mt-1 font-medium 
                                      ${item.badge === 'exámenes' ? 'bg-green-100 text-green-700' : 'bg-sky-100 text-sky-700'}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <span 
                        className="font-semibold text-xs sm:text-sm text-white px-2.5 py-1 rounded-md ml-2 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: PRIMARY_BLUE + 'E6' }}
                      >
                        {item.porcentajeItem}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {convocatoriaOrdinaria.notaGlobalEquipos && (
            <p className="text-xs sm:text-sm text-gray-700 mt-4 sm:mt-6 p-3 bg-blue-50/70 border-l-4 border-blue-300 rounded-r-md font-medium">
              {convocatoriaOrdinaria.notaGlobalEquipos}
            </p>
          )}

          {convocatoriaOrdinaria.notasAdicionales && renderNotasAdicionales(convocatoriaOrdinaria.notasAdicionales)}
        </section>

        {/* Sección Convocatoria Extraordinaria */} 
        <section className="mb-6 sm:mb-8">
          <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3 pb-1.5 sm:pb-2 border-b-2" style={{ color: PRIMARY_BLUE, borderColor: PRIMARY_BLUE + '40' }}>
            {convocatoriaExtraordinaria.titulo}
          </h3>
          {renderContenido(convocatoriaExtraordinaria.descripcionGeneral || [])} {/* Asegurar que sea un array si es undefined */}
          {convocatoriaExtraordinaria.notasAdicionales && renderNotasAdicionales(convocatoriaExtraordinaria.notasAdicionales)}
        </section>

        {/* Sección Alumnos Libres */} 
        <section className="mb-6 sm:mb-8">
          {renderNotasAdicionales([alumnosLibresInfo])} {/* Reutilizar renderNotasAdicionales para consistencia */}
        </section>

        {/* Sección Necesidades Educativas Especiales */}
        <section className="mb-6 sm:mb-8">
          {renderNotasAdicionales([necesidadesEducativasEspeciales])}
        </section>

        {/* Sección Advertencia sobre Fraude */}
        <section>
          {renderNotasAdicionales([advertenciaFraude])}
        </section>
      </div>
    </div>
  );
};

export default TarjetaEvaluacion; 