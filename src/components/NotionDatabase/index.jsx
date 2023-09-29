import Footer from "../Footer";
import { Header } from "../Header";
import { NotionDatabase } from "./Notion";

const integrationKey = "secret_Ek63xj8vM4pORuthvA8XrV349tQ3aR9XwRprnVjtghY";
const databaseId = "30b34b8102054c1382249592c218a304";

export function Datos() {
  return (
    <>
      <NotionDatabase databaseId={databaseId} integrationKey={integrationKey} />
      <Header />
      <Footer />
    </>
  );
}
