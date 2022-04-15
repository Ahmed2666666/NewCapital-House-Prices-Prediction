import json
import pickle
import numpy as np

__data_columns = None
__model = None


def get_predicted_price(area, bedroom, bathroom, floor, services, furnished, hotel, compound):
    x = np.zeros(len(__data_columns))
    x[0] = area
    x[1] = bedroom
    x[2] = bathroom
    x[3] = floor
    x[4] = services
    x[5] = furnished
    x[6] = hotel
    x[7] = compound
    return round(__model.predict([x])[0], 2)


def load_saved_artifacts():
    print("loading saved artifacts....start")
    global __data_columns
    with open("./artifacts/columns.json", 'r') as f:
        __data_columns = json.load(f)['data_columns']
    global __model
    if __model is None:
        with open("./artifacts/newCapital_home_prices_model.pickle", 'rb') as f:
            __model = pickle.load(f)
    print("Loading artifacts is done ")


def get_data_columns():
    return __data_columns


if __name__ == '__main__':
    load_saved_artifacts()
    print(get_predicted_price(150, 3, 3, 3, 1, 0, 0, 1))
    print(get_data_columns())
