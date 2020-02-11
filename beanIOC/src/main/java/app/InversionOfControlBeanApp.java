package app;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import beans.Box;
import configs.AppConfig;

import beans.Donut;
import configs.DonutConfig;

public class InversionOfControlBeanApp {

	public static void main(String[] args) {
		System.out.println("\n====AnnotationConfigApplicationContext I========\n");
		ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
		
		Box a = ac.getBean("getSingleBox", Box.class); // Singleton scope,  // new Box();
		Box b = ac.getBean("getSingleBox", Box.class); // Singleton scope,   //new Box();
		System.out.println("\nsingleton: "+ (a == b)); // Singleton scope, do *Not* want multiple objects...

		Box x = ac.getBean("getSingleBox", Box.class); //new Box();
		
		
		Box c = ac.getBean("getProtoBox", Box.class); //new Box();
		Box d = ac.getBean("getProtoBox", Box.class); //new Box();		
		System.out.println("\nprototype: "+(c == d)); // Prototype scope, *Do* want multiple objects...
		
		System.out.println("\nsingleton-again: "+(x == b)); // Singleton scope, prints before ...
		System.out.println("\n====AnnotationConfigApplicationContext II========\n");
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		((AbstractApplicationContext) ac).close();
		
		ApplicationContext donut = new AnnotationConfigApplicationContext(DonutConfig.class);
		Donut blueDonut = donut.getBean("getBlueberryDonut", Donut.class);
		Donut peanutBDonut = donut.getBean("getPeanutbutterDonut", Donut.class);
		
		System.out.println("=======donut=========");
		System.out.println(donut);
		System.out.println(blueDonut);
		System.out.println(peanutBDonut);
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		((AbstractApplicationContext) donut).close(); // Not triggered?
	}
}
