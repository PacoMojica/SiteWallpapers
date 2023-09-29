import React from "react";
import { useQuery } from "react-query";

export function NotionDatabase({ integrationKey, databaseId }) {
  const fetchNotionData = async () => {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${integrationKey}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de Notion");
    }

    return response.json();
  };

  const { data, error, isLoading } = useQuery("notionData", fetchNotionData);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Elementos de la base de datos de Notion:</h2>
      <ul>
        {data.results.map((item) => (
          <li key={item.id}>{item.properties.Name.title[0].text.content}</li>
        ))}
      </ul>
    </div>
  );
}
