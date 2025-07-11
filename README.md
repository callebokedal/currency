# Currency

Display currency

## Run
```sh
# Build
./build.sh

# Start container
podman run --name currency --rm -it -p 5174:5174 -v $(pwd)/src:/app -w /app react-dev bash

# Then start the vite server
npm run dev -- --host --port 5174

# Install dep
npm install react-router-dom

# Test for vuln
npm audit 

# Fix vuln
npm audit fix


# For building static files
npm run build
```
