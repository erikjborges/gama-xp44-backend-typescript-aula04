"use strict";
class DBConnect {
    constructor() {
        console.log('Nova conexão com o MySQL aberta');
    }
    static getInstance() {
        if (!DBConnect._instance) {
            DBConnect._instance = new DBConnect();
        }
        return DBConnect._instance;
    }
}
class ClientDao {
    constructor() {
        this._db = DBConnect.getInstance();
    }
}
function cadastraUsuario() {
    let clientDao = new ClientDao;
    //...
}
function atualizaUsuario() {
    let clientDao = new ClientDao;
    //...
}
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
