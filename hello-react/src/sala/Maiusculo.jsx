function Maiusculo(props) {
  const textoInserido = props.text
  const textoConvertido = textoInserido.toUpperCase()
  
  return(
    <p>{textoConvertido}</p>
  )
}

export default Maiusculo