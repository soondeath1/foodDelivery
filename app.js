
const Restaurant = require('./restaurant');
const PaymentGateway = require('./paymentGateway');
const User = require('./user');

// 객체 생성
const restaurant = new Restaurant('Foodie Place', { pizza: 5, burger: 2 });
const paymentGateway = new PaymentGateway();
const user = new User('John Doe', 'john@example.com');

// 주문 처리 함수
function processOrder(item, quantity) {
    console.log(`주문하려는 아이템: ${item}, 수량: ${quantity}`);

    // 1. 재고 확인
    if (!restaurant.checkStock(item, quantity)) {
        console.log('재고 부족! 주문을 취소합니다.');
        return;
    }

    // 2. 결제 처리
    let paymentStatus = paymentGateway.processPayment(quantity * 20);
    if (!paymentStatus) {
        console.log('결제 실패! 다시 시도해 주세요.');
        return;
    }

    // 3. 주문 상태 업데이트
    restaurant.updateStock(item, quantity);
    console.log('결제 성공! 주문이 완료되었습니다.');

    // 4. 사용자에게 알림
    user.notify('주문이 완료되었습니다.');
}

// 사용자 주문 처리 (예시)
processOrder('pizza', 2);  // 정상 주문
processOrder('burger', 3); // 재고 부족 예시
processOrder('pizza', 6);  // 재고 부족 예시

