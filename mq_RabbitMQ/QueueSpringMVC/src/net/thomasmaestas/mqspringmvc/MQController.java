package net.thomasmaestas.mqspringmvc;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageBuilder;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MQController {

	@Autowired
	RabbitTemplate rabbitTemplate;
	
	 @RequestMapping(value = "/mvc/{name}", method = RequestMethod.GET)
	public String testAPI(@PathVariable("name") String name){
		User u = new User(1L, name);
		rabbitTemplate.convertAndSend("Mobile", u);
		rabbitTemplate.convertAndSend("Direct-Exchange", "mobile", u);
		rabbitTemplate.convertAndSend("Fanout-Exchange", "", u);
		rabbitTemplate.convertAndSend("Topic-Exchange", "mobile.raspberrypi.tom", u);
		return "Success";
	}
	
//	@RequestMapping(value = "/mvc/{name}", method = RequestMethod.GET)
//	public String testAPI(@PathVariable("name") String name) throws IOException{
//		User u = new User(1L, name);
//
//		ByteArrayOutputStream bos = new ByteArrayOutputStream();
//		ObjectOutput out = new ObjectOutputStream(bos);
//		out.writeObject(u);
//		out.flush();
//		out.close();
//
//		byte[] byteMessage = bos.toByteArray();
//		bos.close();
//
//		Message message = MessageBuilder.withBody(byteMessage)
//				.setHeader("item1", "mobile")
//				.setHeader("item2", "raspberrypi")
//				.setHeader("item3", "tom").build();
//
//		rabbitTemplate.send("Headers-Exchange", "", message);
//
//		return "Success";
//	}
}
