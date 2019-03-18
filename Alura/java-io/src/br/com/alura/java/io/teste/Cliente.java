package br.com.alura.java.io.teste;

import java.io.Serializable;

public class Cliente implements Serializable {

    private static final long serialVersionUID = 4L;  //1L != 9205117266306915548L

    private String nome;
    private String cpf;
    private String profissao;

    public String getNomeCpf(){
        return nome = ", "+cpf;
    }

//    @Override
//    public String toString() {
//        return "nome='" + nome + '\'' +
//                ", cpf='" + cpf + '\'' +
//                ", profissao='" + profissao + '\'';
//    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }


}
