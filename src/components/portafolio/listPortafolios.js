import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portafolio from './portafolio'

class ListaPortafolios extends React.Component{

    render(){
        return(
            <div className="mt-4">
                <div className="col-12">
                        <p className="letra" style={{float:"left",paddingRight:"88px"}}><b>Conoce tu portafolio</b></p>
                        <span className="infoPorcentaje textRol" style={{float:"left"}}>Estrategia</span>
                </div>
                <Portafolio/>
            </div>
        )
    }

}

export default ListaPortafolios;