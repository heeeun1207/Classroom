package org.opentutorials.javatutorials.loop;
 
public class LoopDepthDemo {
 
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.println(i + "" + j);
                //i가 0 인 상태에서 j 가 9가 될때까지 내부 중첩문 실행되고 종료된다.
                //i가 1 인 상태에서 j 가 9가 될때까지 계속 반복한다.
                //i j 는 관습적인 이름에 불과다. i j k 
            }
        }
 
    }
 
}