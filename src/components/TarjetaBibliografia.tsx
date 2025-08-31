import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faBook, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface BibliografiaItem {
  texto: string;
  // Idealmente, aquí iría un enlace real si se tuviera
  // enlaceBiblioteca?: string; 
}

interface BibliografiaSeccionData {
  tituloSeccion: string;
  items: BibliografiaItem[];
}

interface TarjetaBibliografiaProps {
  icono: IconDefinition;
  categoria: string;
  tituloPrincipal: string;
  secciones: BibliografiaSeccionData[];
  notaAdicional?: string;
  className?: string;
}

const TarjetaBibliografia: React.FC<TarjetaBibliografiaProps> = ({
  icono,
  categoria,
  tituloPrincipal,
  secciones,
  notaAdicional,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 relative overflow-hidden ${className}`}
    >
      {/* Decorador */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-bl from-blue-100 to-transparent opacity-25 sm:opacity-40 z-0 pointer-events-none"
        style={{
          transform: 'translate(25%, -25%) rotate(45deg)',
          borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
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

        {/* Secciones de Bibliografía */} 
        <div className="space-y-6 sm:space-y-8">
          {secciones.map((seccion, index) => (
            <section key={index}>
              <h3 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b-2" style={{ color: PRIMARY_BLUE, borderColor: PRIMARY_BLUE + '40' }}>
                {seccion.tituloSeccion}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 list-none pl-0">
                {seccion.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="p-2.5 sm:p-3 rounded-md bg-blue-50/30 border-l-4 flex items-start"
                    style={{ borderColor: PRIMARY_BLUE }}
                  >
                    <FontAwesomeIcon icon={faBook} className="text-blue-500 mr-2 sm:mr-3 mt-0.5 text-sm sm:text-base flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-800">{item.texto}</p>
                      {/* Simulación de enlace a biblioteca, se podría hacer un enlace real si los datos existieran */}
                      <span className="text-xs text-blue-600 mt-1 inline-flex items-center hover:underline cursor-pointer">
                        <FontAwesomeIcon icon={faSearchLocation} className="mr-1 sm:mr-1.5 text-xs" />
                        Localízalo en la Biblioteca
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Nota Adicional */} 
        {notaAdicional && (
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-100">
            <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">{notaAdicional}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarjetaBibliografia; 