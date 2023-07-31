package org.opentutorials.javatutorials.condition;
 
public class LoginDemo {
    public static void main(String[] args) {
        String id = args[0];
        //입력값을 제공해야한다.
        //Run Configuration -> Program arguments: egoing 입력하고 run한 결과  //right출력.
        if(id.equals("egoing")){
            System.out.println("right");
        } else {
            System.out.println("wrong");
        }
    }
}