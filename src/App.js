import React from "react";
import './App.css';
import Container from './components/Layout/Container/Container';
import Cubes from './components/Cubes/Cubes';
import Prismic from '@prismicio/client';
import client from './prismic-configuration';
import Icon from './components/Icons/Icon';
// import { Button } from '@material-ui/core';


function App() {
  
  // Instantiate the doc variable with useState
  const [doc, setDocData] = React.useState(null)
  
  React.useEffect(() => {
  const fetchData = async () => {
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'leader-types')
    )
    if (response) {
      setDocData(response.results[0])
    }
  }
  fetchData()
}, [])

return (
  <React.Fragment>
    {
      doc ? (
        <div id="main-container">
          <Container className="container">
            <Icon />
            <Cubes items={doc} />
          </Container>
        </div>
      ) : <div>
        <Container className="container">
          Loading....
        </Container>
      </div>
    }
  </React.Fragment>
  )
}

export default App;
