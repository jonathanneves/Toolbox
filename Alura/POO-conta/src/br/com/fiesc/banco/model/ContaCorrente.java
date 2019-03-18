package br.com.fiesc.banco.model;

public class ContaCorrente extends Conta implements Tributavel {

    public ContaCorrente(int agencia, int numero) {
        super(agencia, numero);
    }

    @Override
    public void deposita(double valor) {
        super.saldo += valor;
    }

    @Override
    public void saque(double valor) throws SaldoInsuficienteExcepetion{
        double valorASacar = valor + 0.2;
        super.saque(valorASacar);
    }

    @Override
    public double getValorImposto() {
        return super.saldo * 0.01;
    }

    @Override
    public String toString() {
        return "ContaCorrente - " +  super.toString();
    }
}
