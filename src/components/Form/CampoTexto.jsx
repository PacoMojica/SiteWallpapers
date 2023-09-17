import "./Form.css";

function CampoTexto(props) {
  function manejarCambio(e) {
    props.actualizarValor(e.target.value);
  }
  return (
    <>
      <input
        className="form form-control m-2"
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
