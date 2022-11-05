function Minusculo(props) {
  const textoInserido = props.text
  const textoConvertido = textoInserido.toLowerCase()
  
  return(
    <p>{textoConvertido}</p>
  )
}

export default Minusculo
