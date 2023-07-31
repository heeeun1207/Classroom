package org.opentutorials.javatutorials.operator;
 
public class PrePostDemo {
    public static void main(String[] args) {
        int i = 3;
        i++; //i=i+1
        System.out.println(i); // 4 출력
        ++i;
        System.out.println(i); // 5 출력
        System.out.println(++i); // 6 출력
        System.out.println(i++); // 6 출력
        // 괄호안에서는 즉시 실행되지 않는다 = 6
        System.out.println(i); // 7 출력
        // 괄호가 끝나면 i++괄호안에 내용이 적용되어서 7이 출력된다.
    }
}
