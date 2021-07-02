import React from 'react';
import { RichText } from 'prismic-reactjs';

// A React component
const TextField = (props) => {
  return (
    console.log(props),
    <RichText render={props.document.data.text_field} />
  )
}

export default TextField;
