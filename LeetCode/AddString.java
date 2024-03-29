// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

import java.math.BigInteger;

public class AddString {
    public static void main(String[] args) {
        String num1 = "11";
        String num2 = "15";
        BigInteger n1 = new BigInteger(num1);
        BigInteger n2 = new BigInteger(num2);
        BigInteger res = n1.add(n2);
        String ans = res.toString();
        System.out.println(res);
    }
}
