import Heder from "../Heder";
import Footer from "../Footer";

function Form() {
  return (
    <>
      <h1 className="text-center fs-3 m-2">
        Este es el formulario para subir sus wallpapers
      </h1>
      <form className="form m-5">
        <div className="mb-3">
          <label>NombreWallpaper</label>
          <input type="text" />
        </div>
        <div className="mb-3">
          <label>UrlWallpaper</label>
          <input type="url" />
        </div>
        <div className="mb-3">
          <label>DownloadWallpaper</label>
          <input type="url" />
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
