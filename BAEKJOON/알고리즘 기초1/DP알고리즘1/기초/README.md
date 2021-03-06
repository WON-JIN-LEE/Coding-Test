# 다이나믹 프로그래밍
## 다이나믹 프로그래밍이란?
- 다이나믹 프로그래밍은 동적 계획법이라고도 부릅니다.
- 다이나믹 프로그래밍은 문제가 다음의 조건을 만족할 때 사용할 수 있습니다.
   1. 최적 부분 구조 : 큰 문제를 작은 문제로 나눌 수 있으며 작은 문제의 답을 모아서 큰 문제를 해결할 수 있습니다.
   2. 중복되는 부분 문제 : 동일한 작은 문제를 반복적으로 해결해야 합니다.

- 점화식이란 인접한 항들 사이의 관계식을 의미합니다.
- 다이나믹 프로그래밍 구현방법은 하향식과 상향식이 있습니다.

## 메모이제이션(Memoization)
- 메모제이션은 다이나믹 프로그래밍을 구현하는 방법중 하나인 하향식 방법입니다.
- 한 번 계산한 결과를 메모리 공간에 메모하는 기법입니다.
    - 같은 문제를 다시 호출하면 메모했던 결과를 그래도 가져옵니다.
    - 값을 기록해 놓는다는 점에서 캐싱(Caching)이라고도 합니다.

## Top-down VS Bottom-Up 
- Top-down(메모이제이션) 방식은 하향식이라고도 하며 보텀업 방식은 상향식이라고도 합니다.
- 다이나믹 프로그래밍의 전형적인 형태는 Bottom-Up방식입니다.
    - 결과 저장용 리스트는 DP 테이블이라고 부릅니다.
- 엄밀히 말하면 메모이제이션은 이전에 계산된 결과를 일시적으로 기록해 놓는 넓은 개념을 의미합니다.
    - 따라서 메모이제이션은 다이나믹 프로그래밍에 국한된 개념은 아닙니다.
    - 한 번 계산된 결과를 담아 놓기만 하고 다이나믹 프로그래밍을 위해 활용하지 않을 수도 있습니다.

## 다이나믹 프로그래밍 VS 분할 정복
- 다이나믹 프로그래밍과 분활 정복은 모두 최적 부분 구조를 가질 때 사용할 수 있습니다.
    - 큰 문제를 작은 문제로 나눌 수 있으며 작은 문제의 답을 모아서 큰 문제를 해결할 수 있는 상황
- 다이나믹 프로그래밍과 분할 정복의 차이점은 부분 문제의 중복입니다.
    - 다이나믹 프로그래밍 문제에서는 각 부분 문제들이 서로 영향을 미치며 부분 문제가 중복됩니다.
    - 분할 정복 문제에서는 동일한 부분 문제가 반복적으로 계산되지 않습니다.
    - 
## 다이나믹 프로그래밍 문제에 접근하는 방법
- 주어진 문제가 다이나믹 프로그래밍 유형임을 파악하는 것이 중요합니다,
- 가장 먼저 그리디, 구현, 완전탐색 등의 아이디어로 문제를 해결할 수 있는지 검토할 수 있습니다.
    - 다은 알고리즘으로 풀이 방법이 떠오르지 않으면 다이나믹 프로그래밍을 고려해 봅시다.
- 일단 재귀 함수로 비효율적인 완전 탐색 프로그램을 작성한 뒤에 작은 문제에서 구한 담이 큰 문제에서 그대로 사용될 수 있으면, 코드를 개선하는 방법을 사용할 수 있습니다.