package xyz.cryptomaven.rest.app;

public class Node {

	public int data;
	public Node left;
	public Node right;
	
	public Node(int data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	public void setLeft(Node node) {
		this.left = node; 	}
	public void setRight(Node node) { 
		this.right = node;
	}
	
	public Node getLeft() {
		return this.left;
	}

	public Node getRight() {
		return this.right;
	}
}
