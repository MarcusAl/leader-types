import React from 'react';
import SetApi from './api/SetApi';
import './App.css';
import Grid from './components/Layout/Grid/Grid';
import { Square1, Square2 } from './components/Squares/Squares';
import { Container } from '@material-ui/core';
// import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="center-grid">
      <Grid className="main-grid">
        <div>
          <div>
            <Square1 id="square1" />
          </div>
        </div>
        <section className="main-body">
          MAIN
        </section>
        <div>
          <div>
            <Square2 id="square2" />
          </div>
        </div>
      </Grid>

    </div>
  );
}

export default App;
