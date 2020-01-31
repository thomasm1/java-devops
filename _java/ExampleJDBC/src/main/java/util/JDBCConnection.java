package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {
	
	public static Connection conn = null;
	
	public static Connection getConnection() {
		
		if(conn == null) {
			
			String endpoint = "jdbc:oracle:thin:@ryan1911sdet.chxttewop8dc.us-east-2.rds.amazonaws.com:1521:ORCL";
			String username = "ryan";
			String password = "password";
			
			try {
				conn = DriverManager.getConnection(endpoint, username, password);
				return conn;
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
		} 
		else {
			return conn;
		}
		
		return null;
	}
	
	public static void main(String[] args) {
		Connection conn1 = getConnection();
		Connection conn2 = getConnection();
		Connection conn3 = getConnection();
		Connection conn4 = getConnection();
		
		
		System.out.println(conn1);
		System.out.println(conn2);
		System.out.println(conn3);
		System.out.println(conn4);
	}
}
