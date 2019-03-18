import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;

public class OrdenaStrings {

    public static void main(String[] args) {

        List<String> palavras = new ArrayList<String>();
        palavras.add("Unity");
        palavras.add("Bob Esponja");
        palavras.add("Pewdiepie");

        Collections.sort(palavras);

//        palavras.sort((s1, s2) -> {
//                if(s1.length() < s2.length())
//                    return -1;
//                if(s1.length() > s2.length())
//                    return 1;
//                return 0;
//        });

        //palavras.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));
        //palavras.sort(Comparator.comparing(s -> s.length()));
        palavras.sort(Comparator.comparing(String::length));
        System.out.println(palavras);

        //Consumer<String> consumidor = new ImprimeNaLinha();
        //palavras.forEach((String s) -> { System.out.println(s); });

        //palavras.forEach(s -> System.out.println(s));
        palavras.forEach(System.out::println);
    }
}

//METODOS OBSULETOS

//class ImprimeNaLinha implements Consumer<String>{
//
//    @Override
//    public void accept(String s) {
//        System.out.println(s);
//    }
//}

//class ComparadorDeStringPorTamanho implements Comparator<String> {
//
//    public int compare(String s1, String s2) {
//        if(s1.length() < s2.length())
//            return -1;
//        if(s1.length() > s2.length())
//            return 1;
//        return 0;
//    }
//}
//


