#!/usr/bin/env python3
"""Serve the cloned SEED demo locally (SPA-aware fallback to index.html)."""

from __future__ import annotations

import argparse
import functools
import http.server
import os
import socketserver
from pathlib import Path

DEMO_DIR = Path(__file__).resolve().parent / "37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro"


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str | None = None, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            index = os.path.join(path, "index.html")
            if os.path.exists(index):
                self.path = self.path.rstrip("/") + "/index.html"
        elif not os.path.exists(path):
            self.path = "/index.html"
        return super().do_GET()


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the SEED demo locally")
    parser.add_argument("--port", "-p", type=int, default=8765)
    parser.add_argument("--host", default="127.0.0.1")
    args = parser.parse_args()

    if not DEMO_DIR.is_dir():
        raise SystemExit(f"Demo folder not found: {DEMO_DIR}")

    handler = functools.partial(SPAHandler, directory=str(DEMO_DIR))
    with socketserver.TCPServer((args.host, args.port), handler) as httpd:
        url = f"http://{args.host}:{args.port}/"
        print(f"Serving SEED demo at {url}")
        print("Press Ctrl+C to stop.")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
