package br.com.fiesc.banco.io;

import br.com.fiesc.banco.model.Cliente;
import br.com.fiesc.banco.model.ContaCorrente;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class TesteSerializacao  {

    public static void main(String[] args) throws FileNotFoundException, IOException {

        Cliente cliente = new Cliente("John");
        cliente.setProfissao("Dev");
        cliente.setCpf("234113131");

        ContaCorrente cc = new ContaCorrente(222, 333);
        cc.setTitular(cliente);
        cc.deposita(222.3);

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("cc.bin"));
        oos.writeObject(cliente);
        oos.close();

    }
}