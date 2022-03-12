pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'sudo npm install'
                sh 'sudo npm run build'
            }
        }
    }
}