import React from 'react';

import DDDS  from './components/DDDS';
import Contracts from './components/Contracts'
import Text1 from './components/Text1'
import Text2 from './components/Text2'


import "./styles/main.scss"
import "./styles/responsive.scss"

function App() {
    return (
    <div className="App">

      <header>
          <h2>Telzir</h2>
          <nav>
            <a href='#planos'>planos</a>
            <a href='#calcarea'>calcular valor</a> 
          </nav>
      </header>

      <main>

        <Text1 />

        <Contracts />

        <Text2 />

        <DDDS />

      </main>

      <footer>
          &copy;Cauã Andrade
      </footer>

    </div>
  );
}

export default App;
