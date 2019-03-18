package br.com.fiesc.banco.teste.util;

import br.com.fiesc.banco.model.Cliente;
import br.com.fiesc.banco.model.Conta;
import br.com.fiesc.banco.model.ContaCorrente;
import br.com.fiesc.banco.model.ContaPoupanca;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class TesteOrdenacao {

    public static void main(String[] args) {

        Conta cc1 = new ContaCorrente(22, 33);
        Cliente clienteCC1 = new Cliente("Nico");
        cc1.setTitular(clienteCC1);
        cc1.deposita(333.0);

        Conta cc2 = new ContaPoupanca(22, 44);
        Cliente clienteCC2 = new Cliente("Guilherme");
        cc2.setTitular(clienteCC2);
        cc2.deposita(444.0);

        Conta cc3 = new ContaCorrente(22, 11);
        Cliente clienteCC3 = new Cliente("Paulo");
        cc3.setTitular(clienteCC3);
        cc3.deposita(111.0);

        Conta cc4 = new ContaPoupanca(22, 22);
        Cliente clienteCC4 = new Cliente("Ana");
        cc4.setTitular(clienteCC4);
        cc4.deposita(222.0);

        List<Conta> lista = new ArrayList<>();
        lista.add(cc1);
        lista.add(cc2);
        lista.add(cc3);
        lista.add(cc4);

        for (Conta conta : lista) {
            System.out.println(conta);
        }

        //Ordenando lista baseado no número ou Titularda conta
        NumeroDaContaComparator comparator = new NumeroDaContaComparator();
        //TitularDaContaComparator titularComparator = new TitularDaContaComparator();
        //lista.sort(new TitularDaContaComparator());
        lista.sort(null); //Ordem Natural

        Collections.sort(lista);  //Ordenar por saldo, metodo na Classe Compare To

        System.out.println("----------------");

        for (Conta conta : lista) {
            System.out.println(conta + ", " + conta.getTitular().getNome());
        }
    }
}

class TitularDaContaComparator implements Comparator<Conta>{

    @Override
    public int compare(Conta c1, Conta c2) {
        String nomeC1 = c1.getTitular().getNome();
        String nomeC2 = c2.getTitular().getNome();

        return nomeC1.compareTo(nomeC2);
    }
}

class NumeroDaContaComparator implements Comparator<Conta>{

    @Override
    public int compare(Conta c1, Conta c2) {

        return Integer.compare(c1.getNumero(), c2.getNumero());

//        return c1.getNumero() - c2.getNumero();

//        if(c1.getNumero() < c2.getNumero())
//            return -1;
//
//        if(c1.getNumero() > c2.getNumero())
//            return 1;
//
//        return 0;
    }
}