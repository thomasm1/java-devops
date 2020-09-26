package net.thomasmaestas.rabbitmq;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import com.rabbitmq.client.AMQP.BasicProperties;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class HeadersExchangePublisher {

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		
		String message = "to: Tom; no Routing Key; Args: x-match:any, item1:mobile, item2:raspberrypi, item3:tom";
		
		Map<String, Object> headersMap = new HashMap<String, Object>();
		headersMap.put("item1", "mobile");
		headersMap.put("item2", "raspberrypi");

		System.out.println("Sending out: " + headersMap);

		BasicProperties br = new BasicProperties();
		br = br.builder().headers(headersMap).build();
		
		channel.basicPublish("Headers-Exchange", "", br, message.getBytes());
		
		channel.close();
		connection.close();
	}

}
