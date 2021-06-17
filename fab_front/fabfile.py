from fabric.api import run
from fabric.context_managers import cd


def instalacion():
    #Instalar Angular
    run('sudo npm install npm@latest -g')
    run("sudo npm install -g @angular/cli")