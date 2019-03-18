package br.com.fiesc.banco.teste;

import br.com.fiesc.banco.model.ContaCorrente;
import br.com.fiesc.banco.model.ContaPoupanca;

public class TesteObject {

    public static void main(String[] args) {

       // System.out.println("X");
       // System.out.println(3);
       // System.out.println(false);

        Object cc = new ContaCorrente(11,22);
        Object cp = new ContaPoupanca(22, 33);

        System.out.println(cc);
        System.out.println(cp);

        //println(cp);
    }

    static void println(Object referencia){

    }
}
