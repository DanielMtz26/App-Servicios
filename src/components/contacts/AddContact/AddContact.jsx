import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';

let AddContact = () => {

    let navigate = useNavigate();

    let [state, setState] = useState({
        loading: false,
        contacto:{
            name: '',
            photo: '',
            phone: '',
            email: '',
            company: '',
            title: '',
            grupoId: ''
        },
        grupos: [],
        errorMessage: ''
    });

    let updateInput = (event) => {
        setState({
            ...state,
            contacto: {
                ...state.contacto,
                [event.target.name] : event.target.value
            }
        });
    };

    useEffect(async()=>{
        try{
            setState({...state, loading: true});
            let response = await ContactService.getGroups();
            setState({
                ...state,
                loading:false,
                grupos: response.data
            })
        }catch(error){

        }
    }, []) ;

    let submitForm = async (event) => {
        event.preventDefault();
        try{
            let response = await ContactService.createContact(state.contacto);
            if(response){
                navigate('/contacts/list',{replace: true});

            }
        }catch(error){
            setState({...state, errorMessage: error.message});
            navigate('contacts/add', {replace: true});
        }
    }

    let {loading, contacto, grupos, errorMessage} = state;
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-sucess fw-bold">
                                Agregar proveedor / Contacto
                            </p>
                            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore, recusandae explicabo illum ab inventore nostrum tempora, culpa optio impedit dolore ipsam ut, eligendi ad non in quod vel perferendis?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                        required={true}
                                        name="name" 
                                        value={contacto.name} 
                                        onChange={updateInput} 
                                        type="text" className="form-control" placeholder='Nombre'/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name="photo" 
                                        value={contacto.photo} 
                                        onChange={updateInput} 
                                    type="text" className="form-control" placeholder='Url imagen'/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name="phone" 
                                        value={contacto.phone} 
                                        onChange={updateInput} 
                                    type="text" className="form-control" placeholder='Tel??fono'/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true}
                                        name="email" 
                                        value={contacto.email} 
                                        onChange={updateInput} 
                                    type="text" className="form-control" placeholder='Correo electr??nico'/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true}
                                        name="company" 
                                        value={contacto.company} 
                                        onChange={updateInput} 
                                    type="text" className="form-control" placeholder='Compa????a - Empresa - Servicio'/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true}
                                        name="title" 
                                        value={contacto.title} 
                                        onChange={updateInput} 
                                    type="text" className="form-control" placeholder='T??tulo - Grado - Escolaridad'/>
                                </div>
                                <div className="mb-2">
                                    <select
                                        required={true}
                                        name="grupoId" 
                                        value={contacto.grupoId} 
                                        onChange={updateInput} 
                                        className="form-control">
                                        <option value="">Selecciona un grupo</option>
                                        {
                                            grupos.length > 0 &&
                                                grupos.map(grupo =>{
                                                    return(
                                                        <option key={grupo.id} value={grupo.id}>{grupo.name}</option>
                                                    )
                                                })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" value="Registrar" className='btn btn-success' />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cerrar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
};

export default AddContact;