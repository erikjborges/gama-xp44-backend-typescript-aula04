
class DBConnect {

    private static _instance: DBConnect;

    private constructor(){
        console.log('Nova conexão com o MySQL aberta');
    }

    public static getInstance(): DBConnect {
        if(!DBConnect._instance){
            DBConnect._instance = new DBConnect();
        }

        return DBConnect._instance;
    }
}


class ClientDao {
    private _db: DBConnect;

    constructor(){
        this._db = DBConnect.getInstance();
    }
}

function cadastraUsuario(){
    let clientDao: ClientDao = new ClientDao;
        //...
}

function atualizaUsuario(){
    let clientDao: ClientDao = new ClientDao;
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