import '../App.css'
import PropTypes from 'prop-types'

const myStyle = {
  ocultar : {
    display: 'none'
  },
  mostrar : {
    display: 'block',
    color : 'orange',
    backgroundColor : 'grey'
  }
}

export const Edad = ( {edad, show=true} ) => {
  return (
    <>
      <h3  style={ show ? myStyle.mostrar : myStyle.ocultar }>
        mi edad es recibida de props {edad}
        </h3>
    </>
  )
}

Edad.propTypes = {
  edad: PropTypes.number.isRequired
}
