export function Button(props) {
  return (
    <>
      <button className="btn btn-outline-secondary" type="button">
        {props.text}
      </button>
    </>
  );
}
