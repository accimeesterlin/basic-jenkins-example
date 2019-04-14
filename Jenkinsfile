pipeline {
    agent { 
        docker {
            image 'node:6.3' 
            args '-v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Production') {
            steps {
                echo 'App finished'
            }
        }
    }
}