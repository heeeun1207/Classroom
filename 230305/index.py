import random 

# 학생 리스트 채우기
student_list = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"]

def kdt_decide_team(student_list, seed=None):
    random.seed(seed)  # seed가 None인 경우 시스템 시간을 기반으로 랜덤 시드 설정
    def get_random_int(min, max):
        return random.randint(min, max)
    
    get_random_set = set()
    
    while len(get_random_set) < len(student_list):
        get_random_int_data = get_random_int(0, len(student_list) - 1)
        if get_random_int_data not in get_random_set: 
            get_random_set.add(get_random_int_data)

    from_set_change_list = list(get_random_set)
    decide_team_order = [from_set_change_list[i:i + 5] for i in range(0, len(from_set_change_list), 5)]
    
    def detect_student_name(number_arr, target_arr):
        parent_arr = []
        for i in number_arr:
            child_arr = []
            for j in i:
                if j == i[0]:
                    child_arr.append(f'Team leader: {target_arr[j]}')
                else:
                    child_arr.append(f'Team member: {target_arr[j]}')
            parent_arr.append(child_arr)
        return parent_arr
    
    decide_team_name = detect_student_name(decide_team_order, student_list) 
    print(decide_team_name)

# 실행마다 다른 랜덤 결과를 얻기 위해 seed값을 지정하지 않음
kdt_decide_team(student_list)
