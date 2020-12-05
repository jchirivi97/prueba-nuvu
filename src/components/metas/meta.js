import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2';

class Meta extends React.Component{
    state={
        data: this.props.data
    }

    render(){
        return(
            <div className="card flotante m-3" style={{borderRadius:"20px",width:"158px",height:"202px"}}>
                <div className="card-body p-2">
                    <img src={this.props.image} className="iconMeta"></img>
                    <p className="textMeta">{this.props.titulo}</p>
                    <div className="row justify-content-center ">
                        <div className="col-6">
                            <Doughnut
                                data={this.state.data}
                                width={80}
                                height={80}
                                />
                            <p className="textValue">{this.props.porcentaje}</p>
                        </div> 
                        
                        <div className="col-6" style={{top:"1rem"}}>
                            <p className="textSaving p-0"><b>{this.props.valorSave}</b></p>
                            <p className="textmissing mt-1">{this.props.valorMeta}</p>
                        </div>
                    </div>      
                </div>                              
            </div>
        )
    }
}

export default Meta;