pipeline {
    agent { 
        docker {
            image 'node:6.3' 
            args '-u 0:0'
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

    post {
        success {
            script { 
                setGitHubPullRequestStatus context: "Build successful", message: 'Build Successful', state: 'SUCCESS'
            }
        }

        failure {
            script {
                setGitHubPullRequestStatus context: "Build Failure", message: 'Build Failure', state: 'FAILURE'
            }
        }
    }
}