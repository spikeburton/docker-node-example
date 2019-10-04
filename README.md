# Node/Docker Example

Steps to build and run the Docker image:
---
1. Build the image and run a container:
    ```sh
    docker build --rm -t node-example .
    docker run -d -p 8000:3000 node-example
    ```
1.  Direct your browser to `http://localhost:8000`
