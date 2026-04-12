---
layout: post
title: "Top 10 Docker Best Practices for Developers"
date: 2025-07-09
author: s!rr0nn3y
categories:
  - docker
  - security
  - development
---
When working with Docker, following best practices can lead to more efficient, secure, and maintainable containers. Here are some top tips:

## 1. Use Small Base Images

Choose minimal base images like `alpine` to reduce image size and potential attack surfaces.

```Dockerfile
FROM node:20-alpine
```

## 2. Leverage Multi-Stage Builds

Multi-stage builds allow you to separate build-time dependencies from your final image.
This not only reduces image size, but also improves security by ensuring that tools like compilers, package managers (e.g., npm, pip), and source code are not included in the final production image—minimizing the attack surface and reducing the risk of vulnerabilities.

```Dockerfile
# Stage 1: Build Stage using Node.js
FROM node:20 AS build              # Use official Node.js v20 image as the base for building
WORKDIR /app                       # Set the working directory inside the container to /app
COPY . .                           # Copy all files from your project folder into the container
RUN npm install && npm run build  # Install dependencies and build the project (e.g., React/Vue build)

# Stage 2: Production Stage using Nginx
FROM nginx:alpine                 # Use a lightweight Nginx image to serve the built app
COPY --from=build /app/dist /usr/share/nginx/html  
# Copy the final built files from the first stage into Nginx's default HTML directory

```

## 3. Avoid Running as Root

Add and switch to a non-root user for improved security.

```Dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser
```
`addgroup -S appgroup` this Creates a system group named appgroup
`adduser -S appuser -G appgroup` this Creates a system user named appuser and adds them to the appgroup 
`USER appuser` this Switches the active user to appuser for all remaining Dockerfile commands and at container runtime

## 4. Minimize Layers

Group related commands with `&&` to reduce the number of layers.

```Dockerfile
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*
```

## 5. Use .dockerignore

Exclude unnecessary files from the Docker context to speed up builds.

```
node_modules
.git
Dockerfile
README.md
```

## 6. Pin Image Versions

Avoid using `latest` tags in production. Instead, pin to a specific version for predictability.

```Dockerfile
FROM python:3.11.4-slim
```

## 7. Clean Up After Yourself

Remove caches and temp files during build to reduce image size.

```Dockerfile
RUN pip install -r requirements.txt && \
    rm -rf /root/.cache/pip
```

## 8. Scan Your Images

Use tools like Docker Scout, Trivy, or Snyk to scan for vulnerabilities.

## 9. Use Healthchecks

Define healthchecks to monitor the container’s internal state.

```Dockerfile
HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1
```

## 10. Keep Containers Immutable

Don't store application state inside containers. Use volumes or external storage instead.

## Summary

These practices help you:

- Reduce image size
- Improve security
- Increase performance
- Simplify CI/CD and production deployment

Always keep learning and refining your Dockerfiles—small tweaks can lead to big improvements.
