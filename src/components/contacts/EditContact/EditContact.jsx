import React, { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';


let EditContact = () => {

    let navigate = useNavigate();
    let {contactoId} = useParams();

    let [state, setState] = useState({
      loading: false,
      contacto: {
          name: '',
          id: '',
          title: '',
          company: '',
          phone: '',
          photo: '',
          email: '',
          grupoId: ''
      },
      errorMessage: '',
      grupos: {}
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
  
    useEffect( async () =>{
      try{
        setState({...state, loading: true});
        let response = await ContactService.getContact(contactoId);
        let groupResponse = await ContactService.getGroups();
        setState({
          ...state,
          loading: false,
          contacto: response.data,
          grupos: groupResponse.data
        });
      }
      catch(error){
        setState({
          ...state,
          loading: false,
          errorMessage: error.errorMessage
        });
      }
    }, [contactoId]);
  
    let submitForm = async (event) => {
        event.preventDefault();
        try{
            let response = await ContactService.updateContact(state.contacto, contactoId);
            if(response){
                navigate('/',{replace: true});

            }
        }catch(error){
            setState({...state, errorMessage: error.message});
            navigate(`contacts/edit/${contactoId}`, {replace: true});
        }
    }

      let {loading, contacto, errorMessage, grupo, grupos} = state;

    return (
        <React.Fragment>
            {
        loading? <Spinner/> : <React.Fragment>
            <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Editar proveedor / Contacto
                        </p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore, recusandae explicabo illum ab inventore nostrum tempora, culpa optio impedit dolore ipsam ut, eligendi ad non in quod vel perferendis?</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <input 
                                required= {true}
                                name= "name"
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
                                type="text" className="form-control" placeholder='Teléfono'/>
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true}
                                name="email"
                                value={contacto.email}
                                onChange={updateInput}type="text" className="form-control" placeholder='Correo electrónico'/>
                            </div>
                            <div className="mb-2">
                                <input             
                                required={true}
                                name="company"
                                value={contacto.company}
                                onChange={updateInput} type="text" className="form-control" placeholder='Compañía'/>
                            </div>
                            <div className="mb-2">
                                <input              
                                required={true}
                                name="title"
                                value={contacto.title}
                                onChange={updateInput}type="text" className="form-control" placeholder='Título - Grado - Escolaridad'/>
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
                                                grupos.map(grupo => {
                                                    return(
                                                        <option key={grupo.id} value={grupo.id}>{grupo.name}</option>
                                                    )
                                                })
                                        }
                                    </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" value="Actualizar datos" className='btn btn-primary' />
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cerrar</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                        alt=""
                        className="img-fluid contact-img"
                      />
                    </div>
                </div>
            </div>

        </section>
            </React.Fragment>
            }

        
    </React.Fragment>
    )
};

export default EditContact;