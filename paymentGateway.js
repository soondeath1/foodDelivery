
class PaymentGateway {
    constructor() {
        this.paymentStatus = true; // 결제 성공 여부, 기본적으로 결제 성공으로 설정
    }

    // 결제 처리 함수
    processPayment(amount) {
        console.log(`결제 금액: ${amount} 원`);

        // 결제 성공 여부 랜덤으로 설정 (예시)
        if (Math.random() > 0.5) {
            this.paymentStatus = true;
            console.log('결제 성공!');
            return true;
        } else {
            this.paymentStatus = false;
            console.log('결제 실패!');
            return false;
        }
    }

    // 결제 상태 확인
    getPaymentStatus() {
        return this.paymentStatus;
    }
}

module.exports = PaymentGateway;

