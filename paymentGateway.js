// paymentGateway.js
class PaymentGateway {
  processPayment(user, amount) {
    // 결제 처리 시뮬레이션
    console.log(`${user.name}로부터 ${amount}원 결제 요청`);
    return true;  // 결제 성공
  }
}

module.exports = PaymentGateway;
