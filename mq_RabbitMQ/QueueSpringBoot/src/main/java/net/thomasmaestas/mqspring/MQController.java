package net.thomasmaestas.mqspring;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageBuilder;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MQController {
	
	@Autowired
	RabbitTemplate rabbitTemplate;

//////////	QUEUE, DIRECT-EXCHANGE, FANOUT-EXCHANGE, TOPIC-EXCHANGE    //////////
	@GetMapping("/mq/{name}")
	public String testAPI(@PathVariable("name") String name) {
		User u = new User(1L, name);
		rabbitTemplate.convertAndSend("Mobile", u);
		rabbitTemplate.convertAndSend("Direct-Exchange", "raspberrypi", u);
		rabbitTemplate.convertAndSend("Fanout-Exchange", "", u);
		rabbitTemplate.convertAndSend("Topic-Exchange", "mobile.raspberrypi.tom", u);
		return "" +
				"<html>" +
				"<body style=\"color:blue;background:steelblue;\">" +
				"<p  style=\"color:white;background:white;\">" +
				"<h3 style=\"color:orange;background:smokewhite;\">Success !!</h3> " +
				"Queue: Mobile x1" +
				"<br />  Direct-Exchange: RP x1" +
				"<br /> Fanout-Exchange x3" +
				"<br /> Topic-Exchange x2<br /></p>" +
				"</body>" +
				"</html>";
	}
//

//////	HEADER EXCHANGE //////////	//////////
//	@GetMapping("/mq/{name}")
//	public String testAPI(@PathVariable("name") String name) throws IOException {
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
//		return "Message successfully posted";
//	}
}
