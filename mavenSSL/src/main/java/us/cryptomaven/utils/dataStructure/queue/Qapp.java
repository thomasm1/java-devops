package us.cryptomaven.utils.dataStructure.queue;

public class Qapp {

	public static void main(String[] args) {
		Queue myQueue = new Queue(5);
		myQueue.insert(100);
		myQueue.insert(1000);
		myQueue.insert(14);
		myQueue.insert(12);
		myQueue.insert(44);
		myQueue.insert(99);
		myQueue.insert(99);
		myQueue.insert(99);
		myQueue.insert(99);
		myQueue.insert(99999);
		myQueue.view();
	}
	public static Queue qUp(int a, int b) {
		Queue myQueue = new Queue(7);
		myQueue.insert(a);
		myQueue.insert(b);
		myQueue.insert(14);
		myQueue.insert(12);
		myQueue.insert(44);
		myQueue.insert(59);
		myQueue.insert(69);
		myQueue.insert(79);
		myQueue.insert(89);
		myQueue.insert(66666);
		myQueue.view();
		return myQueue;
	}
}
