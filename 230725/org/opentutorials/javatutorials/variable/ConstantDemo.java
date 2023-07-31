package org.opentutorials.javatutorials.variable;

public class ConstantDemo {
	
		public static void main(String[] args) {
			long a = 2147483648L;
			byte  b= 100;
			short c = 200;
			System.out.println(a);
			System.out.println(b);
			System.out.println(c);
			//이번에는 오류가 발생하지 않는다. 
			//자바는 byte와 short 타입에 대해서는 int 형을 허용하기 때문에 오류가 발생하지 않는다.
		}
}
