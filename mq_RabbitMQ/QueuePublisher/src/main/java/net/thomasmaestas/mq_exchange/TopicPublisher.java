package net.thomasmaestas.mq_exchange;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class TopicPublisher {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		String message = "Mobile topic, RPi topic, Tom topic...\"Topic-Exchange\", \"mobile.raspberrypi.tom\"";

						// 	exchange name,  routingKey Topics [ *.mobile.*, #.raspberrypi.tom (1+)
		channel.basicPublish("Topic-Exchange", "mobile.raspberrypi.tom", null, message.getBytes());
		System.out.println("sent off: " + message);
		channel.close();
		connection.close();
	}

}
