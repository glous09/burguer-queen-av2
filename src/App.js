import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Desayuno from "./components/Desayuno";
import Comida from "./components/Comida";
import Inicio from "./components/Inicio";

//import Title from "./components/Title";
//import Table from "./components/Table";
//import Order from "./components/Order";
import {Link, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(){
    super()
    this.state= {
      row: []
    }
  }

  componentWillMount(){
    //aqui talvez iria la data

class App extends React.Component {
   constructor(props){
     super( );
     //this.state= {data : event.target.dataset }

     //handleClick(event) {
    //  this.setState.bind(this.event.state)
 }

}  //console.log(event)
     //let objeto= {
      // dataName:dataname.target.innerText,
     //}
    // this.setState({dataset:value.concat(this.state.dataname) })
     //console.log(event.target.dataset.name);
     //console.log(event.target.dataset.precio);
}
  //}

  render () {
    return (
      <section>
        <div className="App-container">
          <div className="row App-borde">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
              <h1 className="App-logo">{data.nameRestaurant}</h1>
              <Link className="" to="/Inicio">
              Inicio
              </Link>
            </div>
          </div>
          <div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="App-background-titulo">
                    <h2 className="App-titulo">{data.Titles[0]}</h2>
                  </div>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" dataname={data.Desayuno[0].alimento}>{data.Desayuno[0].alimento}</th>
                          <td data-name={data.Desayuno[0].precio}>${data.Desayuno[0].precio}</td>
                          <td><button type="button" data-name={data.Desayuno[0].alimento} data-precio={data.Desayuno[0].precio} onClick={this.handleClick} className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row" data-name={data.Desayuno[1].alimento}>{data.Desayuno[1].alimento}</th>
                          <td data-name={data.Desayuno[1].precio}>${data.Desayuno[1].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Desayuno[2].alimento}</th>
                          <td>${data.Desayuno[2].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Desayuno[3].alimento}</th>
                          <td>{data.Desayuno[3].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                      </tbody>
                    </table>
              <div className="App-background-titulo">
                  <h2 className="App-titulo">{data.Titles[1]}</h2>
                </div>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Hamburguesa</th>
                          <th scope="col">Precio Sencilla</th>
                          <th scope="col">Precio Doble</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[0].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[1].proteina}</th>
                          <td>${data.Comida.Hamburguesas[1].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[2].proteina}</th>
                          <td>${data.Comida.Hamburguesas[2].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[2].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                       </tbody>
                    </table>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Ingrediente Extra</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Extras[0].alimento}</th>
                          <td>${data.Comida.Extras[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Extras[1].alimento}</th>
                          <td>${data.Comida.Extras[1].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Complementos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Complementos[0].alimento}</th>
                          <td>$ {data.Comida.Complementos[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Complementos[1].alimento}</th>
                          <td>$ {data.Comida.Complementos[1].precio}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Bebidas</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Bebidas[0].alimento}</th>
                          <td>$ {data.Comida.Bebidas[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Bebidas[1].alimento}</th>
                          <td>$ {data.Comida.Bebidas[1].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>
            </div>
             <div className="col-md-4 col-sm-4">
                <div className="App-background-titulo">
                  <h2 className="App-titulo">Pedido</h2>
                </div>
                  <div className="App-pedido">
                  <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="">Cliente 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="">Cliente 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="">Cliente 3</a>
                      </li>
                    </ul>
                </div>
                <div className="App-total">
                  <h4>TOTAL: $</h4>
                </div>
                <div>
                <button type="button" className="btn btn-danger">Generar Ticket</button>
              </div>
            </div>
          </div>
        </div>
        </div>
            <div className="col-md-5 ">
              <Link className="App-estilo" to="/Desayuno">
                Desayuno
              </Link>
            </div>
            <div className="col-md-5 ">
              <Link className="App-estilo" to="/Comida">
                Comida
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/Inicio" exact component={Inicio}></Route>
          <Route path="/Desayuno" exact component={Desayuno}></Route>
          <Route path="/Comida" exact component={Comida}></Route>

        </Switch>
      </section>
   );
  }
}
export default App;
