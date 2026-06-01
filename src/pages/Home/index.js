import { Component } from "react";
import { Card } from "../../components/Card";
import { USERSAPI } from "../../api/index.ts";
import "../../styles/style.css";
import { RandomUser } from "../../models/user.model.ts";

export default class Home extends Component {
  state = {
    users: [],
    load: true,
    error: null,
  };

  componentDidMount() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      const apiResponse = await fetch(`${USERSAPI}?results=10`);

      if (!apiResponse.ok) {
        throw new Error("ERRO - response!!");
      }

      const json = await apiResponse.json();

      this.setState({
        users: json.results,
      });

      console.log(json.results);
    } catch (e) {
      this.setState({
        error: "Não foi possível carregar os usuários!",
      });

      console.log(e);
    } finally {
      this.setState({
        load: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.load ? (
          <p>Carregando...</p>
        ) : this.state.error ? (
          <p>Erro: {this.state.error}</p>
        ) : (
          <div className="card-box">
            {this.state.users.map((item) => (
                <Card
                  key={item.email}
                  item={item}
                />
            ))}
          </div>
        )}
      </div>
    );
  }
}