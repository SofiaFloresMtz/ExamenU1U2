import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {     
            props.lista.length===0   
            ? <p>¡Carrito vacio!</p>
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
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.descripcion}</td>
                    <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.borrar(a,index)}variant="danger">Borrar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;