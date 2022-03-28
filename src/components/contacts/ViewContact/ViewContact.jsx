import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

let ViewContact = () => {

  let {contactoId} = useParams();

  let [state, setState] = useState({
    loading: false,
    contacto: {},
    errorMessage: '',
    grupo: {}
  });

  useEffect( async () =>{
    try{
      setState({...state, loading: true});
      let response = await ContactService.getContact(contactoId);
      let groupResponse = await ContactService.getGroup(response.data);
      setState({
        ...state,
        loading: false,
        contacto: response.data,
        grupo: groupResponse.data
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

    let {loading, contacto, errorMessage, grupo} = state;
    return (
        <React.Fragment>
            <section className='view-contact-intro p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">Ver contactos</p>
                            <p className="fst-italic fw-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magnam ea, tempora adipisci incidunt natus porro nam recusandae repudiandae deserunt quidem accusamus ipsa error pariatur architecto reprehenderit cumque veniam explicabo.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
              loading ? <Spinner/> : <React.Fragment>
                {
                  Object.keys(contacto).length > 0 && Object.keys(grupo).length > 0 && 
                  <section className='view-contact mt-3'>
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-md-4">
                              <img src={contacto.photo} className='contact-img' alt="" />
                          </div>
                          <div className="col-md-8">
                          <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                            Nombre: <span className="fw-bold">{contacto.name}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Teléfono: <span className="fw-bold">{contacto.phone}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Correo electrónico: <span className="fw-bold">{contacto.email}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Compañia: <span className="fw-bold">{contacto.company}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Título: <span className="fw-bold">{contacto.title}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Grupo: <span className="fw-bold">{grupo.name}</span>
                          </li>
                        </ul>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                              <Link to={'/contacts/list'} className="btn btn-warning">Regresar</Link>
                          </div>
                      </div>
                  </div>
              </section>
                }

              </React.Fragment>
            }
            </React.Fragment>
    )
};

export default ViewContact;