from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])

def weather():

    result = ""

    if request.method == "POST":

        city = request.form["city"]

        # Dummy weather data
        result = f"Weather in {city}: 30°C, Clear Sky"

    return render_template(
        "weather.html",
        result=result
    )

if __name__ == "__main__":

    app.run(debug=True)