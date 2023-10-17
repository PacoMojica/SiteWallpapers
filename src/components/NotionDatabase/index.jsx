// import { Client } from "@notionhq/client";

import axios from 'axios';
import { useEffect, useState } from "react";

const DATABASE_ID = "30b34b8102054c1382249592c218a304";

const NOTION_TOKEN = "secret_t1iSbeavFd23yf5StHuIX5NHfwLddN3Y8pOVm50tpEf";

// const notion = new Client({
//   auth: NOTION_TOKEN,
// });

const URL = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;

// este no deberia ser componente de react deberia ser un custom hook
export function useNotionApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchDatabase() {
    const response = await axios.post(URL, {
      headers: {
        'Notion-Version': '2022-06-28',
        'Authorization': `Bearer ${NOTION_TOKEN}`,
      },
    });
    const database = response.json();

    setData(database);
  }

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    try {
      fetchDatabase();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  return { data, error, loading };
}
// export async function NotionApi() {
  // const query = { database_id: DATABASE_ID };

  // const { results } = await notion.databases.query(query);

  // console.log(results);

  // return results.map((page) => {
  //   const { properties } = page;

  //   const { title, name, wallpaper, download } = properties;

  //   return {
  //     title: title.title[0].plain_text,
  //     wallpaper: wallpaper.files[0].file.url,
  //     name: name.rich_text[0].plain_text,
  //     download: download.files[0].file.url,
  //   };
  // });
// }
