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
                    <p className="col-6 p-1 letra" style={{right: "4rem"}}><b>Hola,Sandra</b></p>
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