import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './perfil';
import Lista from './metas/listMetas';
import ListaPortafolios from './portafolio/listPortafolios';
import ListaInversionistas from './inversionistas/listInversionista';
import ListaTips from './tips/listTips';
import Menu from './menu';

class Home extends React.Component{
    
    render(){
        return(
            <div className="fondoColor row justify-content-center">
                <div className="card container-fluid cardHome p-4 center" style={{width:"30rem"}}>
                    <div className="col-12 row m-3">
                        <div className="col-6">
                            <p className="p-1 letra" style={{right: "4rem"}}><b>Hola,Sandra</b> </p>
                        </div>
                        <div className="col-6" align="right">
                            <svg  width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{color:"#026fec",fontWeight:"bold"}}>
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                                <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </div>

                    </div>
                    
                    
                    <Perfil tipo="estratega" saldo="$ 1'570.000"></Perfil>
                    <Lista></Lista>
                    <ListaPortafolios></ListaPortafolios>
                    <ListaInversionistas></ListaInversionistas>
                    <ListaTips></ListaTips>
                    <Menu></Menu>
                </div>
            </div>             
        );
    }
}

export default Home;