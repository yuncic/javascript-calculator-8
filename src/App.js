import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    const STRING_INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    if (STRING_INPUT === '') {
      console.log('결과 : 0');
    }
  }
}

