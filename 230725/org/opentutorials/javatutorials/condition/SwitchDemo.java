package org.opentutorials.javatutorials.condition;
 
public class SwitchDemo {
 
    public static void main(String[] args) {
         
        System.out.println("switch(1)");
        switch(4){
        case 1:
            System.out.println("one");
           break;
        case 2:
            System.out.println("two");
            break;
        case 3:
            System.out.println("three");
            break;
        default :
        	System.out.println("default");
        }
        //switch문을 사용할때 조건의 값이 case문에 어디에도 속하지 않는다면
        //default :문의 정의되어 있을때 , default문이 실행된다.
         
        System.out.println("switch(2)");
        switch(2){
        case 1:
            System.out.println("one");
        case 2:
            System.out.println("two");
        case 3:
            System.out.println("three");
        }
         
        System.out.println("switch(3)");
        switch(3){
        case 1:
            System.out.println("one");
        case 2:
            System.out.println("two");
        case 3:
            System.out.println("three");
        }
        int val = 1;
        		if(val == 1) {
        			System.out.println(" switch문으로 대체 가능한 if문 one ");
        		}else if (val ==2) {
        			System.out.println("two");
        		}else if (val ==3) {
        			System.out.println("three");
        		}
    }
 
}