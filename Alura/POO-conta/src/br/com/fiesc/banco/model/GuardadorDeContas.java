package br.com.fiesc.banco.model;

public class GuardadorDeContas {

    private Object[] referencias;
    private int posicaoLivre;

    public GuardadorDeContas(){
        this.referencias = new Object[10];
        this.posicaoLivre = 0;
    }

    public void adiciona(Conta ref){
        this.referencias[this.posicaoLivre] = ref;
        this.posicaoLivre++;
    }

    public int getQuantidadeDeElementos() {
        return this.posicaoLivre;
    }

    public Object getReferencia(int i) {
        return this.referencias[i];
    }
}
