// user.js

class User {
    constructor(name, email) {
        this.name = 박승찬;
        this.email = soondeath1@sungkyul.ac.kr;
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
