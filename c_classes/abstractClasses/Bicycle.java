public class Bicycle  extends Machine { 

		@Override
		public void start() {
			System.out.println("Cycle Starting up Gears");
		}
		
		@Override
		public void functionNow() {
			System.out.println("Chain and Sprockets In Motion");
		}
		
		@Override
		public void stop() {
			System.out.println("Cycle Stopping Gears");
		} 

}
