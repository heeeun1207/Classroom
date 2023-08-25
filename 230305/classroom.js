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

while (getRandomSet.size < studentList.length) {
  // 조건식 : 집합 개수가 배열 개수를 초과하지 않을 때 참, 계속 반복
  let getRandomIntData = getRandomInt(0, studentList.length);
  if (getRandomSet.has(getRandomIntData) === false) {
    //* Set 메서드 중 has기능은 boolean타입을 리턴함
    getRandomSet.add(getRandomIntData);
  }
}
console.log("while loop 종료");

const fromSetChangeArr = Array.from(getRandomSet);
const decideteamOrder = [];
for (let i = 0; i < fromSetChangeArr.length; i += 5) {
  decideteamOrder.push(fromSetChangeArr.slice(i, i + 5));
}
// decideteam.push(studentList[element]);

// console.log(temp.length);
// console.log(temp[0]);
// console.log(studentList.temp[0]);
// console.log(decidetempOrder);

function detectStudentName(numberArr, targetArr) {
  //* 난수로 결정된 [2,3,4,5,6] decideteamOrder
  //* 값 하나를 studentList 인덱스로 조회
  //* 조회된 값의 string(이름)을 로컬 배열에 푸시 
  let parentArr = [];
  for (let i = 0; i < numberArr.length; i++) {
    let childArr = [];
    for (let j = 0; j < numberArr[i].length; j++) {
      if (j === 0) {
        childArr.push(`팀장: ${targetArr[numberArr[i][j]]}`);
      } else {
        childArr.push(`팀원: ${targetArr[numberArr[i][j]]}`);
      }
    }
    parentArr.push(childArr);
  }
  return parentArr;
}
const decideteamName = detectStudentName(decideteamOrder, studentList);
console.log(decideteamName);
