package br.com.fiesc.banco.model;


import java.io.Serializable;

public abstract class Conta extends Object implements Comparable<Conta>, Serializable {

    protected double saldo;
    private int agencia;
    private int numero;
    private transient Cliente Titular;

    private static int total;

    public Conta(int agencia, int numero) {
        total++;
        //System.out.println("O total de contas é "+ total);
        this.agencia = agencia;
        this.numero = numero;
        //System.out.println("Estou criando uma nova conta "+this.numero);
    }

    public abstract void deposita(double valor);

    public void saque(double saque) throws SaldoInsuficienteExcepetion {
        if(this.saldo < saque) {
            throw new SaldoInsuficienteExcepetion("Saldo: "+ this.saldo + ", Saque: " + saque);
        }
            this.saldo -= saque;
    }

    public void transfere(double valor, Conta destino) throws SaldoInsuficienteExcepetion {
        this.saque(valor);
        destino.deposita(valor);
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        if(agencia >= 0)
            this.agencia = agencia;
        else
            System.out.println("Número da agência negativo");
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        if(numero >= 0)
            this.numero = numero;
        else
            System.out.println("Número da agência negativo");
    }

    public Cliente getTitular() {
        return Titular;
    }

    public void setTitular(Cliente titular) {
        Titular = titular;
    }

    @Override
    public boolean equals(Object ref){

        Conta outra = (Conta) ref;

        if(this.agencia != outra.agencia || this.numero != outra.numero){
            return false;
        }
        return true;
    }

    @Override
    public int compareTo(Conta outra) {
        return Double.compare(this.saldo, outra.saldo);
    }

    @Override
    public String toString() {
        return "Numero: " +  this.numero+ ", Agencia: "+ this.agencia+ ", Saldo: "+this.saldo;
    }
}
