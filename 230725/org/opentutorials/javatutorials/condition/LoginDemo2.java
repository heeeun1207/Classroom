package org.opentutorials.javatutorials.condition;
 
public class LoginDemo2 {
    public static void main(String[] args) {
        String id = args[0];
        String password = args[1];
        if (id.equals("egoing")) {
            if (password.equals("111111")) {
            	//program arguments : egoing 111111  // right 출력 
                System.out.println("right");
            } else {
                System.out.println("wrong");
            }
 
        } else {
            System.out.println("wrong");
        }
    }
}