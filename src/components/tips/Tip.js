import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Tip extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-8">
                        <p className="txtTitulo">{this.props.titulo}</p>
                        <p className="txtDescrip">{this.props.descrip}</p>
                    </div>
                    <div className="col-4">
                        <img src={this.props.image} style={{width:"68px",height:"68px"}}></img>
                    </div>         
                </div>
                <hr style={{border:" 1px solid #FAF9FD"}}/>
            </div>
        )
    }
}

export default Tip;