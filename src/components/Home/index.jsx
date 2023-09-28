import { Cards } from "../Cards";
import Footer from "../Footer";
import { Header } from "../Header";

function Home({ wallpapers }) {
  return (
    <>
      <Header />
      <Cards wallpapers={wallpapers} />
      <Footer />
    </>
  );
}

export default Home;
