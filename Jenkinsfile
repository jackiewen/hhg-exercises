pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm cache clear --force'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}