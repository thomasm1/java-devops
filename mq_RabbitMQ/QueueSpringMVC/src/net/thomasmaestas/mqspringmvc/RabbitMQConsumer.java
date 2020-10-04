package net.thomasmaestas.mqspringmvc;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;

import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
@EnableRabbit
public class RabbitMQConsumer {

	/*@RabbitListener(queues = "Mobile")
	public void getMessage(User u){
		System.out.println(u.getName());
	}*/
	
	@RabbitListener(queues = "Mobile")
	public void getMessage(byte[] message) throws IOException, ClassNotFoundException{
		ByteArrayInputStream bis = new ByteArrayInputStream(message);
		ObjectInput in = new ObjectInputStream(bis);
		User u = (User) in.readObject();
		in.close();
		bis.close();
		System.out.println(u.getName());
	}
}
