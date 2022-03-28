import axios from 'axios';

export class ContactService {
    static serverURL = `http://localhost:9000`;


    static getGroups(){
        let dataURL = `${this.serverURL}/grupos`;
        return axios.get(dataURL);
    }

    static getGroup(contacto){
        let grupoId = contacto.grupoId;
        let dataURL = `${this.serverURL}/grupos/${grupoId}`;
        return axios.get(dataURL);
    }

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contactos`;
        return axios.get(dataURL);
    }

    static getContact(contactoId){
        let dataURL = `${this.serverURL}/contactos/${contactoId}`;
        return axios.get(dataURL); 
    }

    static createContact(contacto){
        let dataURL = `${this.serverURL}/contactos`;
        return axios.post(dataURL, contacto);
    }

    static updateContact(contacto, contactoId){
        let dataURL = `${this.serverURL}/contactos/${contactoId}`;
        return axios.put(dataURL, contacto);
    }

    static deleteContact(contactoId){
        let dataURL = `${this.serverURL}/contactos/${contactoId}`;
        return axios.delete(dataURL);
    }

}