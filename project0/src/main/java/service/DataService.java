package service;

import java.util.List;

import models.Car;

public class DataService {
	
	public static int[] hashNums(int[] arr) {
		int[] nums = new int[10];
		int[] numsToAdd = arr;
		
		for (int i = 0; i< numsToAdd.length;i++) {
			nums[hash(numsToAdd[i])] = numsToAdd[i];
		}
		return nums;
	}

	public static int hash(int value) {
		return Math.abs(value %  10);	}

}
