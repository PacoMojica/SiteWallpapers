import { useState } from "react";
import "./Unisplash.css";
import { Button } from "../Button";

export function Card(props) {
  const { key, urls, alt_description, created_at, likes, links, user } =
    props.photo;

  const [cargando, setCargando] = useState();

  return (
    <>
      {cargando ? (
        <h2>Cargando</h2>
      ) : (
        <div className="card">
          <img
            src={urls.full}
            key={key}
            className="card-img-top img-unisplash"
            alt={alt_description}
          />

          <div className="card-body">
            <h5 className="card-title">{created_at}</h5>
            <p className="card-text">{user.username}</p>
            <img
              src={user.profile_image.small}
              className="rounded"
              alt="profile_image"
            />
            <p className="card-text">likes: {likes}</p>

            <a href={links.download} className="btn">
              <Button text="Download" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
