import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    const STRING_INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    // 입력값 시작 검사
    const FIRST_CHAR = STRING_INPUT[0];
    if (!STRING_INPUT || (!STRING_INPUT.startsWith('//') && !(FIRST_CHAR >= '0'))) {
      if(STRING_INPUT.startsWith('-')){
        console.error('[ERROR] 음수는 입력할 수 없습니다.')
        return;
      }
      console.error('[ERROR] 제대로 된 입력값을 주세요.')
      return;
    }
    
    //빈 문자열 처리
    if (STRING_INPUT === '') {
      console.log('결과 : 0');
      return;
    }

    let NUMBERS = [];
    let DELIMITER_PART ='';
    let NUMBER_PART = '';

    //커스텀 구분자 처리
    if (STRING_INPUT.startsWith('//')) {
      // 커스텀 구분자 문법 검사
      if (!STRING_INPUT.includes('\n')){
        console.error('[ERROR] 커스텀 구분자 문법을 제대로 입력해주세요.')
        return;
      }
      // '\n' 기준으로 커스텀 구분자와 본문 분리
      [DELIMITER_PART, NUMBER_PART] = STRING_INPUT.split('\\n');
      const CUSTOM_DELIMITER = DELIMITER_PART.replace('//','');
      // 커스텀 구분자로 분리
      NUMBERS = NUMBER_PART.split(CUSTOM_DELIMITER).map(Number);

    }else{
      // 기본 구분자
      NUMBERS = STRING_INPUT.split(/,|:/).map(Number);
    }

    // 음수를 입력했는지 검사
    const MINUS_NUMBER = NUMBERS.filter(num => num < 0);
    if (MINUS_NUMBER.length >0) {
      console.error('[ERROR] 음수는 입력할 수 없습니다.')
      return;
    }
    //합산
    let result = 0;
    for (let i = 0; i < NUMBERS.length; i++){
      result += NUMBERS[i];
    }
    console.log(`결과 : ${result}`)
  }
}

export default App;