import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className=" container">
        <Weather defaultCity="Seville" />
        <footer className="App-footer mt-3">
          <small>
            <a
              href="https://github.com/CathKolar/react-weather-app-2021"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <span className="link"> Open-source code </span>
            </a>
            by
            <a
              href="https://www.catherinekolar.dev"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <span className="link"> Catherine Kolar </span>
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
