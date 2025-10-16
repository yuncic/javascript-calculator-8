import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    const STRING_INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    
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
      // '\n' 기준으로 커스텀 구분자와 본문 분리
      [DELIMITER_PART, NUMBER_PART] = STRING_INPUT.split('\\n');
      const CUSTOM_DELIMITER = DELIMITER_PART.replace('//','');
      // 커스텀 구분자로 분리
      NUMBERS = NUMBER_PART.split(CUSTOM_DELIMITER).map(Number);

    }else{
      // 기본 구분자
      NUMBERS = STRING_INPUT.split(/,|:/).map(Number);
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