import React from 'react';
import {Link} from 'react-router-dom'

let EditContact = () => {

    return (
        <React.Fragment>
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
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Nombre'/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Url imagen'/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Teléfono'/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Correo electrónico'/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Compañía - Empresa - Servicio'/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Título - Grado - Escolaridad'/>
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                    <option value="">Selecciona un grupo</option>
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
                        src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
                        alt=""
                        className="img-fluid contact-img"
                      />
                    </div>
                </div>
            </div>

        </section>
    </React.Fragment>
    )
};

export default EditContact;