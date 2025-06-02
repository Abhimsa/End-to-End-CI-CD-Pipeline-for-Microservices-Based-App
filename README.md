# CI/CD Pipeline for Microservices Application

## Overview
This repository contains configuration and code demonstrating a full CI/CD pipeline using GitHub Actions. It builds, tests, and deploys multiple microservices to a Kubernetes cluster.

## Technologies
- GitHub Actions (CI/CD)
- Docker & Docker Hub
- Kubernetes & kubectl
- Helm (optional for advanced deployments)
- Microservices (Node.js examples)

## Features
- Build and test microservices on push
- Docker image build and push to Docker Hub
- Kubernetes deployment automation

## Prerequisites
- Docker Hub account and repository
- Kubernetes cluster access (minikube, EKS, GKE, etc.)
- GitHub repository with secrets:
  - `DOCKERHUB_USERNAME`
  - `DOCKERHUB_TOKEN`
  - `KUBECONFIG` (base64 encoded kubeconfig file)

## Usage
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/cicd-pipeline.git
   cd cicd-pipeline
   ```
2. Update Docker Hub username in .github/workflows/ci-cd.yml

3. Push code to main branch to trigger GitHub Actions workflow

4. Monitor pipeline in GitHub Actions tab

5. Confirm deployments with:

```bash
kubectl get pods
kubectl get svc
