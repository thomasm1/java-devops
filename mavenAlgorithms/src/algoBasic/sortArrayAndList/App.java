package algoBasic.sortArrayAndList;

import java.util.Arrays;

class SortArrays {

    public static void main(String[] args) {

        int[] numbers = {5, 10, 2};
        SortingArrays sa = new SortingArrays();
        sa.sort(numbers);
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