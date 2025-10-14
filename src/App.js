import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    const STRING_INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const INPUT_RESULT = STRING_INPUT.split(/,|:/).map(Number);
    if (STRING_INPUT === '') {
      console.log('결과 : 0');
    }else{
      let sum = 0;
      for (let i = 0; i < INPUT_RESULT.length; i++) {
        sum += INPUT_RESULT[i];
      }
      console.log(sum)
    }
  }
}

export default App;