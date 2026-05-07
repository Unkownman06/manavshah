from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])

def bmi():

    result = ""

    if request.method == "POST":

        weight = float(request.form["weight"])

        height = float(request.form["height"])

        bmi = weight / (height * height)

        result = f"Your BMI is {round(bmi,2)}"

    return render_template(
        "bmi.html",
        result=result
    )

if __name__ == "__main__":

    app.run(debug=True)