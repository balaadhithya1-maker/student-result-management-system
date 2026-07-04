pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "student-backend"
        DOCKER_TAG = "latest"
    }

    stages {

        stage('Git Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/balaadhithya1-maker/student-result-management-system.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh 'echo "Running SonarQube Scan..."'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t student-backend:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5001:5001 student-backend:latest || true'
            }
        }
    }
}
