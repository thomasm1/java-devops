package us.cryptomaven.utils.dataStructure.singlyLinkedList;

public class SinglyApp {

	public static void main(String[] args) {
		SinglyLinkedList mylist = new SinglyLinkedList();
		mylist.insertFirst(100);
		mylist.insertFirst(50);
		mylist.insertFirst(99);
		mylist.insertFirst(88);
		mylist.insertLast(9999999);
		
		mylist.displayList();
	}
	public static SinglyLinkedList sList(int a, int b) {
		SinglyLinkedList mylist1 = new SinglyLinkedList();
		mylist1.insertFirst(a);
		mylist1.insertFirst(b);
		mylist1.insertFirst(99);
		mylist1.insertFirst(88);
		mylist1.insertLast(9999999);

		mylist1.displayList();
		return mylist1;
	}
}
