import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

class Curso {
    private String nome;
    private int alunos;

    public Curso(String nome, int alunos) {
        this.nome = nome;
        this.alunos = alunos;
    }

    public String getNome() {
        return nome;
    }

    public int getAlunos() {
        return alunos;
    }
}

public class ExemploCursos {

    public static void main(String[] args) {

        List<Curso> cursos = new ArrayList<Curso>();
        cursos.add(new Curso("Python", 45));
        cursos.add(new Curso("JavaScript", 150));
        cursos.add(new Curso("Java 8", 113));
        cursos.add(new Curso("C", 55));

        cursos.sort(Comparator.comparing(Curso::getAlunos));
//        cursos.forEach(c -> System.out.println(c.getNome()));
//        cursos.stream().filter(c -> c.getAlunos() >= 100).forEach(c -> System.out.println(c.getNome()));
        cursos.stream().filter(c -> c.getAlunos() >= 100)
                .map(Curso::getAlunos)
                .forEach(System.out::println);

        int sum = cursos.stream().filter(c -> c.getAlunos() >= 100)
                .mapToInt(Curso::getAlunos)
                .sum();     //.avarage();

        System.out.println(sum);

        //Optional evita if(curso != null), significa pode ser que objeto exista ou não exista
        //Optional<Curso> optionalCurso = cursos.stream()
        cursos.stream()
                .filter(c -> c.getAlunos() >= 100)
                .findAny()
                .ifPresent(c -> System.out.println(c.getNome()));
        //Curso curso = optionalCurso.orElse(null);
        //System.out.println(curso.getNome());

        System.out.println("-------------------------");
//        cursos = cursos.stream()
//                .filter(c -> c.getAlunos() >= 100)
//                .collect(Collectors.toList());      //adiciona o filtro para uma lista 'cursos'

//        cursos.stream()
//                .forEach(c -> System.out.println(c.getNome()));

//        Map<String, Integer> map =
//        cursos.parallelStream()   Ùtil quando se trabalha com milhões de Dados, garantindo desempenho do processador
        cursos.stream()
                .filter(c -> c.getAlunos() >= 100)
                .collect(Collectors.toMap(c -> c.getNome(),
                        c -> c.getAlunos()))
                .forEach((nome, alunos) -> System.out.println(nome + " tem " + alunos + "alunos"));

    }
}

