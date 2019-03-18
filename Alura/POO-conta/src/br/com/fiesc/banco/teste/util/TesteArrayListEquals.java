package br.com.fiesc.banco.teste.util;

import java.util.ArrayList;
import java.util.List;

public class TesteArrayListEquals {

    public static void main(String[] args) {

        int[] idades = new int[5];
        String[] nomes = new String[5];

        int idade = 29; //Integer

        List numeros = new ArrayList();
        numeros.add(idade);

        Integer idadeRef = Integer.valueOf(idade);
        System.out.println(idadeRef.doubleValue());

        System.out.println(Integer.MAX_VALUE + "  " + Integer.MIN_VALUE);
        System.out.println("BITS: "+Integer.SIZE + " BYTES: " + Integer.BYTES);

        int numero = Integer.parseInt("23");
        System.out.println(numero);


        Number refNumero = Float.valueOf(29.9f);
        Boolean bref = Boolean.FALSE;
        boolean bool = bref.booleanValue();
    }
}
