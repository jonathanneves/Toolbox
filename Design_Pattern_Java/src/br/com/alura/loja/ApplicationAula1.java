package br.com.alura.loja;

import br.com.alura.loja.orcamento.ItemOrcamento;
import br.com.alura.loja.orcamento.Orcamento;
import br.com.alura.loja.pedido.GeraPedido;
import br.com.alura.loja.pedido.GeraPedidoHandler;
import br.com.alura.loja.pedido.Pedido;
import br.com.alura.loja.pedido.acao.EnviarEmailPedido;
import br.com.alura.loja.pedido.acao.LogDePedido;
import br.com.alura.loja.pedido.acao.SalvarPedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;

public class ApplicationAula1 {

    public static void main(String[] args) {

        Orcamento primeiro = new Orcamento();
        primeiro.adicionarItem(new ItemOrcamento(new BigDecimal("200")));

        Orcamento segundo = new Orcamento();
        segundo.adicionarItem(new ItemOrcamento(new BigDecimal("1000")));

        /* Aula 1 - Strategy
        CalculadoraDeImpostos calculadora = new CalculadoraDeImpostos();
        System.out.println("Imposto R$ "+calculadora.calcular(orcamento, new INSS()));
        SyEstem.out.println("Imposto R$ "+calculadora.calcular(orcamento, new ICMS()));
        */
        /* Aula 2 e 3 - Chain of Responsibilty and Template Method
        CalculadoraDeDescontos calculadora = new CalculadoraDeDescontos();
        System.out.println("Desconto R$: "+calculadora.calcular(primeiro));
        System.out.println("Desconto R$: "+calculadora.calcular(segundo));
         */

        /* Aula 5 - Command Handler */
        GeraPedido gerador = new GeraPedido("Maria", BigDecimal.TEN, 2);

        GeraPedidoHandler handler = new GeraPedidoHandler(Arrays.asList(
                new SalvarPedido(),
                new EnviarEmailPedido(),
                new LogDePedido()
                ));
        handler.execute(gerador);

    }
}
