import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from './meta';


var metas = [
    {
        data:{
            datasets:[
                {
                    backgroundColor: [
                        '#E4E4E4',
                        '#3482DB'                    
                    ],
                    data: [80,20]
                }            
            ]
        },
        name: "Viaje Islas Canarias",
        missing: "$8.000.000",
        saving: "$1.630.000",
        porcentaje: "20%",
        img: "/images/playa.png"
    },
    {
        data:{
            datasets:[
                {
                    backgroundColor: [
                        '#E4E4E4',
                        '#3482DB'                    
                    ],
                    data: [0,0]
                }            
            ]
        },
        name: "Macbook Pro",
        missing: "$7.000.000",
        saving: "$0",
        porcentaje: "0%",
        img: "/images/tecnologia.png"
    }

]

class ListaMetas extends React.Component{

    render(){
        return(
            <div className="mt-4">
                <div className="row">
                    <div className="col-6">
                        <p className=" p-1 letra" ><b>Tus metas</b></p>
                    </div>
                    <div className="col-6" align="right">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{color:"#026fec",fontWeight:"bold"}}>
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </div>                    
                </div>
                
                {metas.map((e)=> <Meta 
                    data={e.data} 
                    titulo={e.name}
                    valorMeta={e.missing}
                    valorSave={e.saving}
                    image= {e.img}
                    porcentaje={e.porcentaje}
                    
                />)}
            </div>
        )
    }

}

export default ListaMetas;