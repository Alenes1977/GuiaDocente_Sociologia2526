import React from 'react';
// import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import TarjetaAsesoramiento from '../components/TarjetaAsesoramiento';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

const AsesoramientoPage: React.FC = () => {
  const profesoresData = [
    {
      nombre: "Prof. Dr. Alejandro Néstor García Martínez",
      email: "angarcia@unav.es",
      despacho: "Despacho 2470 Edificio Ismael Sánchez Bella (Biblioteca antigua) Planta 2ª, Departamento de Ciencia Política y Sociología.",
      horario: "Lunes de 9:00 a 10:30 y Viernes de 10:30 a 11:30 horas."
    }
  ];

  return (
    // <Layout>
      <div className="container mx-auto py-4 px-4 md:px-0">
        <TarjetaAsesoramiento 
          icono={faHandshakeAngle}
          categoria="Atención y Tutorías"
          tituloPrincipal="Horarios de Asesoramiento"
          profesores={profesoresData}
          className="mb-6"
        />
        <NavBar />
      </div>
    // </Layout>
  );
};

export default AsesoramientoPage; 