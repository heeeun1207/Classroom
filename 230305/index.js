
/* 
KDT-2 학생들을 모두 조회해서 팀을 나눠야 함
랜덤 결정으로 1조 부터 5조( 총원 25명으로 5의 배수 )
한명이라도 누락되면 안됨
한명이라도 중복되면 안됨 -> 당장 떠오르는 것 집합개념
알고리즘 만들기 -> 학생들과 분석하기 -> 코드가 절차적이여야함 
*/

// const studentList = ["앨리스", "밥", "찰리", "데이브", "이브", "프랭크", "그레이스", "행크", "아이비", "잭", "지니", "케이스", "로라", "맥스", "나오미", "올리버", "페넬로페", "퀸", "라이언", "사라", "톰", "우라누스", "비비안", "윌리엄", "엑스"];

// // 학생 리스트를 섞기 위한 Fisher-Yates 알고리즘
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // 학생 리스트를 섞습니다.
// shuffle(studentList);

// // 팀 수와 학생 수
// const numTeams = 5;
// const studentsPerTeam = studentList.length / numTeams;

// // 팀 별로 나누어진 학생들의 배열
// const teams = [];

// // 각 팀에 학생들을 할당합니다.
// for (let i = 0; i < numTeams; i++) {
//   const team = studentList.slice(i * studentsPerTeam, (i + 1) * studentsPerTeam);
//   teams.push(team);
// }

// // 결과 출력
// for (let i = 0; i < teams.length; i++) {
//   console.log(`Team ${i + 1}: ${teams[i].join(", ")}`);
// }

// // 총 학생 수와 팀 수 확인
// console.log(`Total students: ${studentList.length}`);
// console.log(`Total teams: ${teams.length}`);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function divideIntoTeams(studentList, numTeams) {
  const shuffledStudents = [...studentList];
  shuffleArray(shuffledStudents);

  const studentsPerTeam = shuffledStudents.length / numTeams;
  const teams = [];

  for (let i = 0; i < numTeams; i++) {
    const team = shuffledStudents.slice(i * studentsPerTeam, (i + 1) * studentsPerTeam);
    teams.push(team);
  }

  return teams;
}

const studentList = ["앨리스", "밥", "찰리", "데이브", "이브", "프랭크", "그레이스", "행크", "아이비", "잭", "지니", "케이스", "로라", "맥스", "나오미", "올리버", "페넬로페", "퀸", "라이언", "사라", "톰", "우라누스", "비비안", "윌리엄", "엑스"];

const numTeams = 5;
const teams = divideIntoTeams(studentList, numTeams);

teams.forEach((team, index) => {
  console.log(`Team ${index + 1}: ${team.join(", ")}`);
});

console.log(`Total students: ${studentList.length}`);
console.log(`Total teams: ${teams.length}`);
