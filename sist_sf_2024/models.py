from pymongo import MongoClient
from sist_sf_2024.config import Config
import os


def create_mongo_client(mongo_uri=Config.MONGO_URI):
    if not mongo_uri:
        raise ValueError("MongoDB URI not found in Config")
    client = MongoClient(mongo_uri)
    return client
