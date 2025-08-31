import Layout from './components/Layout';
import InformacionPage from './pages/InformacionPage';
import CompetenciasPage from './pages/CompetenciasPage';
import ProgramaPage from './pages/ProgramaPage';
import ActividadesPage from './pages/ActividadesPage';
import EvaluacionPage from './pages/EvaluacionPage';
import AsesoramientoPage from './pages/AsesoramientoPage';
import BibliografiaPage from './pages/BibliografiaPage';
// import CronogramaPage from './pages/CronogramaPage';

function App() {
  return (
    <Layout>
      <div>
        <div id="informacion">
          <InformacionPage />
        </div>
        <div id="competencias">
          <CompetenciasPage />
        </div>
        <div id="programa">
          <ProgramaPage />
        </div>
        <div id="actividades">
          <ActividadesPage />
        </div>
        <div id="evaluacion">
          <EvaluacionPage />
        </div>
        <div id="asesoramiento">
          <AsesoramientoPage />
        </div>
        <div id="bibliografia">
          <BibliografiaPage />
        </div>
        {/* <div id="cronograma">
          <CronogramaPage />
        </div> */}
      </div>
    </Layout>
  );
}

export default App;
