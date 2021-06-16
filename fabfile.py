from fabric.api import run
from fabric.context_managers import cd

def CD():
     with cd('/home/norki/Desktop/eljenkins'): # Me Dirijo a la carpeta donde se encuentra el codigo
        run('docker-compose up -d') # levenato los contenedores
        return 0
