import { MapCards } from "./MapCards";
import { Client } from "@notionhq/client";

export async function Cards() {
  const notion = new Client({
    auth: { NOTION_API_KEY },
  });

  const results = await notion.databases.query({
    database_id: DATABASE_ID,
  });
  console.log(results);
}
