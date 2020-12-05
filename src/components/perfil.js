import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import Inversion from './inversion';

class Perfil extends React.Component{


    render(){
        return(
            <div>
                <div className="card fondoPerfil" style={{width:"327px",height:"230px",borderRadius:"20px"}}>
                    <div className="card-body col-12">
                        <div className="col-12">
                            <div className="mr-4" style={{float:"left"}}>
                                <p className="textWhite" ><b>Eres<br/>{this.props.tipo}</b></p>  
                            </div>
                            <div className="mt-4" style={{float:"left"}}>
                                <img src="/images/perfil.png" className="imagePerfil"></img>                  
                            </div>
                        </div>
                        <div className="col-8 m-3">
                            <p className="textWhite">Tu saldo</p>    
                            <h3 className="textWhite" >{this.props.saldo}</h3>
                        </div>                    
                    </div>
                </div>
                <Inversion  inversion="$ 1.600.000" rendimiento="-$ 30.000"></Inversion>
            </div>
        );
    }

}

export default Perfil;
