import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Header from './components/Header';
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Center from "./components/Center";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <div className="content">
        <Sidebar/>
        <Center/>
        <Sidebar/>
      </div>
      <Footer/>
      <Model/>
    </div>
  );
}

export default App;
