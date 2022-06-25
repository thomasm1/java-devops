package util;

public class Tree {

	private TreeNode root;
	private TreeNode leftChild;
	private TreeNode rightChild;
	
	public void insert(int value) {
		if(root == null) {
			root = new TreeNode(value);
		} else {
			root.insert(value);
		}
	}
	 
	
}
