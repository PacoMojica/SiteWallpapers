import Heder from "../Heder";
import Footer from "../Footer";
import "./Form.css";

function Form() {
  return (
    <>
      <h1 className="text-center fs-3 m-2">
        Este es el formulario para subir sus wallpapers
      </h1>
      <form className="form m-5">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="input" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Heder />
      <Footer />
    </>
  );
}

export default Form;
