const studentList = ["앨리스", "밥", "찰리", "데이브", "이브", "프랭크", "그레이스", "행크", "아이비", "잭", "지니", "케이스", "로라", "맥스", "나오미", "올리버", "페넬로페", "퀸", "라이언", "사라", "톰", "우라누스", "비비안", "윌리엄", "엑스"];

console.log(studentList.length)


/** 
 * jsDOC 
 * 태그를 사용하여 각 매개변수의 이름, 타입, 설명 등을 문서화한다
 * 코드 사용자에게 어떤 매개변수가 어떤 역할을 하는지 설명할 수 있다.
 * @param {0} min 
 * @param {Array.length} max 
 * @returns integer 
 *
 * 임의의 정수가 min 이상 max 미만의 범위에서 랜덤으로 리턴된다.
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min // 최댓값의 제외, 최솟값은 포함
}
//pseudo 1. 0~24까지 랜덤의 숫자가 나타나야함
//pseudo 2. 랜덤하지만 모든 값이 다 나와야함 

const getRandomSet = new Set();
//? .set에도 length가 있나? 확인 Set.prototype.size 라는 값이 있음
//? .set에도 push가 있나? 확인 Set.prototype.add 라는 값이 있음
//? .set에도 pop이 있나? 확인 Set.prototype.delete 라는 값이 있음

// * 반복문
// * for -> 횟수가 결정되기 때문에 제한됨
// * while -> 조건기반 반복문 

