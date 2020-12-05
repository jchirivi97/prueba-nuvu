import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tip from './Tip';
const tips=[
    {
        nombre:"10 gastos que debes evitar",
        descripcion:"Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        img: "images/tip1.png"
    },
    {
        nombre:"10 gastos que debes evitar",
        descripcion:"Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        img: "images/tip2.png"
    },
    {
        nombre:"10 gastos que debes evitar",
        descripcion:"Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        img: "images/tip3.png"
    },

]



class ListaTips extends React.Component{

    render(){
        return(
            <div className="card p-4 m-5" style={{width:"327px",height:"370px",borderRadius:"20px"}}>
                {tips.map((e)=><Tip
                    titulo= {e.nombre}
                    descrip={e.descripcion}
                    image={e.img}                
                />
                )}
                      
            </div>
        )
    }
}

export default ListaTips;