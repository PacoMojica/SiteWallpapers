import { useQuery } from "react-query";
import React from "react";

const database_id = "30b34b8102054c1382249592c218a304";
const NOTION_API_KEY = "secret_t1iSbeavFd23yf5StHuIX5NHfwLddN3Y8pOVm50tpEf";

export function Notion_Api() {
  const fetchNotionData = async () => {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${database_id}`,
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  const { data, status } = useQuery("notionData", fetchNotionData);

  return (
    <>
      {status === "loading" && (
        <div className="d-flex justify-content-center aling-items-center text-center m-5">
          Loading data...
        </div>
      )}

      {status === "error" && (
        <div className="d-flex justify-content-center aling-items-center text-center m-5">
          Error fetching data
        </div>
      )}

      {status === "success" && (
        <div>
          {data.results.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
