package us.cryptomaven.utils.dataStructure.binarySearchTree;

public class BinaryApp {

	public static void main(String[] args) {
		
		BST tree = new BST();
		tree.insert(10, "Ten");
		tree.insert(20, "twenty");
		tree.insert(22, "fifteen");
		tree.insert(18, "fifteen");
		tree.insert(19, "fifteen");
		tree.insert(17, "fifteen");
		tree.insert(24, "Twenty four");
		tree.insert(21, "Twenty four");
		tree.insert(4, "Four");
		tree.insert(2, "Four");
		tree.insert(5, "Four");
		tree.insert(8, "Four");
		tree.insert(9, "Four");
		tree.insert(33, "Thirty three");
		
//		System.out.println(tree.findMin().key);
//		System.out.println(tree.findMax().key);
		
//		System.out.println(tree.remove(10)); // print true
		
//		System.out.println(tree.findMin().key); // 15
//		System.out.println(tree.findMax().key); // 15
		
		// The assignment that follows will complete the body of the method used below.
		tree.displayTree(tree);
		
		
	}
	public static BST bSearch() {

		BST tree = new BST();
		tree.insert(10, "Ten");
		tree.insert(20, "twenty");
		tree.insert(22, "fifteen");
		tree.insert(18, "fifteen");
		tree.insert(19, "fifteen");
		tree.insert(17, "fifteen");
		tree.insert(24, "Twenty four");
		tree.insert(21, "Twenty one");
		tree.insert(4, "Four");
		tree.insert(10, "Ten");
		tree.insert(2, "Two");
		tree.insert(5, "five");
		tree.insert(8, "eight");
		tree.insert(9, "nine");
		tree.insert(33, "Thirty three");

//		System.out.println(tree.findMin().key);
//		System.out.println(tree.findMax().key);
//
//		System.out.println(tree.remove(10)); // print true
//
//		System.out.println(tree.findMin().key); // 15
//		System.out.println(tree.findMax().key); // 15

//		 The assignment that follows will complete the body of the method used below.
		tree.displayTree(tree);

		return tree;
	}
}
