export function Card({ item }) {
  return (
    <div className="card">
      <div className="card-photo">
        <img
          className="image"
          src={item.picture.large}
          alt="user"
        />
      </div>

      <div className="card-item name">
        <p>
          {item.name.title}.{" "}
          {item.name.last.toUpperCase()}{" "}
          {item.name.first}
        </p>
      </div>

      <div className="card-item mail">
        <p>{item.dob.age} anos</p>
      </div>

      <div className="card-item">
        <p>
          {item.location.state}
          ({item.location.country})
        </p>
      </div>

      <div className="card-item">
        <p>
          {item.location.street.name},
          {" "}
          {item.location.street.number}
        </p>
      </div>
    </div>
  );
}