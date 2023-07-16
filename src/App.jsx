import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Heder from "./components/Heder";

function App() {
  return (
    <div className="container">
      <div className="row my-1">
        <div className="col">
          <Heder />
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
