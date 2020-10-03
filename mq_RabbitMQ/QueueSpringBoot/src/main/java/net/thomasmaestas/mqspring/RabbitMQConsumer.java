package net.thomasmaestas.mqspring;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

////////// HEADER-EXCHANGE IMPORTS    //////////    //////////
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;


@Service
public class RabbitMQConsumer {

//// CONSUMING: 	QUEUE, DIRECT-EXCHANGE, FANOUT-EXCHANGE, TOPIC-EXCHANGE    //////////   //////////
	@RabbitListener(queues = "Mobile")
	public void getMessage(User u) {
		System.out.println(u.getName());
	}
	@RabbitListener(queues = "Tom")
	public void getMessageTom(User u) {
		System.out.println(u.getName());
	}
	@RabbitListener(queues = "RaspberryPi")
	public void getMessageRaspberrypi(User u) {
		System.out.println(u.getName());
	}

//// CONSUMING: 	HEADER-EXCHANGE    //////////    //////////    //////////    //////////    //////////
//	@RabbitListener(queues = "Mobile")
//	public void getMessage(byte[] message) throws IOException, ClassNotFoundException {
//		ByteArrayInputStream bis = new ByteArrayInputStream(message);
//		ObjectInput in = new ObjectInputStream(bis);
//		User u = (User) in.readObject();
//		in.close();
//		bis.close();
//		System.out.println("Header-Exchange Tom sent Successfully"+ u.getName());
//	}
}
