pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/ReactJS_master/'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}