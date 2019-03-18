package br.com.fiesc.banco.model;

public class SaldoInsuficienteExcepetion extends RuntimeException {

    public SaldoInsuficienteExcepetion(String msg){
        super(msg);
    }
}
