import Cards from "../Cards";
import Footer from "../Footer";
import Heder from "../Heder";

function Home({ wallpapers }) {
  return (
    <>
      <Heder />
      <Cards wallpapers={wallpapers} />
      <Footer />
    </>
  );
}

export default Home;
