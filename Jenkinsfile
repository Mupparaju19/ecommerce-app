pipeline {
    agent any
    environment {
        DOCKER_IMAGE_FRONTEND = 'murali54321/frontend:latest'
        DOCKER_IMAGE_BACKEND = 'murali54321/backend:latest'
        KUBE_CONTEXT = 'your-kube-context'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_FRONTEND, './frontend')
                }
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_BACKEND, './backend')
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image(DOCKER_IMAGE_FRONTEND).push()
                        docker.image(DOCKER_IMAGE_BACKEND).push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl config use-context $KUBE_CONTEXT"
                    sh "kubectl apply -f kubernetes/frontend-deployment.yaml"
                    sh "kubectl apply -f kubernetes/backend-deployment.yaml"
                    sh "kubectl apply -f kubernetes/ingress.yaml"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
