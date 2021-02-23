package algoBasic.searchArrayAndList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class App {
    public static void main(String[] args) {

        int[] numbers = {1, 3, 5, 6, 7};

        System.out.println(Arrays.binarySearch(numbers, 2));
        System.out.println(Arrays.binarySearch(numbers, 5));
        System.out.println(Arrays.binarySearch(numbers, 7));
        System.out.println(Arrays.binarySearch(numbers, 1));
        System.out.println(Arrays.binarySearch(numbers, 3));
        System.out.println(Arrays.binarySearch(numbers, 6));
        System.out.println(Arrays.binarySearch(numbers, 4));

        int[] notSortedNumbers = {5, 4, 10, 8, 6};
//        Arrays.sort(notSortedNumbers);

        System.out.println(Arrays.toString(notSortedNumbers));
        System.out.println(Arrays.binarySearch(notSortedNumbers, 5));
        System.out.println(Arrays.binarySearch(notSortedNumbers, 8));

        /////////////// ArrayList /////////////////////////////////
        System.out.println("//////// ArrayList");

        List<String> numsList = new ArrayList<>();
        numsList.add("500");
        numsList.add("10");
        numsList.add("9");
        numsList.add("50");
        numsList.add("40");

        System.out.println(numsList);

        int index = Collections.binarySearch(numsList, "10");
        System.out.println(index);

        Collections.sort(numsList);
        System.out.println(numsList);
        index = Collections.binarySearch(numsList, "10");
        System.out.println(index);

        List<Integer> numb = Arrays.asList(5, 4, 8, 10, 11, 7, 3);
        System.out.println(numb);

        index = Collections.binarySearch(numb, 7);
        System.out.println(index);

        Collections.sort(numb);
        System.out.println(numb);

        index = Collections.binarySearch(numb, 7);
        System.out.println(index);
    }
}
