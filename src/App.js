import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ListaLibros'
import FormLibros from './components/FormLibros'

class App extends Component {

  constructor() {
    super();
    this.state = { libros: [] }

  }
  componentWillMount() {
    fetch('http://localhost:8089/libros/').then((response) => {
      return response.json()
    })
      .then((listaLibros) => {
        this.setState({ libros: listaLibros })
      })
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center text-white"> Libros </h1>
          <br></br>
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-dark">
                <div className="card-header text-white">
                  <h3>Formulario</h3>
                </div>
                  <FormLibros/>
              </div>

            </div>
            <div className="col-md-8">
              <table className="table table-dark table-sm table-striped">
                <thead>
                  <tr>
                    <td>IdLibro</td>
                    <td>Titulo</td>
                    <td>Autor</td>
                    <td>Edicion</td>
                    <td>Copias</td>
                  </tr>
                </thead>
                <ListaLibros datos={this.state.libros} />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
