import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";
import Heder from "../Heder";
import Footer from "../Footer";
import { Input } from "../Input";
import { Button } from "../Button";

export function UnsplashAPI() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          headers: {
            Authorization:
              "Client-ID cnHcjBsNrb53Yl448j_jdKaMGDIVypFNX_g3Ob6a9Bg",
          },
        });
        console.log(response.data);
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Heder />
      <h1 className="text-center m-2">Unsplash Photos</h1>
      <Input placeholder="Introduce lo que quieras buscar" />
      <Button text="Buscar" />
      <div>
        {photos.map((photo) => (
          <Card photo={photo} key={photo.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}
