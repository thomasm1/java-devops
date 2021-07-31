package us.cryptomaven.utils;


import java.io.*;
        import java.math.*;
        import java.security.*;
        import java.text.*;
        import java.util.*;
        import java.util.concurrent.*;
        import java.util.function.*;
        import java.util.regex.*;
        import java.util.stream.*;
        import static java.util.stream.Collectors.joining;
        import static java.util.stream.Collectors.toList;

 public class DataRotation {

    /*
     * Complete the 'rotateLeft' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER d
     *  2. INTEGER_ARRAY arr
     */

      static List<Integer> rotateLeft(int d, List<Integer> arr) {
        // Write your code here
        List<Integer> tempArr  = arr;
        for (int i = 0; i < arr.size();i++){
            tempArr.set(0, tempArr.get(i));
            System.out.println("tempArr: " + tempArr);
        }
          System.out.println("tempArr: " + tempArr);
        return tempArr;
    }

}


