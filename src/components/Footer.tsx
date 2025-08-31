import React from 'react';
import { PRIMARY_BLUE } from '../constants/colors';

// Importar los SVG
import logoUnavBlanco from '../assets/Logo unav blanco.svg';
import logoUniversitasBlanco from '../assets/Logo_Universitas_blanco.svg';

const Footer: React.FC = () => {
  return (
    <footer 
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between bg-primary-blue/90 py-2 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
      style={{ backgroundColor: `${PRIMARY_BLUE}E6` }} // E6 en hex = 90% de opacidad
    >
       {/* Izquierda: Logo UNAV más grande */}
       <div className='flex flex-col items-center md:items-start'>
         <img
           src={logoUnavBlanco}
           alt="Logo Universidad de Navarra"
           className="ml-5 h-8 md:h-10"
         />
       </div>

       {/* Centro: Logo Universitas y Grado en PPE */}
       <div className="flex items-center space-x-3">
         <div className='flex flex-col items-center md:items-end'>
           <img
             src={logoUniversitasBlanco}
             alt="Logo Universitas"
             className="h-8 md:h-10"
           />
         </div>
         <span className="self-center whitespace-nowrap text-xs font-bold text-white font-poppins">
            Grado en PPE
         </span>
       </div>

       {/* Derecha: Copyright */}
       <div className="mr-5 text-xs">
         &copy; 2025
       </div>
    </footer>
  );
};

export default Footer;
