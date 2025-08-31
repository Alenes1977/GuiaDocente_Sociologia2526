import React, { useState } from 'react';
// Eliminamos useLocation y useNavigate de react-router-dom
// import { useLocation, useNavigate } from 'react-router-dom';
import { PRIMARY_BLUE } from '../constants/colors';
// Importar FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Importar el logo
// import logoUniversitasAzul from '../assets/Logo_Universitas_azul.svg';

// const navLinks ahora usará 'id' en lugar de 'path' y los valores serán selectores de ID.
const navLinks = [
  { label: "Informacion", id: "#informacion" },
  { label: "Competencias", id: "#competencias" },
  { label: "Programa", id: "#programa" },
  { label: "Actividades", id: "#actividades" },
  { label: "Evaluación", id: "#evaluacion" },
  { label: "Asesoramiento", id: "#asesoramiento" },
  { label: "Bibliografía", id: "#bibliografia" },
  // { label: "Cronograma", id: "#cronograma" }, 
];

const Header: React.FC = () => {
  // Eliminamos location y navigate
  // const location = useLocation();
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Eliminamos el useEffect que dependía de location
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);

  const handleScrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del ancla
    const elementId = id.substring(1); // Quitamos el # para getElementById
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Cerramos el menú después de hacer clic
  };

  return (
    <header 
      className="fixed top-0 left-0 z-50 w-full px-4 py-2 shadow-md"
      style={{ backgroundColor: PRIMARY_BLUE }} // Fondo azul primario
    >
      <div className="mx-auto flex items-center justify-center" style={{ maxWidth: '1400px' }}>
        {/* Botón de menú móvil (ahora a la izquierda) */}
        <div className="md:hidden absolute left-4">
          <button 
            className="p-1 rounded-md text-white hover:bg-white/20" // Icono blanco, hover sutil
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú principal"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-lg" />
          </button>
        </div>

        {/* Navegación principal centrada para pantallas medianas y grandes */}
        <div className="hidden md:block"> 
          <nav className="flex items-center space-x-1 text-xs font-medium"> {/* Reducido space-x-1 para más items */}
            {navLinks.map((item, index) => (
              // Usamos item.id como key
              <React.Fragment key={item.id}>
                <a
                  // href ahora usa item.id
                  href={item.id}
                  // onClick llama a handleScrollToSection con item.id
                  onClick={handleScrollToSection(item.id)}
                  // Simplificamos className y style, eliminando la lógica de active path
                  className="rounded-md px-2 py-1.5 transition-all duration-300 flex items-center font-semibold bg-white/10 text-white hover:bg-white/30"
                  style={{ color: 'white' }}
                >
                  {item.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-white/50 px-1">|</span> /* Separador más sutil y con padding */
                )}
              </React.Fragment>
            ))}
          </nav>
        </div> 


      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div 
          className="md:hidden mt-2 py-2 shadow-inner"
          style={{ backgroundColor: PRIMARY_BLUE }} // Fondo azul primario también para el desplegable
        >
          <div className="px-4 py-2">
            <div className="flex flex-col space-y-2 mt-2">
              {navLinks.map((item) => (
                // Usamos item.id como key
                <a
                  key={item.id}
                  // href ahora usa item.id
                  href={item.id}
                  // onClick llama a handleScrollToSection con item.id
                  onClick={handleScrollToSection(item.id)}
                  // Simplificamos className, eliminando la lógica de active path
                  className="block rounded-md px-3 py-2 font-medium text-white hover:bg-white/20"
                  style={{ color: 'white' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
