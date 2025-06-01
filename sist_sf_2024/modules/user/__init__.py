from flask import Blueprint, jsonify, render_template, request, redirect, url_for, flash
from sist_sf_2024.models import create_mongo_client
from bson import ObjectId

mongo_client = create_mongo_client()
db = mongo_client.get_database("SISTStartupFest2024")

user = Blueprint('user', __name__)


@user.route("/")
def user_index():
    return render_template("user/user_index.html")

@user.route("/round-table")
def round_table():
    return render_template("user/round_table.html")

@user.route("/tech-talks")
def tech_talks():
    return render_template("user/tech_talks.html")

@user.route("/mou-singing")
def mou_singing():
    return render_template("user/mou_singing.html")

@user.route("/bootcamps")
def bootcamps():
    return render_template("user/bootcamps.html")

@user.route("/startup-showcase")
def startup_showcase():
    return render_template("user/startup_showcase.html")

@user.route("/tech-exhibits")
def tech_exhibits():
    return render_template("user/tech_exhibits.html")

@user.route("/master-class")
def master_class():
    return render_template("user/master_class.html")

@user.route("/ideathons")
def ideathons():
    return render_template("user/ideathons.html")

@user.route("/investor-connect")
def investor_connect():
    return render_template("user/investor_connect.html")

@user.route("/intern-connect")
def intern_connect():
    return render_template("user/intern_connect.html")


@user.route("/register/<collection_name>", methods=["GET", "POST"])
def register(collection_name):
    if request.method == "POST":
        collection = db.get_collection(collection_name)
        name = request.form.get("name")
        email = request.form.get("email")
        phone_number = request.form.get("phno")
        if collection_name == "event_visitors":
            registered_for = "Visiting"
        else:
            registered_for = collection_name.replace("_"," ").title()
        data = {"name": name, "email": email, "phone_number": phone_number, "registered_for": registered_for}
        collection.insert_one(data)
        return redirect(url_for("user.user_index"))
    else:
        return redirect(url_for("user.user_index"))