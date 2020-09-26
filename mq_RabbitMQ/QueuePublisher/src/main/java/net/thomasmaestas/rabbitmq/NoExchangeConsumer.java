package net.thomasmaestas.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class NoExchangeConsumer {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel_thomas = connection.createChannel();
		
		DeliverCallback deliverCallback = (consumerTag, delivery) -> {
			String message = new String (delivery.getBody());
			System.out.println("Message received = " + message);
		};
									// (Queue	, AutoAck,, deliveryCallback, cancelCallback)
		channel_thomas.basicConsume("Queue-1", true, deliverCallback, consumerTag -> {});
	}

}
