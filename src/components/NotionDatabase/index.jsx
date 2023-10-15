import { Client } from "@notionhq/client";

const DATABASE_ID = "30b34b8102054c1382249592c218a304";

const NOTION_TOKEN = "secret_t1iSbeavFd23yf5StHuIX5NHfwLddN3Y8pOVm50tpEf";

const notion = new Client({
  auth: NOTION_TOKEN,
});

export async function NotionApi() {
  const query = { database_id: DATABASE_ID };

  const { results } = await notion.databases.query(query);

  console.log(results);

  return results.map((page) => {
    const { properties } = page;

    const { title, name, wallpaper, download } = properties;

    return {
      title: title.title[0].plain_text,
      wallpaper: wallpaper.files[0].file.url,
      name: name.rich_text[0].plain_text,
      download: download.files[0].file.url,
    };
  });
}
