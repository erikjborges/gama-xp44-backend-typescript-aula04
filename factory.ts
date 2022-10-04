// class Logistica {

// }

interface Logistica {
    tempoEntrega(): number;
}

class Correio implements Logistica {
    public tempoEntrega(): number {
        return 7;
    }
}

class JadLog implements Logistica {
    public tempoEntrega(): number {
        return 3;
    }
}

abstract class LogisticaFactory {
    public abstract factoryMethod(): Logistica;

    public buscaTempo(): number  {
        const logistica = this.factoryMethod();

        return logistica.tempoEntrega();
    }
}

class CorreioFactory extends LogisticaFactory {
    public factoryMethod(): Logistica {
        return new Correio();
    }
}

class JadLogFactory extends LogisticaFactory {
    public factoryMethod(): Logistica {
        return new JadLog();
    }
}

function tempoDeEntregaCorreio(){
    const logistica = new CorreioFactory();
    console.log(`Correio: ${logistica.buscaTempo()}`);
}


function tempoDeEntregaJadLog(){
    const logistica = new JadLogFactory();
    console.log(`JadLog: ${logistica.buscaTempo()}`);
}


tempoDeEntregaCorreio();
tempoDeEntregaJadLog()