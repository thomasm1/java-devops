package algoOptimize.sortSelection;

public class TestSelectionSort {

	public static void main(String[] args) {
		SelectionSort ss = new SelectionSort();
		int myArray[] = ss.selectionSort(new int[] {9,8,3,13,87,12,99});
		
		for(int i =0; i < myArray.length; i++){
			System.out.println(myArray[i]);
		}
	}
	public void doSomeThing(int arg){
		int p = arg;
		int i = 1;
		int j = 1;
		j++;
	}

	public int showFirst(int arg1, int arg2){
		return arg1+arg2;
	}
	
	public int showFirst(int [] args){
		return args[0];
	}
	
	public int showFirstBad(int [] args){
		
		for(int i = 0; i < args.length; i++){
			int temp = args[i];
		}
		int j = 0;
		return args[0];
	}
	
	public void drive(int miles){
		
	}
	
	
}
