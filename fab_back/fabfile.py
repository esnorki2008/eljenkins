from fabric.api import run
from fabric.context_managers import cd


def instalacion():
    #Instalar Jenkins
    run('wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -')
    run("sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'")
    run('sudo apt update')
    run('sudo apt install jenkins')
    #Iniciar Jenkins
    run('sudo systemctl start jenkins')
    #Instalar Docker
    run('sudo apt install docker.io)
    #Instalar Docker-Compose
    run('sudo apt install docker-compose')
    #Instalar NodeJs
    run('sudo apt install nodejs')