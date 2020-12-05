import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inversionista from './inversionista';



class ListaInversionista extends React.Component{
    render(){
        return(
            <div className="mt-4">
                <p className=" p-1 letra" ><b>Los P*t@s del ahorro</b></p>
                <Inversionista></Inversionista>
                <ul className="mt-1">
                    <li style={{float:"left"}}><div className="circle"></div></li>
                    <li style={{float:"left"}}><div className="circleInact"></div></li>
                    <li style={{float:"left"}}><div className="circleInact"></div></li>
                </ul>
            </div>
        )
    }
}

export default ListaInversionista;