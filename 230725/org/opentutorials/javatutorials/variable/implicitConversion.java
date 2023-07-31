package org.opentutorials.javatutorials.variable;

public class implicitConversion {
	public static void main(String[] args) {
		float a = 3.0; //error
	System.out.println(a);
	//이 때 3.0F의 값은 자동으로 double 타입으로 형 변환이 일어난다. 
	//타입을 변경해도 정보의 손실이 일어나지 않는 경우 자동 형 변환이 일어난다.
	//자동 형 변환의 원칙은 표현범위가 좁은 데이터 타입에서 넓은 데이터 타입으로의 변환만 허용된다는 것이다.
	}
}