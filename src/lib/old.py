test_dict = {
    0: [0, 0, 0, 0, 0],
    1: [0, 1, 1, 0, 0],
    2: [1, 0, 0, 1, 0],
    3: [0, 0, 1, 0, 0],
    4: [1, 1, 1, 0, 0],
    5: [0, 1, 1, 0, 0],
    6: [1, 0, 1, 0, 0],
    7: [0, 0, 1, 0, 0],
}


def testing_func(data: dict):
    result_dict_new_life = {k: [0 for _ in range(len(data[0]))] for k in data}
    result_dict_sill_live = {k: [0 for _ in range(len(data[0]))] for k in data}
    result_dict = {k: [0 for _ in range(len(data[0]))] for k in data}
    for row, _ in data.items():
        new_life(data, row, result_dict_new_life)
        cell_is_still_alive(data, row, result_dict_sill_live)
    for row in data.keys():
        for cell in range(len(data[row])):
            if result_dict_new_life[row][cell] or result_dict_sill_live[row][cell]:
                result_dict[row][cell] = 1

    print("New life")
    for item in result_dict_new_life.values():
        print(item)
    print('Still alive')
    for item in result_dict_sill_live.values():
        print(item)
    print('Result dict')
    for item in result_dict.values():
        print(item)
    return data


def new_life(data: dict, row: int, result_dict: dict):
    for cell_index in range(len(data[row])):
        counter = 0
        for rows in range(-1, 2):
            for cells in range(-1, 2):
                checked_row_number, checked_cell_index = condition_func(
                    row, rows, cell_index, cells, data)
                try:
                    checked_cell = data[checked_row_number][checked_cell_index]
                    if data[row][cell_index] == 1:
                        continue
                    if cells == 0 and rows == 0:
                        continue
                    if checked_cell == 1:
                        counter += 1
                except IndexError:
                    pass
                except KeyError:
                    pass
        if counter == 3:
            result_dict[row][cell_index] = 1
    return result_dict


def cell_is_still_alive(data: dict, row: int, result: dict):
    for cell_index in range(len(data[row])):
        counter = 0
        for rows in range(-1, 2):
            for cells in range(-1, 2):
                checked_row_number, checked_cell_index = condition_func(
                    row, rows, cell_index, cells, data)
                try:
                    checked_cell = data[checked_row_number][checked_cell_index]
                    if data[row][cell_index] == 1:
                        if cells == 0 and rows == 0:
                            continue
                        if checked_cell == 1:
                            counter += 1
                except IndexError:
                    pass
                except KeyError:
                    pass
        if counter == 3 or counter == 2:
            result[row][cell_index] = 1
        else:
            result[row][cell_index] = 0
    return result


def condition_func(row, rows, cell_index, cells, data):
    checked_row_number = row + rows
    checked_cell_index = cell_index + cells
    if checked_row_number < 0:
        checked_row_number = len(data)
    elif checked_row_number > len(data):
        checked_row_number = 0
    if checked_cell_index < 0:
        checked_cell_index = len(data[row])
    elif checked_cell_index > len(data[row]):
        checked_cell_index = 0
    return checked_row_number, checked_cell_index


if __name__ == '__main__':
    testing_func(test_dict)
