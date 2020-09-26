package net.thomasmaestas.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class TopicConsumerTom {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		DeliverCallback deliverCallback = (consumerTag, delivery) -> {
			String message = new String (delivery.getBody());
			System.out.println("Tom Message received [TopicConsumerTom]: " + message);
		};
		//  QueueName Tom (routekey tom), AutoAck
//		channel.basicConsume("Tom", true, deliverCallback, consumerTag -> {});    // *.tom no match
		channel.basicConsume("TomHash", true, deliverCallback, consumerTag -> {});  // #.tom match
	}

}