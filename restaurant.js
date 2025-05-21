// restaurant.js
class Restaurant {
  checkAvailability(menuItem) {
    // 음식 재고 확인
    console.log(`${menuItem} 재고 확인`);
    return true;  // 여기서는 항상 재고 있음으로 가정
  }

  receiveOrder(menuItem) {
    // 주문 접수
    console.log(`${menuItem} 주문 접수 완료`);
  }
}

module.exports = Restaurant;
