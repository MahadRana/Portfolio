import { NavBar } from './components/NavBar/navbar';
import {Home} from './components/Home/home'
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects';
import { ContactPage } from './components/ContactPage/contactpage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
