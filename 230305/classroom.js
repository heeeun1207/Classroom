const studentList = ["앨리스", "밥", "찰리", "데이브", "이브", "프랭크", "그레이스", "행크", "아이비", "잭", "지니", "케이스", "로라", "맥스", "나오미", "올리버", "페넬로페", "퀸", "라이언", "사라", "톰", "우라누스", "비비안", "윌리엄", "엑스"];

console.log(studentList.length)

//임의의 정수가 랜덤으로 리턴된다.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min // 최댓값의 제외, 최솟값은 포함
}
//pseudo 1. 0~24까지 랜덤의 숫자가 나타나야함
//