try {
  const app = new App();
  await app.run();
} catch (error) {
  // 1. App.js가 던진 에러를 여기서 잡음
  // 2. 에러 로그없이 메시지만 출력하도록 try...catch -> index.js의 app.run()이 코드의 실행의 시작점이기 때문에 여기서 잡으면 됨
  Console.print(error.message);
}