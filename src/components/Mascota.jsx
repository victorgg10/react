import { Edad } from "./Edad"
import '../App.css'

export const Mascota = ( {name, age, show} ) => {
  return (
    <>
      <h4 className='mascota'>Soy una mascota y me llamo {name} </h4>
      <Edad className='edadPerro' edad={age} mostrar={show} />
    </>
  )
}
