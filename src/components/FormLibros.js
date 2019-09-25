import React, { Component } from 'react';
import './Component.css';

class FormLibros extends Component {

    constructor(props) {
        super(props);
        this.state = {
            libro: {

         }
        }
        this.sendForm = this.sendForm.bind(this);

    }

    sendForm = (ev)=>{
        ev.preventDefault();
        
        fetch('http://localhost:8089/libros/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },

        body: JSON.stringify(this.state.libro)
    });
   
    }
    render() {
        return (
            
                <form className="card-body" onSubmit={this.sendForm}>

                    <input type="hidden" name="idlibro" value="0"/>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label for="titulo" className="frm" ><span className="input-group-text">Título:</span></label>
                        </div>
                        <input id="titulo" className="form-control text-right" onChange={(ev)=>{this.setState({libro: {...this.state.libro, titulo: ev.target.value}})}}/>
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label for="autor" className="frm"><span className="input-group-text">Autor:</span></label>
                        </div>
                        <input id="autor" name="autor" className="form-control text-right" onChange={(ev)=>{this.setState({libro: {...this.state.libro, autor: ev.target.value}})}}/>
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label for="edicion" className="frm" ><span className="input-group-text">Edición:</span></label>
                        </div>
                        <input id="edicion" className="form-control text-right" onChange={(ev)=>{this.setState({libro: {...this.state.libro, edicion: ev.target.value}})}} />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label for="numcopias" className="frm"><span className="input-group-text">Num. Copias:</span></label>
                        </div>
                        <input id="numcopias" className="form-control text-right" onChange={(ev)=>{this.setState({libro: {...this.state.libro, numcopias: ev.target.value}})}}/>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-outline-info btn-lg float-right" value="POST"/>

                    </div>


                </form>
          

        );
    }
}

export default FormLibros;