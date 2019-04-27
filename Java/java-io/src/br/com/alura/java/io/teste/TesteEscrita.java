package br.com.alura.java.io.teste;

import java.io.*;

public class TesteEscrita {

    public static void main(String[] args) throws IOException {

        //Fluxo de Saída com Arquivo
        OutputStream fos = new FileOutputStream("lorem2.txt");
        Writer osw = new OutputStreamWriter(fos);
        BufferedWriter bw = new BufferedWriter(osw);

        bw.write("Titulo: Output Teste #423");
        bw.newLine();
        bw.newLine();
        bw.write("teste teste teste teste teste");

        bw.close();
    }
}
