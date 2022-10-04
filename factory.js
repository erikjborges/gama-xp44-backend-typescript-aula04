"use strict";
// class Logistica {
class Correio {
    tempoEntrega() {
        return 7;
    }
}
class JadLog {
    tempoEntrega() {
        return 3;
    }
}
class LogisticaFactory {
    buscaTempo() {
        const logistica = this.factoryMethod();
        return logistica.tempoEntrega();
    }
}
class CorreioFactory extends LogisticaFactory {
    factoryMethod() {
        return new Correio();
    }
}
class JadLogFactory extends LogisticaFactory {
    factoryMethod() {
        return new JadLog();
    }
}
function tempoDeEntregaCorreio() {
    const logistica = new CorreioFactory();
    console.log(`Correio: ${logistica.buscaTempo()}`);
}
function tempoDeEntregaJadLog() {
    const logistica = new JadLogFactory();
    console.log(`JadLog: ${logistica.buscaTempo()}`);
}
tempoDeEntregaCorreio();
tempoDeEntregaJadLog();
