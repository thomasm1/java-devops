package net.thomasmaestas.mq_exchange;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class DirectToExchangePublisher {

	public static void main(String[] args) throws IOException, TimeoutException {

		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		String message = "This is Tom!";
							//   Exchange-name,  routingKey, 	BasicProperties,  byte[] body
		channel.basicPublish("Direct-Exchange", "tom", null, message.getBytes());
		
		channel.close();
		connection.close();
	}

}
