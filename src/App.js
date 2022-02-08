import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
           This project was coded by{" "} 
          <a href="https://martha-vue-final-portfolio.netlify.app/">Martha Vue</a> and is open-sourced on{" "}
          <a href="https://github.com/MartyVue/dictionary-project"
          target="_blank" rel="noopener noreferrer">Github</a> and hosted by{" "}
          <a href="https://www.netlify.com/">Netlify.</a>
        </small>
      </footer>
      </div>
    </div>
  );
}
