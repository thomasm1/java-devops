package algo.linearsearch;

public class App {

	public static void main(String[] args) {
		int[] arr = {1,2,3};
		int m = 88;
		int e = 3;
		System.out.println(linearSearch(arr, e));
	}
	
	public static int linearSearch(int [] a, int x){
		for(int i=0; i<a.length; i++){
			if(a[i] == x){
				return i;
			}
		}
		return -1;
	}

}
