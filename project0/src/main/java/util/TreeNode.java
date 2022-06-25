package util;

public class TreeNode {
	
	private int data;
	private TreeNode leftChild;
	private TreeNode rightChild;
	 
	public TreeNode(int data) {
		this.data = data;
	}

	 void traverseInOrder() {
		if (leftChild != null) {
			leftChild.traverseInOrder();
		} 
		System.out.println(data + ", ");
		if (rightChild != null) {
			rightChild.traverseInOrder();
		}
	}
	 
	public void insert(int value) {
		if(value == data) {
			return;
		}
		if(value < data) {
			if(leftChild==null) {
				leftChild= new TreeNode(value);
			} else {
				leftChild.insert(value); // Recursive flow down to next node
			}
		} else {
			if (rightChild==null) {
				rightChild = new TreeNode(value);
			} else {
				rightChild.insert(value); // Recursive
			}
		}
	}
	/**
	 * @return the data
	 */
	public int getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(int data) {
		this.data = data;
	}

	/**
	 * @return the leftChild
	 */
	public TreeNode getLeftChild() {
		return leftChild;
	}

	/**
	 * @param leftChild the leftChild to set
	 */
	public void setLeftChild(TreeNode leftChild) {
		this.leftChild = leftChild;
	}

	/**
	 * @return the rightChild
	 */
	public TreeNode getRightChild() {
		return rightChild;
	}

	/**
	 * @param rightChild the rightChild to set
	 */
	public void setRightChild(TreeNode rightChild) {
		this.rightChild = rightChild;
	}


}
