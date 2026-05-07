from flask import Flask, render_template

app = Flask(__name__)

posts = [

    {
        "title": "Flask Blog",
        "content": "This is my first blog using Flask."
    },

    {
        "title": "Python",
        "content": "Python is easy and powerful."
    },

    {
        "title": "Web Development",
        "content": "Flask is useful for web applications."
    }

]

@app.route("/")

def home():

    return render_template(
        "blog.html",
        posts=posts
    )

if __name__ == "__main__":

    app.run(debug=True)