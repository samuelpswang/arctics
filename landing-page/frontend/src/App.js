import './style.css';
import './responsive.css';
import Nav from './Components/Nav';
import NavMobile from './Components/NavMobile';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Function from './Components/Function';
import Members from './Components/Members';
import ContactUs from './Components/ContactUs';
import Foot from './Components/Foot';

function App() {
  return (
    <div className="App">
      <NavMobile />
      <Nav />
      <Header />
      <main>
        <AboutUs />
        <Function />
        <Members />
        <ContactUs />
      </main>
      <Foot />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
