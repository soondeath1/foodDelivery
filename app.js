// app.js
class App {
  constructor(user, restaurant, paymentGateway) {
    this.user = user;
    this.restaurant = restaurant;
    this.paymentGateway = paymentGateway;
  }

  placeOrder(menuItem) {
    // 음식 재고 확인
    if (!this.restaurant.checkAvailability(menuItem)) {
      console.log("음식 재고 없음");
      return;
    }

    // 결제 처리
    if (this.paymentGateway.processPayment(this.user, 15000)) {
      this.restaurant.receiveOrder(menuItem);
      console.log("주문 완료");
    } else {
      console.log("결제 실패");
    }
  }
}

module.exports = App;
