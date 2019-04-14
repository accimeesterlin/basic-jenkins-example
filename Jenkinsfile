pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                echo 'Running npm install'
                sh '
                    npm install
                    npm test
                '
            }
        }
    }
}