import './App.css';
import './styles/style.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Skill from './components/Skill';

function App() {
  document.title='Ian Nguyen | Web Developer'
  return (
    <>
    <Nav/>
    <Header/>
    <Skill/>
    </>
  );
}

export default App;
