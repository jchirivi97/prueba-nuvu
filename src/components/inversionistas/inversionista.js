import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



class Inversionista extends React.Component{

    render(){
        return(
            <div className="card flotante m-3" style={{borderRadius:"20px",width:"327px",height:"312px"}}>
                <img src="images/thumb.png" className="inversor"></img>
                <img src="images/Vector.png" className="infoInversor"></img>
                <div className="p-2 txtInversor">
                    <h3>Esto es AHORRO</h3>
                    <p style={{fontSize:"12px"}}>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</p>
                </div>
            </div>
        )
    }

}

export default Inversionista;