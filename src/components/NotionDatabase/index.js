const database_id = "30b34b8102054c1382249592c218a304";
const NOTION_API_KEY = "secret_i0Dy5pMzluzs2QuTekg07SDp6U2LblezReZQTnhSlT2";

import axios from "axios";

const options = {
  method: "GET",
  url: `https://api.notion.com/v1/databases/${database_id}`,
  headers: { accept: NOTION_API_KEY, "Notion-Version": "2022-06-28" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
