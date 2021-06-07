#!groovy

pipeline{
  agent any  
  stages{
    stage('Buildando o Docker'){
      agent any
      steps {
        sh 'docker build -t node.app .'
      }
    }
    
    stage('Rodar o Docker'){
      agent any
      steps {
        sh 'docker run -p 8081:8081 -d node.app'
      }
    }
    
    stage('Teste') {
      agent any
      steps {
        sh 'curl -i localhost:8081'
      }
    }
  }
  post {
    always {
      echo 'Tá de boa'
    }
    success {
      echo 'Deu tudo certo'
    }
    failure {
      echo 'Deu ruim'
    }
    unstable {
      echo 'Ficou instavel'
    }
    changed {
      echo 'Houve mudanca'
    }
  }
}
