from flask import Flask
from sist_sf_2024.config import Config
import os


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Importing all blueprints
    from sist_sf_2024.modules.admin import admin
    from sist_sf_2024.modules.user import user

    # Register all blueprints, setting their URL prefix
    app.register_blueprint(admin, url_prefix="/admin")
    app.register_blueprint(user, url_prefix="/")

    return app
