// import Footer from "../Footer";
// import { Header } from "../Header";
import { useNotionApi } from "../NotionDatabase";
import { usePokeApi } from "../NotionDatabase/pokemon";

export function Home() {
  // const { data, error, loading } = useNotionApi();
  const { data, error, loading } = usePokeApi();

  if (loading) return <p>Loading database...</p>;
  if (error) return <code>{JSON.stringify(error)}</code>

  return (
    <>
      {/* <Header /> */}
      <code>{JSON.stringify(data)}</code>
      {/* <Footer /> */}
    </>
  );
}
