import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    const stringInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    //빈 문자열 처리
    if (stringInput === '') {
      Console.print('결과 : 0'); // 테스트파일에 mission-utils의 Console.print만 Spy한다고 되어있음 console.log -> Console.print
      return;
    }

    // 입력값 시작 검사
    if (!stringInput || (!stringInput.startsWith('//') && !(Number(stringInput[0]) >= 0))) {
      if (stringInput.startsWith('-')){
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.'); //기존의 proccess.exit(1)은 코드를 강제종료 시켜서 에러 throw 하기도 전에 종료됨 -> 테스트 에러
        
      } 
      throw new Error('[ERROR] 제대로 된 입력값을 주세요.');
      
    }

    let numbers = [];
    let delimiterPart ='';
    let numberPart = '';

    //커스텀 구분자 처리
    if (stringInput.startsWith('//')) {
      // 커스텀 구분자 문법 검사
      if (!stringInput.includes('\\n')){
        throw new Error('[ERROR] 커스텀 구분자 문법을 제대로 입력해주세요.');
      }
      // '\n' 기준으로 커스텀 구분자와 본문 분리
      [delimiterPart, numberPart] = stringInput.split('\\n');
      const CUSTOM_DELIMITER = delimiterPart.replace('//','');
      // 커스텀 구분자로 분리
      numbers = numberPart.split(CUSTOM_DELIMITER).map(str => {
        const NUM_STR = str.trim();
        //구분자 다음 숫자가 안 나올때(공백처리됨)
        if (NUM_STR === ''){
          throw new Error("[ERROR] 제대로된 구분자를 사용해주세요");   
        }

        const NUM = Number(NUM_STR);

        if (isNaN(NUM)) {
          throw new Error("[ERROR] 제대로된 구분자를 사용해주세요");          
        }

        if (NUM < 0 ) {
          throw new Error('[ERROR] 음수는 입력할 수 없습니다')
        }

        if (!Number.isInteger(NUM)) {
          throw new Error('[ERROR] 정수만 입력 가능합니다')
        }

        return NUM;
      });
      

    }else{
      // 기본 구분자
      numbers = stringInput.split(/,|:/).map(str => {
        const NUM_STR = str.trim();
        const NUM = Number(NUM_STR);

        if (isNaN(NUM)) {
          throw new Error('[ERROR] 제대로된 구분자를 사용해주세요')
        }

        if (NUM < 0) {
          throw new Error('[ERROR] 음수는 입력할 수 없습니다')
        } 

        if (!Number.isInteger(NUM)) {
          throw new Error('[ERROR] 정수만 입력 가능합니다')
        }
        return NUM;
      });
    }

    
    //합산
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
      result += numbers[i];
    }
    Console.print(`결과 : ${result}`) // 테스트파일에 mission-utils의 Console.print만 Spy한다고 되어있음 console.log -> Console.print
  } 
}

export default App;