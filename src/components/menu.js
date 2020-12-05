import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class Menu extends React.Component{

    render(){
        return(
            <div className="card menu mt-4" style={{borderRadius:"20px"}}>
                <ul className="nav">
                    <li className="nav-item p-1">
                        <a className="nav-link active" href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door svgActive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            </svg>  
                            <p style={{color:"#026fec"}}>Inicio</p>  
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list-ul svgInactive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                            <p>Historial</p>
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" style={{marginTop:"-2.5rem"}} href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill svgAhorro" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>  
                            <p style={{marginTop:"10px"}}>Ahorrar</p>  
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle svgInactive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                           <p>Mi perfil</p> 
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots svgInactive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                            <p>Más</p>
                        </a>
                    </li>
                </ul>
            </div>            
        )
    }
}
export default Menu;