# CI/CD Pipeline for Microservices-Based Application

## Overview
This project implements an automated CI/CD pipeline using GitHub Actions to build, test, and deploy microservices to a Kubernetes cluster.

## Technologies Used
- GitHub Actions
- Docker
- Kubernetes
- Helm

## Features
- Automated build and test on code push
- Docker image creation and push to Docker Hub
- Helm-based deployment to Kubernetes

## Setup Instructions
1. Configure GitHub Secrets for:
   - DOCKERHUB_USERNAME
   - DOCKERHUB_TOKEN
   - KUBECONFIG (base64 encoded)
2. Push code to trigger GitHub Actions workflow
3. Verify deployment in Kubernetes cluster

## Folder Structure
/cicd-pipeline
├── .github/workflows/ci-cd.yml
├── k8s/
│ ├── deployment.yaml
│ └── service.yaml
├── services/
│ ├── service1/
│ │ └── Dockerfile
│ └── service2/
│ └── Dockerfile
└── README.md
