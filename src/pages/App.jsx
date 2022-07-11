import { useState } from 'react';
import PlayerSearch from '../components/PlayerSearch';
import Status from '../components/Status';
import Footer from '../components/Footer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Coming soon™
      </header> */}
      <section>
        <PlayerSearch />
      </section>
      <section>
        <Status />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
