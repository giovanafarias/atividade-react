import { Component } from "react";
import { USERSAPI } from "../../api/index.ts";
import "../../styles/style.css";
import { User } from "../../models/user.model.ts";

export default class Details extends Component {
  state = {
    user: null,
    load: true,
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const response = await fetch(USERSAPI + "/?results=1");
    const json = await response.json();

    this.setState({
      user: json.results[0],
      load: false,
    });
  }

  render() {
    if (this.state.load) {
      return <p>Carregando...</p>;
    }

    const user = this.state.user;

    if (!user) {
      return <p>Usuário não encontrado</p>;
    }

    return (
      <div className="details">
        <div className="details-header">
          <img
            className="details-image"
            src={user.picture.large}
            alt="user"
          />

          <h1>
            {user.name.title} {user.name.first} {user.name.last}
          </h1>

          <p>{user.dob.age} anos</p>
        </div>

        <div className="details-content">
          <div className="details-section">
            <h2>Contato</h2>

            <div className="details-row">
              <span className="details-label">Fixo:</span>
              <span>{user.phone}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Celular:</span>
              <span>{user.cell}</span>
            </div>
          </div>

          <hr className="details-divider" />

          <div className="details-section">
            <h2>Localização</h2>

            <div className="details-row">
              <span className="details-label">Cidade/UF:</span>
              <span>
                {user.location.city} - {user.location.state}
              </span>
            </div>

            <div className="details-row">
              <span className="details-label">Endereço:</span>
              <span>
                {user.location.street.number}{" "}
                {user.location.street.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}