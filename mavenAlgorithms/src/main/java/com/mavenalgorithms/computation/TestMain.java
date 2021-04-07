package com.mavenalgorithms.computation;


import java.util.function.Consumer;

public class TestMain {

    @FunctionalInterface
    public interface TriConsumer{
        void accept(String a, String b, int c);
    }

    public interface Person{}

    public static void main(String[] args) {

//        String exp = "9 * 9 - 1 * 7 / 8 + 30 ^ 2 % 3";
        String exp = "7 * 7";

        Calculator.addOperation("^", (a, b) -> (int) Math.pow(a, b));
        Calculator.addOperation("%", (a, b) -> a % b);

        System.out.println("answer " +    Calculator.calculate(exp)       );


        TestMain.TriConsumer personProperties = (firstName, lastName, age) -> {   };

        Consumer<Person> person = (p) -> { };





    }

}