import React, { useState, useEffect } from "react";
import Prismic from '@prismicio/client';
import client from '../config/prismic-configuration';
import TextField from './TextField';
import { Date, Link, RichText } from 'prismic-reactjs';

const SetApi = () => {
  // Instantiate the doc variable with useState
  const [doc, setDocData] = useState(null)

    // Collect Api Results from the server
    useEffect(() => {
      const fetchData = async () => {
        const response = await client.query(
          Prismic.Predicates.at('document.type', 'leader-types')
        )
        if (response) {
          setDocData(response.results[0]);
          console.log(response.results);
        }
      }
      fetchData()
    }, [doc])
     
    
    return (
      <div>
        "Test"
      </div>
      )
    }



export default SetApi;