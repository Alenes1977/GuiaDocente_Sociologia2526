import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap, faListCheck, faPersonChalkboard,
  faHandshakeAngle, faBookOpen, IconDefinition, faCalendarAlt, faInfoCircle, faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import { PRIMARY_BLUE } from '../constants/colors';

interface NavItem {
  label: string;
  id: string;
  icon: IconDefinition;
}

const navItemsData: NavItem[] = [
  { label: "Informacion", id: "informacion", icon: faInfoCircle },
  { label: "Competencias", id: "competencias", icon: faGraduationCap },
  { label: "Programa", id: "programa", icon: faListCheck },
  { label: "Actividades", id: "actividades", icon: faPersonChalkboard },
  { label: "Evaluación", id: "evaluacion", icon: faClipboardCheck },
  { label: "Asesoramiento", id: "asesoramiento", icon: faHandshakeAngle },
  { label: "Bibliografía", id: "bibliografia", icon: faBookOpen },
  // { label: "Cronograma", id: "cronograma", icon: faCalendarAlt },
];

const NavBar: React.FC = () => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16">
      <h2 
        className="text-lg sm:text-xl font-bold text-left mb-6"
        style={{ color: PRIMARY_BLUE }}
      >
        Explorar otras secciones:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {navItemsData.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className="group flex flex-col items-center justify-center p-3 sm:p-3 rounded-xl bg-white shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
            title={item.label}
          >
            <div 
              className="p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 mb-2 sm:mb-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-focus:scale-105"
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="text-xl sm:text-2xl transition-colors duration-300"
                style={{ color: PRIMARY_BLUE }}
              />
            </div>
            <span 
              className="text-xs font-semibold text-center transition-colors duration-300 group-hover:text-blue-600 group-focus:text-blue-600"
              style={{ color: PRIMARY_BLUE }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar; 