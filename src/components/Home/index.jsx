import Cards from "../Cards";
import Footer from "../Footer";
import Heder from "../Heder";

function Home({ lista }) {
  return (
    <>
      <Heder />
      <Cards lista={lista} />
      <Footer />
    </>
  );
}

export default Home;
