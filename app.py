"""
Render entrypoint wrapper.

Your real Flask app lives in `backend/app.py`.
Gunicorn runs `gunicorn app:app`, so this module re-exports the Flask `app`.
"""

from backend.app import app

__all__ = ["app"]


if __name__ == "__main__":
    # Local dev entrypoint so you can run the app without gunicorn:
    #   pip install -r requirements.txt
    #   python app.py
    import os

    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=False)
