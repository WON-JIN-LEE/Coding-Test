import math
from collections import deque
import sys
input = sys.stdin.readline

# 데크 (5번 시간초과)


def solution(bridge_length, weight, truck_weights):
    time = 0
    queue = deque([0]*bridge_length)
    waiting = deque(truck_weights)  # 대기 트럭 큐
    while len(queue):
        time += 1
        queue.popleft()

        if waiting:
            if sum(queue) + waiting[0] <= weight:
                queue.append(waiting.popleft())
            else:
                queue.append(0)
    return time

# 리스트


def solution2(bridge_length, weight, truck_weights):
    time = 0
    queue = [0]*bridge_length

    while len(queue):
        time += 1
        queue.pop(0)

        if truck_weights:
            if sum(queue) + truck_weights[0] <= weight:
                queue.append(truck_weights.pop(0))
            else:
                queue.append(0)
    return time


# 데크
def solution3(bridge_length, weight, truck_weights):
    time = 0
    weightOnBridge = 0
    # 큐 [트럭무게, 얘가 나갈 시간].
    queue = deque([[0, 0]]*bridge_length)
    print(queue)

    waiting = deque(truck_weights)  # 대기 트럭 큐

    while len(queue) > 0 or len(waiting) > 0:
        if queue[0][1] == time:
            weightOnBridge -= queue.popleft()[0]

        if len(waiting) > 0 and weightOnBridge + waiting[0] <= weight:
            weightOnBridge += waiting[0]
            queue.append([waiting.popleft(), time + bridge_length])
        else:
            if len(queue) > 0 and queue[0]:
                time = queue[0][1]-1
        time += 1
    return time

# 기능개발
# 2번 9번 실패


def solution(progresses, speeds):
    answer = []
    # index()메서드를 사용하면 중복된 요소가 있을 경우 맨 앞 요소의 인덱스를 추출하는 문제

    progresses = [-(((p-100)//s)) for p, s in zip(progresses, speeds)]

    point = 0
    count = 1
    for i in range(1, len(progresses)):
        if progresses[point] >= progresses[i]:
            count += 1
        else:
            answer.append(count)

        if progresses[point] < progresses[i]:
            count = 1
            point = i
    answer.append(len(progresses) - point)
    return answer


def solution5(progresses, speeds):
    answer = []
    # progresses = [math.ceil((100 - a) / b) for a, b in zip(progresses, speeds)]
    progresses = [-(((p-100)//s)) for p, s in zip(progresses, speeds)]

    front = 0
    for idx in range(len(progresses)):
        if progresses[idx] > progresses[front]:
            answer.append(idx - front)
            front = idx

        print(front)

    answer.append(len(progresses) - front)
    return answer


if __name__ == '__main__':

    # 입력값 받아오기
    # n = int(input())
    # print(get_card(n))

    print(math.ceil(70/30))

    # queue = solution3(2, 10, [7, 4, 5, 6])
    # print("answer:", queue)

    queue = solution4([93, 30, 55], [1, 30, 5])
    print("answer:", queue)
