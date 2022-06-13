package br.com.alura.loja;

import br.com.alura.loja.http.JavaHttpClient;
import br.com.alura.loja.imposto.CalculadoraDeImpostos;
import br.com.alura.loja.imposto.ICMS;
import br.com.alura.loja.imposto.INSS;
import br.com.alura.loja.orcamento.ItemOrcamento;
import br.com.alura.loja.orcamento.Orcamento;
import br.com.alura.loja.orcamento.OrcamentoProxy;
import br.com.alura.loja.orcamento.RegistroDeOrcamento;
import br.com.alura.loja.pedido.GeraPedido;
import br.com.alura.loja.pedido.GeraPedidoHandler;
import br.com.alura.loja.pedido.acao.EnviarEmailPedido;
import br.com.alura.loja.pedido.acao.SalvarPedido;

import java.math.BigDecimal;
import java.util.Arrays;

public class ApplicationAula2 {

    public static void main(String[] args) {

        /*AULA 1 - Adapter*/
        Orcamento orcamento = new Orcamento();
        orcamento.adicionarItem(new ItemOrcamento(BigDecimal.TEN));
        orcamento.aprovar();
        orcamento.finalizar();

        RegistroDeOrcamento registro = new RegistroDeOrcamento(new JavaHttpClient()); //Qual adapter vou usar que implementa HttpAdapter

        //registro.registar(orcamento);

        /* AULA 2 - DECORATOR */
        Orcamento segundoOrcamento = new Orcamento();
        segundoOrcamento.adicionarItem(new ItemOrcamento(new BigDecimal("100")));
        segundoOrcamento.aprovar();

        CalculadoraDeImpostos calculadora = new CalculadoraDeImpostos();
        System.out.println(calculadora.calcular(segundoOrcamento, new INSS(new ICMS(null))));

        /* AULA 3 - Composite */
        Orcamento antigo = new Orcamento();
        antigo.adicionarItem(new ItemOrcamento(new BigDecimal("200")));
        antigo.reprovar();

        Orcamento novo = new Orcamento();
        novo.adicionarItem(new ItemOrcamento(new BigDecimal("500")));
        novo.adicionarItem(antigo);

        /* Aula 5 - Proxy */
        OrcamentoProxy proxy = new OrcamentoProxy(novo);

        System.out.println(proxy.getValor());
        System.out.println(proxy.getValor());
        System.out.println(proxy.getValor());
        System.out.println(proxy.getValor());
        System.out.println(proxy.getValor());
        System.out.println(proxy.getValor());

    }
}
