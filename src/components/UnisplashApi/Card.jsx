import "./Unisplash.css";

export function Card(props) {
  const { key, urls, alt_description, created_at, likes, links, user } =
    props.photo;

  return (
    <>
      <div className="card">
        <img
          src={urls.full}
          key={key}
          className="card-img-top img"
          alt={alt_description}
        />
        <div className="card-body">
          <p>{created_at}</p>
          <p>Username: {user.username}</p>
          <p>likes: {likes}</p>
          <a href={links.download} target="_blank" className="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    </>
  );
}
