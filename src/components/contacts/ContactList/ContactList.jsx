import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";


let ContactList = () => {

  let [query, setQuery] = useState({
    text: ''
  });

  let [state, setState] = useState({
    loading: false,
    contactos: [],
    filtroContactos: [],
    errorMessage: ''
  });

  useEffect( async () => {
    try{
      setState({...state, loading: true});
      let response = await ContactService.getAllContacts();
      setState({
        ...state,
        loading: false,
        contactos: response.data,
        filtroContactos: response.data
    });
    }
    catch (error){
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      });
    }
  }, []);

  let clickDelete = async (contactoId) =>{
    
    try{
      let response = await ContactService.deleteContact(contactoId);
      if(response){
        setState({...state, loading: true});
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading: false,
          contactos: response.data,
          filtroContactos: response.data
        });
      }
    }catch(error){
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      });
    }
  };

  let searchContacts = (event) =>{
    setQuery({...query, text: event.target.value});
    let theContacts = state.contactos.filter(contacto => {
      return contacto.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setState({
      ...state,
      filtroContactos: theContacts
    });
  };  
  let {loading, contactos, filtroContactos,errorMessage} = state;

  return (
    <React.Fragment>
      <section>
        <pre>{query.text}</pre>
        <div className="contact-search p-3">
          <div className="container">
            <div className="grid">
              <div className="row">
                <p className="h3 fw-bold">
                  Contactos
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle"> </i> Agregar contacto
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, laboriosam fuga. Earum distinctio deleniti nam itaque
                  nulla ut quibusdam vel maiores suscipit! Iste distinctio
                  repellendus nisi qui libero hic molestias?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        name= "text"
                        value={query.text}
                        onChange={searchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Buscar contacto"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-info"
                        value="Buscar"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        loading ?  <Spinner/> : <React.Fragment>
          <section className="contact-list">
        <div className="container">
          <div className="row">
            {
              filtroContactos.length > 0 && 
                filtroContactos.map(contacto => {
                  return(
                    <div className="col-md-6" key={contacto.id}>
                    <div className="card my-2">
                      <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                          <div className="col-md-4">
                            <img
                              src={contacto.photo}
                              alt=""
                              className="img-fluid contact-img"
                            />
                          </div>
                          <div className="col-md-7">
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
                            </ul>
                          </div>
                          <div className="col-md-1 d-flex flex-column align-items-center">
                              <Link to={`/contacts/view/${contacto.id}`} className="btn btn-warning my-1">
                              <i className="fa fa-eye"></i>                        
                              </Link>
                              <Link to={`/contacts/edit/${contacto.id}`} className="btn btn-primary my-1">
                              <i className="fa fa-pen"></i>                        
                              </Link>
                              <button className="btn btn-danger my-1" onClick={() => clickDelete(contacto.id)}>
                                  <i className="fa fa-trash"></i>
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
            }
   
          </div>
        </div>
      </section>
          </React.Fragment>
      }

      
    </React.Fragment>
  );
};

export default ContactList;
