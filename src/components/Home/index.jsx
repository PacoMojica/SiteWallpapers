import Footer from "../Footer";
import { Header } from "../Header";
import { Datos } from "../NotionDatabase";

function Home({ wallpapers }) {
  return (
    <>
      <Header />
      <Datos wallpapers={wallpapers} />
      <Footer />
    </>
  );
}

export default Home;
