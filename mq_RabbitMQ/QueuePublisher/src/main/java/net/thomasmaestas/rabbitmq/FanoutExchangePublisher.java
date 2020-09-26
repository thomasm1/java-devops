package net.thomasmaestas.rabbitmq;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class FanoutExchangePublisher {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		String message = "Message For Tom and RaspberryPi";

								// exchange-name,   no routingKey,  basicProperties, body
		channel.basicPublish("Fanout-Exchange", "", null, message.getBytes());
		System.out.println("FanoutExchangePublisher Sending off: " + message);

		channel.close();
		connection.close();
	}

}
