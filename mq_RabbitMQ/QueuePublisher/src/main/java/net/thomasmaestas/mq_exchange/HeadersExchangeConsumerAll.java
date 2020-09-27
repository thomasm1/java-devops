package net.thomasmaestas.mq_exchange;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class HeadersExchangeConsumerAll {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		DeliverCallback deliverCallback = (consumerTag, delivery) -> {
			String message = new String (delivery.getBody());
			System.out.println("Message received = " + message);
		};

		// Will not get anything bc publisher sending 2 items, this exchange is x-match:all
		//  QueueName Tom (routekey tom), AutoAck
		channel.basicConsume("Mobile", true, deliverCallback, consumerTag -> {});
	}

}
