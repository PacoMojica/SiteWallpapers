import Cards from "../Cards";
import Footer from "../Footer";
import Heder from "../Heder";

function Home(props) {
  const lista = props.lista;
  return (
    <>
      <Heder />
      <Cards lista={lista} />
      <Footer />
    </>
  );
}

export default Home;
