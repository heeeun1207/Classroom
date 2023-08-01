package org.opentutorials.javatutorials.array;
 
public class LengthDemo {
 
    public static void main(String[] args) {
    	// String[] classGroup = { "최진혁", "최유빈", "한이람", "이고잉" };
        String[] classGroup = new String[4];
        // 배열을 만들때 new 를 쓴다고 우선 알아두자.//실제로 어떤 값도 저장되지 않은 상태이다.
        // 새로운 배열은 4개의 원소로 이루어져 있다.
        classGroup[0] = "최진혁";
        //equl 대입연산자를 쓰면 0번째 인덱스의 해당하는 값은 "최진혁" 이다. 라고 지정한 것이다.
        //분할에서 정의한 것  //분할 하기 전에  new String[4]; 몇개가 들어갈지 꼭 지정해야 한다. (JAVA 언어)
        System.out.println(classGroup.length);
        //1이 출력되지 않고 4가 출력된다. 
		//=> 현재 값이 몇개 있는지 알려주는게 아니라, 몇개의 값을 수용할 수 있는지 알려주는 값이다.
        classGroup[1] = "최유빈";
        System.out.println(classGroup.length);
        //2이 아닌 4출력  
        classGroup[2] = "한이람";
        System.out.println(classGroup.length);
        //3이 아닌 4출력   
        classGroup[3] = "이고잉";
        System.out.println(classGroup.length);
        //4
    }
 
}