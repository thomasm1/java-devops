package net.thomasmaestas.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Publisher {

	public static void main(String[] args) throws IOException, TimeoutException {

		//* RUNNING ECLIPSE COMPILER

		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel_thomas = connection.createChannel();
		
		String message = "First message Saying: HELLOW3 from RabbitMQ";
		channel_thomas.basicPublish("", "Queue-1", null, message.getBytes());
		System.out.println(message);

//		String[] messagesArray = {"First", "Second", "Third", "Fourth"};
//
//		for(String msg : messagesArray) {
//			channel_thomas.basicPublish("", "Queue-1", null, msg.getBytes());
//			System.out.println(msg);
//		}

		channel_thomas.close();
		connection.close();
	}

}
