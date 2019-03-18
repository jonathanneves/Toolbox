package br.com.fiesc.banco.teste;

import br.com.fiesc.banco.model.Cliente;
import br.com.fiesc.banco.model.Conta;
import br.com.fiesc.banco.model.ContaPoupanca;
import br.com.fiesc.banco.model.ContaCorrente;


public class TesteUtil {

    //Arrays []
    public static void main(String[] args) {

        //Conta[] contas = new Conta[5];
        Object[] contas = new Conta[5];

        ContaCorrente cc1 = new ContaCorrente(11, 11);
        contas[0] = cc1;

        ContaPoupanca cp1 = new ContaPoupanca(22,22);
        contas[1] = cp1;

        contas[2] = new ContaCorrente(22,22);

        Cliente cliente = new Cliente("Joao");
        contas[3] = cliente;

        ContaPoupanca ref = (ContaPoupanca) contas[1];  //type cast

        System.out.println(ref.getNumero());

        /*int[] idades = new int[5];

        for (int i = 0; i < idades.length; i++) {
            idades[i] = i * i;
            System.out.println(idades[i]);
        }*/

//        idades[0] = 29;
//        idades[1] = 39;
//        idades[2] = 45;
//        idades[3] = 51;
//        idades[4] = 69;
//
//        int idade4 = idades[3];
//
//        System.out.println(idade4);
//        System.out.println("Tamanho da array: " + idades.length);

    }
}
