package org.opentutorials.javatutorials.variable;

public class implicitConversion {
	public static void main(String[] args) {
		int a = 3;
		float b = 1.0F;
		double c = a + b;
		System.out.println(c);
		// 1. 형변환 필요
		// 2. 정수 int → 실수 float
		// 3. 3. → 3.0F + 1.0F =4.0F
		// 4. double c 에 맞춰서 형변환 필요
		// 5. 4.0 (double 데이터타입)
	}
}