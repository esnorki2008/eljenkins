pipeline {
    agent any
    stages {
        stage('Build') { 
            agent {
                label 'master'
            }
            steps {
                echo 'detener, eliminar, construir con docker-compose'
                sh 'docker-compose down'
                sh 'docker-compose build'
            }

        }
    
        
    stage('Test') {
            agent {
                label 'master'
            } 
            steps {
                echo 'Prueba en el backend utilizando mocha'
                dir('backend'){
                    sh 'npm install'
                    sh 'npm test'
                }
                echo 'Prueba finalizada'
            }
        }

    stage('Deploy') { 
            
            agent {
                label 'master'
            }
            steps {
                echo 'Iniciando Servidores con fabric'
                sh 'fab -H localhost -p 2014  CD'
                echo 'Servidores finalizados con fabric' 
            }
        }
    }
}