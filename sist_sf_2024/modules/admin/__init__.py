from flask import Blueprint, render_template
from sist_sf_2024.models import create_mongo_client

# Assuming create_mongo_client returns MongoClient instance
mongo_client = create_mongo_client()
db = mongo_client.get_database("SISTStartupFest2024")

# Get collections
collections = {
    "round_table": "round_table",
    "tech_talks": "tech_talks",
    "mou_singing": "mou_singing",
    "bootcamps": "bootcamps",
    "startup_showcase": "startup_showcase",
    "tech_exhibits": "tech_exhibits",
    "master_class": "master_class",
    "ideathons": "ideathons",
    "investor_connect": "investor_connect",
    "intern_connect": "intern_connect",
    "event_visitors": "event_visitors"
}

# Blueprint definition
admin = Blueprint('admin', __name__)

@admin.route("/")
def admin_landing():
    return render_template("admin/admin_landing.html")

# Define a function to handle fetching data and rendering template for a given collection
def render_collection_template(collection_name):
    collection = db.get_collection(collection_name)
    details = list(collection.find({}))
    return render_template("admin/admin_events.html", details=details, collection_name=collection_name)

# Define routes for each collection
for collection_name, route_name in collections.items():
    def collection_route(collection_name=collection_name):
        return render_collection_template(collection_name)
    
    # Create a unique function name by combining the prefix 'collection_route_' with the route_name
    function_name = f"{route_name}"
    
    # Set the route using the unique function name
    admin.route(f'/{route_name}')(collection_route)
    # Rename the function to avoid conflicts
    collection_route.__name__ = function_name
