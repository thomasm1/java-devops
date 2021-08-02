package us.cryptomaven.utils.dataStructure.circularLinkedList;

public class App {

	public static void main(String[] args) {
		CircularLinkedList mylist = new CircularLinkedList();
		mylist.insertFirst(100);
		mylist.insertFirst(50);
		mylist.insertFirst(99);
		mylist.insertFirst(88);
		mylist.insertLast(9999999);
		
		mylist.displayList();
	}

	public static CircularLinkedList cList(int a, int b) {
		CircularLinkedList mylist = new CircularLinkedList();
		mylist.insertFirst(a);
		mylist.insertFirst(b);
		mylist.insertFirst(99);
		mylist.insertFirst(88);
		mylist.insertLast(7777);

		mylist.displayList();
		return mylist;
	}
}
