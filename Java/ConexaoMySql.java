package banco_de_dados;

import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.Statement;

import useful.Mensagens;


public class Conexao {

	public static Connection conn(){
		
		Connection connection = null;
		Statement statement = null;
		
		String servidor = "jdbc:mysql://localhost:3306/schema";
		String usuario = "nome";
		String senha = "senha";
		String driver = "com.mysql.jdbc.Driver";
		try {
			Class.forName(driver);
			connection = DriverManager.getConnection(servidor, usuario, senha);
			statement = connection.createStatement();
		} catch (Exception e) {
			Mensagens.msgErro("Conexão", "ERRO: "+e.getMessage());
		}	
		return connection;
	}
}