package br.com.fiesc.banco.teste;

import br.com.fiesc.banco.model.CalculadorDeImposto;
import br.com.fiesc.banco.model.ContaCorrente;
import br.com.fiesc.banco.model.ContaPoupanca;
import br.com.fiesc.banco.model.SeguroDeVida;

public class TesteContas {

    public static void main(String[] args) {

        ContaCorrente cc = new ContaCorrente(222,333);
        cc.deposita((100.0));

        SeguroDeVida seguro = new SeguroDeVida();
        CalculadorDeImposto calc = new CalculadorDeImposto();
        calc.registra(cc);
        calc.registra(seguro);

        System.out.println("TOTAL DE IMPOSTO: "+calc.getTotalImposto());
        /*ContaCorrente cc = new ContaCorrente(111,111);
        cc.deposita(100.0);

        ContaPoupanca cp = new ContaPoupanca(222, 222);
        cp.deposita(200.0);

        cc.transfere(10.0, cp);

        System.out.println("CC: "+ cc.getSaldo());
        System.out.println("CP: "+ cp.getSaldo());*/
    }

}
