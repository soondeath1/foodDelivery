# foodDelivery (20231385 박승찬)
배달 앱 주문 시나리오를 시퀀스 다이어그램으로 모델링한 과제

##  과제 개요

이 프로젝트는 **일상 속 소프트웨어 사용 사례**를 기반으로 한 실습 과제입니다.  
배달 앱을 사용하여 음식을 주문하는 과정을 시퀀스 다이어그램으로 모델링하고,  
해당 다이어그램을 기반으로 간단한 샘플 코드를 구현한 후, 모듈 평가를 진행하였습니다.

---

##  1. 사용 사례 설명

사용자는 배달 앱을 실행하여 음식을 메뉴에서 선택하고, 결제 후 주문을 완료합니다.  
이 과정을 소프트웨어 구조 관점에서 분석하고, 각각의 상호작용을 시퀀스 다이어그램으로 표현하였습니다.

---

##  2. 시퀀스 다이어그램

### 시퀀스 다이어그램

위 다이어그램은 [Mermaid.live](https://mermaid.live/edit#pako:eNqFkk1LI0EQhv9KU-ckTMY4H30QxIW9LoKXZS5Npo1B52M7M6wx5GQOSgIiGFExMqIIQgQ1ih78RenOf9hKRjPEuNin7nqfequK6gaUA5cDhRr_E3O_zH9UWUUwz_EJnpCJqFquhsyPyFqNi_nochjOB1d5LWKxwOu89ovVPe5HP1nE_7K646fE2Dy_tIRulKjuA1Ht69HxPpH3B0Reng9fXlXv9Quy11HtHpG3R3L_iahWMtrtpRTKCGV9TFl10R8OEjI67aIjUWdH6vEuTcng_NQ_hdXFHmbPlx8-3qvkfMYkrTs7YwYmXTnAPpOWbPdTfpbMf3ZuPQwHz9j6oWw__3ewqzfZ_36Udyo5VHsnRJ225FUnc0RqPFiGTXTcREfevKU7ghxURNUFGomY58DjwmPjJzTGqgPRBve4AxSvLhObDjh-E3Nw57-DwPtIE0Fc2QC6zrZq-IpDFwd__3HTqOC-y8VKEPsRUGtiAbQB20B1Sy_YZkk3TU2zi9qinYM6UNMuWCW9aJXsBVszNM1q5mBnUlMrGHpxwdA1y0DVtIxi8x-CgC7Q)에서 확인 가능합니다.

## 3. 코드 구성
user.js: 사용자 정보 클래스 (사용자 이름을 저장)

restaurant.js: 음식점 클래스 (음식 재고 확인 및 주문 수락)

paymentGateway.js: 결제 처리 모듈 (사용자의 결제를 처리)

app.js: 전체 주문 흐름을 관리하는 앱 클래스 (사용자가 주문하고 결제하는 과정 제어)

## 4. 모듈 평가
응집도 (Cohesion)
각 모듈은 명확한 역할을 수행합니다.

User 클래스는 사용자 정보를 관리하고,

Restaurant 클래스는 음식 재고와 주문을 처리하며,

PaymentGateway 클래스는 결제 기능을 담당합니다.

모든 클래스가 자기 역할에 충실하여 응집도가 높습니다.

결합도 (Coupling)
App 클래스가 다른 클래스들과 직접적으로 결합되어 있습니다. 이 구조는 결합도가 중간 정도이며, 모듈 간 상호작용을 명확하게 합니다.

의존성 주입을 통해 결합도를 낮추고, 확장성을 높일 수 있습니다.

## 5. 실행 방법
Node.js 환경에서 아래 명령어를 실행하여 앱을 실행할 수 있습니다.
node app.js
