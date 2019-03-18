package br.com.alura.java.io.teste;

import java.io.*;

public class TesteEscritaPrintStream {

    public static void main(String[] args) throws IOException {

        long ini = System.currentTimeMillis();

//      PrintStream ps = new PrintStream(new File("lorem2.txt"));
        PrintWriter ps = new PrintWriter("lorem2.txt", "UTF-8");

        ps.println("Titulo: Output Teste #423");
        ps.println();
        ps.println();
        ps.println("teste teste teste teste teste");

        ps.close();

        long fim = System.currentTimeMillis();
        System.out.println("Passaram " + (fim - ini) + " milissegundos");

    }
}
