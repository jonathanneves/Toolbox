package br.com.fiesc.banco.teste;

import br.com.fiesc.banco.model.Conta;
import br.com.fiesc.banco.model.ContaCorrente;
import br.com.fiesc.banco.model.SaldoInsuficienteExcepetion;

public class TesteSaca {

    public static void main(String[] args) {
        Conta conta = new ContaCorrente(123, 321);
        conta.deposita(200.0);
        try {
            conta.saque(220.0);
        } catch (SaldoInsuficienteExcepetion ex){
            System.out.println("Exceção: " + ex.getMessage());
        }
        System.out.println(conta.getSaldo());

    }
}
