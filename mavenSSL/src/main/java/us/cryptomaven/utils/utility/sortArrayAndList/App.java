package us.cryptomaven.utils.utility.sortArrayAndList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class SortArrays {

    public static void main(String[] args) {

        int[] numbers = {5, 10, 2};
        SortingArrays sa = new SortingArrays();
        sa.sort(numbers);

        //////////// SORTING LISTS ////////////
        System.out.println("////// SORTING LISTS ///");

        List<String> numsList = new ArrayList<>();
        numsList.add("500");
        numsList.add("10");
        numsList.add("9");
        numsList.add("50");
        numsList.add("40");

        System.out.println(numsList);
        Collections.sort(numsList);
        System.out.println(numsList);

        List<Integer> numbs = Arrays.asList(5, 4, 8, 10, 11, 7, 3);
        System.out.println(numbs);

        Collections.sort(numbs);
        System.out.println(numbs);
    }
}

class SortingArrays {

    void sort(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }

        System.out.println(nums);

        System.out.println(Arrays.toString(nums));

        String[] strings = {"50", "9", "500"};  // !!
        Arrays.sort(strings);
        System.out.println(Arrays.toString(strings));
    }
}
