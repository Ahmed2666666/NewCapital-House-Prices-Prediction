from flask import Flask, request, jsonify
import util

app = Flask(__name__)


@app.route("/predict_home_price", methods=['GET', 'POST'])
def predict_home_price():
    area = int(request.form.get('area'))
    bedroom = int(request.form.get('bedroom'))
    bathroom = int(request.form.get('bathroom'))
    floor = int(request.form.get('floor'))
    services = int(request.form.get('services'))
    furnished = int(request.form.get('furnished'))
    hotel = int(request.form.get('hotel'))
    compound = int(request.form.get('compound'))
    response = jsonify(
        {'predicted_price': util.get_predicted_price(area, bedroom, bathroom, floor, services, furnished, hotel,
                                                     compound)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run()
