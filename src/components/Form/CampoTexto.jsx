function CampoTexto(props) {
  function manejarCambio(e) {
    props.actualizarValor(e.target.value);
  }
  return (
    <>
      <input
        className="m-2"
        type="text"
        placeholder={props.placeholder}
        value={props.valor}
        onChange={manejarCambio}
        required={props.required}
      />
    </>
  );
}

export default CampoTexto;
