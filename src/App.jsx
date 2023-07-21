import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Heder from "./components/Heder";

function App(props) {
  const file = props.file;
  return (
    <>
      <Heder />
      <Cards file={file} />
      <Footer />
    </>
  );
}

export default App;
