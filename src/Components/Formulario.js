import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Formulario (props){
    
    return ( 
        <div className="List">
        {        
            props.ProductosLista.length===0   
            ? <p>No hay productos</p>
            : 
        
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
              <tbody>
            {
              props.ProductosLista.map((a,index)=>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.descripcion}</td>
                    <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.agregarCarrito(a)}variant="success">Agregar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }
          <h4>Total a pagar<br></br>${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h4>

          </div>
     );
}
 
export default Formulario;