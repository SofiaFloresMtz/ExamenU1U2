import './App.css';
import React, { Component } from 'react';
//import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:2304,descripcion:"Huawei Matebook D 15", precio:15800},
        {codigo:3104,descripcion:"Samsung Galaxy S10", precio:13900},
        {codigo:1408,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:2210,descripcion:"Xiaomi Redmi Note 9s", precio:5945},
        {codigo:2301,descripcion:"Mochila Xiaomi", precio:800},
        {codigo:2211,descripcion:"Teclado Primus Gaming Ballista", precio:2000},
      ],
    };
  }

  agregarCarrito=(e)=>{
    this.setState({
      carrito:[...this.state.carrito,e],
      total:this.state.total+e.precio
    })  
  }

  borrar=(a,index)=>{
    const temporal = this.state.carrito.filter((a,i)=>i!==index)

    this.setState({
     carrito:temporal,
     total:this.state.total-a.precio
   })
 }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <div className="Products">
            <h1>Productos disponibles</h1>
            <Formulario
              ProductosLista={this.state.productosLista}
              agregarCarrito={this.agregarCarrito}
              total={this.state.total}
            />
          </div>
          
          <div className="List">
            <h1>Carrito</h1>
            <Listado 
              lista={this.state.carrito}
              borrar={this.borrar}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;