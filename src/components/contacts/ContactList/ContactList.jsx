import React from "react";
import { Link } from "react-router-dom";

let ContactList = () => {
  return (
    <React.Fragment>
      <section>
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
                        type="text"
                        className="form-control"
                        placeholder="Buscar contacto"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="sumbit"
                        className="btn btn-outline-dark"
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

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
                        alt=""
                        className="img-fluid contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Nombre: <span className="fw-bold"> Ernesto Menchaca </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Teléfono: <span className="fw-bold"> +52 123 456 7890 </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Correo electrónico: <span className="fw-bold"> correo@correo.com </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                        <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
                        <i className="fa fa-eye"></i>                        
                        </Link>
                        <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
                        <i className="fa fa-pen"></i>                        
                        </Link>
                        <button className="btn btn-danger my-1">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
