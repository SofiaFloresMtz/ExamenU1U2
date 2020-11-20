import React,{Component} from 'react';

import logo from '../logoEscuela.PNG'

class Header extends Component{
    render(){
        return(
            <div>
                <img src={logo} alt="logo" />
                <h2>Examen U1 y U2</h2>
            </div>
        );
    }
}

export default Header;