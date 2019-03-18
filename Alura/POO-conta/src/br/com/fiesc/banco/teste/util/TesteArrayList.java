package br.com.fiesc.banco.teste.util;

import br.com.fiesc.banco.model.Conta;
import br.com.fiesc.banco.model.ContaCorrente;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class TesteArrayList {

    public static void main(String[] args) {

        //Generics
        ArrayList<Conta> lista = new ArrayList<Conta>();
        List<Conta> listaLink = new LinkedList<Conta>();


        Conta cc = new ContaCorrente(22, 11);
        lista.add(cc);

        Conta cc2 = new ContaCorrente(22, 22);
        lista.add(cc2);

        System.out.println("Tamanho: " + lista.size());

        Conta cc3 = new ContaCorrente(22, 22);
        lista.add(cc3);

        Conta cc4 = new ContaCorrente(33, 44);
        lista.add(cc4);

        for(Conta oRef : lista){
            System.out.println(oRef);
        }

        boolean existe = lista.contains(cc3);
        System.out.println("Já existe? " + ((existe) ? "Sim" : "Não") );

        for(Conta conta : lista){
            if(conta == cc){
                System.out.println("Já tenho essa referência!");
            }
        }

        //Conta ref = (Conta) lista.get(0);

        //System.out.println("Referência: "+ ref.getNumero());
        //lista.remove(0);
        //System.out.println("Tamanho: " + lista.size());

        /*for (int i = 0; i < lista.size(); i++) {
            //Object oRef = lista.get(i);
            System.out.println(lista.get(i));
        }*/


    }
}
