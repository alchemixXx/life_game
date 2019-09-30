test_dict = {
    0: [0, 0, 0, 0, 0],
    1: [0, 1, 1, 0, 0],
    2: [1, 0, 0, 1, 0],
    4: [0, 0, 1, 0, 0],
    5: [1, 0, 1, 0, 0],
    6: [0, 1, 1, 0, 0],
    7: [1, 0, 1, 0, 0],
    8: [0, 0, 1, 0, 0],
}


def testing_func(data: dict):
    result_dict = {k: [0 for _ in range(len(data[0]))] for k in data}
    for row, values in data.items():
        new_life(data, row, result_dict)
        try:
            result = [i for i, x in enumerate(data[row]) if x == 1]
            if result:
                print('There is True. Its index is', result)
        except ValueError:
            continue
    print(result_dict)
    return data


def new_life(data: dict, row: int, result_dict: dict):

    for cell_index in range(len(data[row])):
        counter = 0
        for rows in range(-1, 2):
            for cells in range(-1, 2):
                try:
                    checked_cell = data[row + rows][cell_index + cells]
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


def cell_is_dying(data: dict, row: int, result: list):
    pass


if __name__ == '__main__':
    testing_func(test_dict)

