//import React from 'react'
import React from 'react';
import '../App.css';
import { Edad } from './Edad';

export const NombreCompleto = ( props ) => {
  console.log("props", props)
  return (
    //porque con el div se verian muchos o usar React.Fragment
    <React.Fragment>
      {/*asi se comenta en jsx*/}
     <h3 className='hhh'> mi nombre recibido de props es {props.name}</h3>
     <Edad edad={props.age} show={props.show} /> 
    </React.Fragment>
  )
}

//export default NombreCompleto;
