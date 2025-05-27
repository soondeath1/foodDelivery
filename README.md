# foodDelivery (20231385 박승찬)
배달 앱 주문 시나리오를 시퀀스 다이어그램으로 모델링한 과제

##  과제 개요

이 프로젝트는 **일상 속 소프트웨어 사용 사례**를 기반으로 한 실습 과제이다.  
배달 앱을 사용하여 음식을 주문하는 과정을 시퀀스 다이어그램으로 모델링하고,  
해당 다이어그램을 기반으로 간단한 샘플 코드를 구현한 후, 모듈 평가를 진행했다.

---

##  1. 사용 사례 설명

사용자는 배달 앱을 실행하여 음식을 메뉴에서 선택하고, 결제 후 주문을 완료한다.  
이 과정을 소프트웨어 구조 관점에서 분석하고, 각각의 상호작용을 시퀀스 다이어그램으로 표현했다.

---

##  2. 시퀀스 다이어그램

### 시퀀스 다이어그램

다이어그램 설명
1. User가 App을 실행하고 로그인한다.

2. User는 메뉴에서 음식을 선택하고 App에 전달한다.

3. App은 선택된 메뉴에 대해 Restaurant에 재고를 확인 요청한다.

4. Restaurant은 재고가 있음을 App에 응답한다.

5. User는 결제를 요청하고, App은 결제 정보를 PaymentGateway로 전달한다.

6. PaymentGateway는 결제 성공 여부를 App에 응답한다.

7. App은 결제가 성공적으로 이루어졌음을 확인하고, Restaurant에 주문을 전달한다.

8. Restaurant은 주문을 접수하고 App에 완료 응답을 보낸다.

9. App은 User에게 주문 완료 알림을 표시한다.



다이어그램은 [Mermaid.live](https://mermaid.live/edit#pako:eNqFkk1LI0EQhv9KU-ckTMY4H30QxIW9LoKXZS5Npo1B52M7M6wx5GQOSgIiGFExMqIIQgQ1ih78RenOf9hKRjPEuNin7nqfequK6gaUA5cDhRr_E3O_zH9UWUUwz_EJnpCJqFquhsyPyFqNi_nochjOB1d5LWKxwOu89ovVPe5HP1nE_7K646fE2Dy_tIRulKjuA1Ht69HxPpH3B0Reng9fXlXv9Quy11HtHpG3R3L_iahWMtrtpRTKCGV9TFl10R8OEjI67aIjUWdH6vEuTcng_NQ_hdXFHmbPlx8-3qvkfMYkrTs7YwYmXTnAPpOWbPdTfpbMf3ZuPQwHz9j6oWw__3ewqzfZ_36Udyo5VHsnRJ225FUnc0RqPFiGTXTcREfevKU7ghxURNUFGomY58DjwmPjJzTGqgPRBve4AxSvLhObDjh-E3Nw57-DwPtIE0Fc2QC6zrZq-IpDFwd__3HTqOC-y8VKEPsRUGtiAbQB20B1Sy_YZkk3TU2zi9qinYM6UNMuWCW9aJXsBVszNM1q5mBnUlMrGHpxwdA1y0DVtIxi8x-CgC7Q)에서 확인할 수 있다.

## 3. 코드 구성
app.js: 애플리케이션의 주요 흐름과 주문 처리 로직을 담당한다.

user.js: 사용자 관련 데이터와 알림 기능을 담당한다.

restaurant.js: 레스토랑의 메뉴 및 재고 확인 기능을 담당한다.

paymentGateway.js: 결제 게이트웨이와의 통신을 담당한다.

## 4. 모듈 평가
### 1. `app.js`
- **역할**: 배달 앱의 주요 흐름을 처리하는 모듈로, 사용자 로그인, 메뉴 선택, 결제 요청, 주문 요청 등의 기능을 처리한다.
- **응집도**: 응집도는 매우 높다. `app.js`는 애플리케이션의 주요 흐름을 제어하므로, 관련된 모든 로직을 한 곳에서 처리합니다. 여러 기능을 하나의 흐름으로 연결하며, 각 함수들이 서로 밀접하게 연관되어 있다.
- **결합도**: 결합도는 중간 정도이다. `app.js`는 `user.js`, `restaurant.js`, `paymentGateway.js`와 상호작용하지만, 각 모듈은 `app.js`와 명확한 인터페이스로 연결되어 있으므로 결합도는 높지 않다.

### 2. `user.js`
- **역할**: 사용자와 관련된 데이터 처리 및 알림 기능을 담당한다. 예를 들어, 사용자의 로그인 처리와 결제 성공/실패 알림을 담당한다.
- **응집도**: 응집도는 높다. `user.js`는 오로지 사용자 관련 데이터와 알림에 관한 기능만 처리하므로, 응집도가 매우 높다.
- **결합도**: 결합도는 낮다. `user.js`는 다른 모듈과의 상호작용이 적고, 독립적으로 사용자 데이터를 관리합니다. `app.js`로부터 호출되지만, 외부와의 의존성은 적다.

### 3. `restaurant.js`
- **역할**: 레스토랑의 메뉴와 재고를 관리하며, 음식 주문을 처리한다.
- **응집도**: 응집도는 높다. `restaurant.js`는 음식의 재고 확인 및 주문 처리를 전문으로 담당하므로 응집도가 높다.
- **결합도**: 결합도는 중간 정도이다. `restaurant.js`는 `app.js`와 상호작용하여 주문을 처리하지만, 외부와의 의존성은 적다. `app.js`가 호출하는 방식으로 간접적으로 연결된다.

### 4. `paymentGateway.js`
- **역할**: 결제 처리를 담당한다. 결제 정보가 올바른지 확인하고, 결제 성공/실패에 따른 응답을 반환한다.
- **응집도**: 응집도는 매우 높다. 결제와 관련된 모든 로직을 `paymentGateway.js`에서 처리하므로 응집도가 매우 높다.
- **결합도**: 결합도는 낮다. `paymentGateway.js`는 결제 처리만 담당하며, `app.js`로부터 요청을 받는다. 외부와의 의존성이 적고, 다른 모듈과 독립적으로 운영된다.

### 종합 평가
- 각 모듈은 **높은 응집도**를 가지고 있으며, 각각의 모듈은 독립적인 기능을 담당하고 있어 **유지보수 및 확장성**이 용이하다.
- **결합도**는 전반적으로 낮거나 중간 정도이며, 이는 각 모듈이 독립적으로 작동할 수 있도록 설계되어 있음을 의미한다. 그러나 `app.js`와 다른 모듈 간의 상호작용이 중요한 부분에서는 결합도가 어느 정도 존재한다.

  

