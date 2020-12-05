import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Portafolio extends React.Component{

    render(){
        return(
            <div className="card flotante m-3" style={{borderRadius:"20px",width:"327px",height:"229px"}}>
                <div className="row p-1">
                    <div className="col-6" style={{top:"20px",left:"20px"}}>
                        <img src={'images/fondo.jpg'} style={{width:"120px",height:"120px"}}></img>
                    </div>
                    <div className="col-6">
                        <div className="mt-4">
                            <img  src={'images/logo.png'} style={{width:"85px"}}></img>
                            <span className="infoPorcentaje col-2">15%</span>
                            <p style={{fontSize:"12px",color:"#58506B"}}>FIC Old Mutual Efecto</p>
                        </div>
                        <label className="p-0"><b style={{fontSize:"12px",color:"#58506B"}}>$240.000</b></label>                            
                        <div className="m-0">
                            <p style={{color:"#58506B",fontSize:"10px"}}>
                                <b style={{color:"#41CF69",fontSize:"10px"}}>Tipo activo</b><br/>
                                Renta Fija<br/>
                                Deposito a la fija
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12">
                        <p style={{color:"#58506B",fontSize:"10px",textAlign:"justify"}}>
                            Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.
                        </p>
                </div>
            </div>
        )
    }
}

export default Portafolio;