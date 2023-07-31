package org.opentutorials.javatutorials.compare;
 
public class EqualStringDemo {
 
    public static void main(String[] args) {
        String a = "Hello world";
        String b = new String("Hello world");
        //지금은 new String의 괄호 안에 문자열을 넣으면 문자열을 생성할 수 있다고만 알아두자. 
        System.out.println(a == b);
        //==은 두개의 데이터 타입이 동일한 객체인지를 알아내기 위해서 사용하는 연산자이기 때문에
        //b에 담긴 객체와 일치하지 않는 것이다.
        System.out.println(a.equals(b));
        //이를 보안하는 비교 방법이 equals이고 이를 이용해서 서로 다른 객체들간에 값이 같은지를 비교할 수 있다. 
    }
 
}