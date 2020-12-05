import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Inversion extends React.Component{
    render(){
        return(
            <div className="card mt-3" style={{borderRadius:"20px"}}>
                <div className="card-body">
                    
                    <div className="row">
                        <div className="col-6">
                            Inversión
                        </div>
                        <div className="col-6" align="right">
                            {this.props.inversion}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Rendimiento
                        </div>
                        <div className="col-6" align="right">
                            {this.props.rendimiento}
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Inversion;