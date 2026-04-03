"""
Render entrypoint wrapper.

Your real Flask app lives in `backend/app.py`.
Gunicorn runs `gunicorn app:app`, so this module re-exports the Flask `app`.
"""

from backend.app import app

__all__ = ["app"]

