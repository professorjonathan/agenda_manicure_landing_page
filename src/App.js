import './App.css';
import Contato from './components/Contato';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';
import Recursos from './components/Recursos';
import Seção01 from './components/Seção01';
import Seção04 from './components/Seção04';

function App() {
  return (
    <div className="App">
      <Header />
      <Seção01 />
      <Download />
      <Recursos />
      <Seção04 />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
