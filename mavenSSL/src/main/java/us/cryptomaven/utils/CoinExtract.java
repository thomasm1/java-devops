package us.cryptomaven.utils;

import us.cryptomaven.domain.Product;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class CoinExtract {

    List<Product> products = new ArrayList<>();
    CoinExtract(int[] arr) {
        int array[] = arr;

    }
    public int[] get() {
        String c;
        int arr[] = new int[products.size()];

        for (int i=0; i<products.size();i++) {

            Product p = products.get(i);
            String f = p.getCoinName();
            System.out.println(f);
        }
        return arr;
    }
}
