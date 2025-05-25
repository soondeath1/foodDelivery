
class Restaurant {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu; // 메뉴는 {아이템명: 수량} 형식으로 저장됩니다.
    }

    // 재고 확인 함수
    checkStock(item, quantity) {
        if (!this.menu[item]) {
            console.log(`${item}는 메뉴에 없습니다.`);
            return false;
        }
        if (this.menu[item] < quantity) {
            console.log(`${item}의 재고가 부족합니다.`);
            return false;
        }
        console.log(`${item}의 재고는 충분합니다.`);
        return true;
    }

    // 재고 업데이트 함수
    updateStock(item, quantity) {
        if (this.menu[item]) {
            this.menu[item] -= quantity;
            console.log(`${item}의 재고가 ${quantity}만큼 차감되었습니다.`);
        } else {
            console.log(`${item}는 메뉴에 없습니다.`);
        }
    }
}

module.exports = Restaurant;


