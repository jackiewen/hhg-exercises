pipeline {
    agent { docker { image 'node:14.19.0-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}