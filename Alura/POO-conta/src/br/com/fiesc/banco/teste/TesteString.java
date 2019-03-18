package br.com.fiesc.banco.teste;

public class TesteString {

    public static void main(String[] args) {

        String nome = "Alura";
        String vazio = "  ";
        String outroVazio = vazio.trim();   //Tirar o espaço no fim e inicio de uma string
        System.out.println("Está vazio?: "+outroVazio.isEmpty());

        System.out.println("Contains: "+nome.contains("Alu"));

//        String outra = nome.replace("A", "X"); //Trocar letras
//        nome = nome.toLowerCase(); //minúsculo
//
//        System.out.println("LowerCase: "+ nome);
//        System.out.println("Replace: "+ outra);

        char c = nome.charAt(2); //Mostra a letra na posição 3 (2+1)
        System.out.println("CharAt: "+ c);

        int pos = nome.indexOf("ur");   //Mostra a posição da letra
        System.out.println("indexOf: "+ pos);

        String sub = nome.substring(1);  //qual posiçao a string deve começar
        System.out.println("Substring: "+ sub);

        System.out.println("Length: "+ nome.length());

        for (int i = 0; i < nome.length(); i++) {
            System.out.println(nome.charAt(i));
        }
    }
}
