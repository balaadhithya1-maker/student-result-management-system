pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "student-backend"
        DOCKER_TAG = "latest"
        SCANNER_HOME = tool 'SonarScanner'
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
                    withCredentials([string(credentialsId: 'sonar-tokrn', variable: 'SONAR_TOKEN')]) {
                        sh """
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey=student-result-management-system \
                        -Dsonar.projectName=student-result-management-system \
                        -Dsonar.sources=. \
                        -Dsonar.sourceEncoding=UTF-8 \
                        -Dsonar.login=$SONAR_TOKEN
                        """
                    }
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
                sh 'docker rm -f student-backend || true'
                sh 'docker run -d --name student-backend -p 5001:5001 student-backend:latest'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
