#!/bin/bash

# Simple script to open the website in the default browser

echo "Opening Sorrir Para Vida website..."

# Detect OS and open browser accordingly
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open ./index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open ./index.html
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    start ./index.html
else
    echo "Unsupported OS. Please open index.html manually in your browser."
    exit 1
fi

echo "Website opened in your default browser. If it didn't open, please manually open index.html in your browser."