it("예상 동작이 실제 동작과 일치하지 않을 때 오류가 발생합니다.", function () {
  let even = function (num) {
    return num % 2 === 0; // 체크하려는 함수에 뭔가 문제가 있군요!
  };

  if (even(10) !== true) {
    throw new Error("10은 짝수여야 합니다!");
  }
});
