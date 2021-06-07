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
                echo 'Iniciando Servidores'
                sh 'docker-compose up -d'
                echo 'Servidores finalizados'
            }
        }
    }
}