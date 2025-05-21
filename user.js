// user.js

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // 알림 보내기
    notify(message) {
        console.log(`사용자 ${this.name} (${this.email})에게 알림: ${message}`);
    }

    // 사용자 정보 출력
    getUserInfo() {
        return `사용자: ${this.name}, 이메일: ${this.email}`;
    }
}

module.exports = User;
