<!-- 그린콤퓨타아트라는 개발회사의 공사장 갑자기 직원들하고 상의도 없이 대뜸 포켓몬스터 API를 거금들여 사들고 왔습니다.
문서를 달라고 했더니, 이상한 예제 하나와, API 명세만 달랑 들고 왔을 뿐입니다.
사장님 왈 "접속할 때마다 랜덤으로 포켓몬스터 하나가 나타나게 만들어와" 라고 합니다. 도대체 무슨 생각일까요? -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>포켓몬 API</title>
</head>
<body>
  <!-- 랜덤 포켓몬에 이름을 표시할 곳을 만들자 -->
  <div id="root">
    <h1 id ="pokeName"></h1>
  </div>

  <script>
    // HTML의 요소를 JS에서 사용하기 위해서 참조하는 과정
    const root = document.getElementById('root');
    const pokeNameElement =document.getElementById('pokeName');

    // 포켓몬 ID를 랜덤으로 생성하자 
    const randomPokemonID = Math.floor(Math.random() * 898 ) + 1 
    // 포켓몬은 현재 898 종류까지 있다. 공식문서나 웹사이트를 통해서 업데이트 내용 확인할 것 

    // XMLHttpRequest 객체를 생성
    const xhr = new XMLHttpRequest();
    // 포켓몬 API의 URL을 동적으로 생성
    const _URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

    // HTTP GET 요청을 설정한다.
    xhr.open('GET',_URL);

    // HTTP 요청을 보낸다 
    xhr.send();

    // HTTP 요청이 완료되면 실행되는 이벤트 리스너
    xhr.addEventListener('load',function(){
      console.log(xhr.response);
      // API 응답 데이터를 JSON 형태로 파싱
      const _PokeData = JSON.parse(xhr.response);

      // 포켓몬 이름을 화면에 표시
      pokeNameElement.textContent = _PokeData.name;
    });
  </script>
</body>
</html>