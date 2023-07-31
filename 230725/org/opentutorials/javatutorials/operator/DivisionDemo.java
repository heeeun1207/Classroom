package org.opentutorials.javatutorials.operator;
 
public class DivisionDemo {
      
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
          
        float c = 10.0F;
        float d = 3.0F;
          
        System.out.println(a/b);
        //소수점이 누락되는 문제가 발생하고, 경우에 따라서 엄청 큰 문제가 될 수 있다.
        System.out.println(c/d);
        //3.3333333 누락되지 않는다.
        System.out.println(a/d);
        //두개의 값을 더 조밀한 수로 자동으로 형변환 된다.
        //10을 내부적으로 10.0 으로 형변환된다. = 두번째 예제와 동일한 결과를 얻는다. 
          
    }
  
}