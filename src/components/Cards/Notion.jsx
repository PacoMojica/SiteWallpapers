import { Client } from "@notionhq/client";

const DATABASE_ID = "5e2a485d3c0d49d7a1dd6b5171e5ccc0";

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

export async function GetWalpapers({ filterBy: Name_Wallpaper }) {
  const query = { database_id: DATABASE_ID };

  if (filterBy) {
    query.filter = {
      property: "Name_Wallpaper",
      rich_text: {
        equals: filterBy,
      },
    };

    const { results } = await notion.databases.query(query);

    console.log(results);

    return results.map((page) => {
      const { properties } = page;
      const { Id, Name_Wallpaper, Img, Download } = properties;

      return {
        id: Id.rich_text[0].plaint_text,
        Name_Wallpaper: Name_Wallpaper.title[0].plaint_text,
        Img: Img.files[0].file.url,
      };
    });
  }
}
