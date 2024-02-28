# Git - GitHub - Git Flow
## _Apuntes_

![Inkua](https://github.com/manuel14mds/inkua-it/assets/89274119/91d50c86-c384-4c02-9377-e195e242855b)

## 1. Comandos básicos de Git
Para empezar a trabajar con Git, es fundamental conocer una serie de comandos básicos que permitirán al equipo gestionar las versiones del proyecto de manera eficiente.

#### # git init:
Inicializa un nuevo repositorio Git local.
```
git init
```

#### # git status:
Muestra el estado del working directory y el staging area, permitiendo ver cambios que han sido staged, modificados, o que aún no están en tu repositorio.
```
git status
```

#### # git add:
Agrega cambios del working directory al staging area para el próximo commit.

###### Para agregar un archivo específico:
```
git add <nombre-del-archivo>
```
###### Para agregar todos los cambios:
```
git add .
```


#### # git commit:
Guarda los cambios que están en el staging area al repositorio local, con un mensaje descriptivo.
```
git commit -m "Mensaje representativo de la versión del proyecto"
```


#### # git push origin <nombre-de-la-rama>: 
Sube los cambios de la rama local al repositorio remoto.
```
git push origin main
```


#### # git pull origin <nombre-de-la-rama>: 
Actualiza la rama local con los cambios del repositorio remoto.
```
git pull origin main
```


#### # git branch --list: 
Lista todas las ramas locales en el repositorio.
```
git branch --list
```


#### # git branch <nombre-de-la-rama>:
Crea una nueva rama.
```
git branch nueva-rama
```


#### # git switch y git checkout:
###### Para cambiar a una rama existente:
```
git switch nombre-de-la-rama
```
###### O:
```
git checkout nombre-de-la-rama
```
###### Para crear una nueva rama y cambiar a ella:
```
git checkout -b nueva-rama
```



## 2. Fork a un proyecto:
El fork de un proyecto es el proceso de hacer una copia del repositorio de otro usuario a tu cuenta de GitHub para poder trabajar en ese proyecto sin afectar al repositorio original.

#### # Fork: 
Utiliza la interfaz de GitHub para hacer un "fork" del repositorio deseado.

imagen del fork
imagen de tu copia en tu github

#### # git clone: 
Clona el repositorio forkeado (que ahora está en tus repositorios de github)a tu máquina local.

imagen del la url
```
git clone <url-del-repositorio>
```

#### # git fetch vs git pull:
###### git fetch: 
Descarga los cambios del repositorio remoto, pero no los integra en tu rama de trabajo local.
```
git fetch origin <nombre-de-la-rama>
```
###### git pull:
Descarga los cambios del repositorio remoto y automáticamente intenta fusionarlos con la rama actual en tu máquina local.
```
git pull origin <nombre-de-la-rama>
```


## 3. Pull Request:
Un Pull Request (PR) es una solicitud para integrar cambios de una rama a otra dentro del mismo repositorio o en un fork de un repositorio. Se utiliza para revisar el código antes de fusionarlo.

Puedes ver el tutorial de como contribuir en un repositorio en: [Video](https://drive.google.com/file/d/1eydeAOTsdM9_RMVwy2s5OtootmB_nFH_/view?usp=drive_link).

## 4. Git Flow:
Git Flow es un modelo de ramificación para Git que define un conjunto estricto de reglas para el lanzamiento de proyectos y la gestión de ramas.

- Rama main/master: Es la rama principal donde el código en producción reside.
- Rama develop: Sirve como rama de integración para características nuevas.
- Ramas por cada pull request: Se crean para desarrollar nuevas características o corregir bugs.
- Nombre de las ramas: Utiliza una nomenclatura que incluya el tipo de tarea y las iniciales del responsable, por ejemplo: F1-feat/JCaesar
- Anatomía de un pull request: tener como titulo el nombre de la rama y como comentario decir una breve descripción de tu contribución, si es necesario aclaraciones e imágenes.
  
<img width="400" alt="GitFlow" src="https://github.com/manuel14mds/inkua-it/assets/89274119/c91f11ba-ba89-439a-8344-e84a538cb86f">




Para profundizar mas en el tema, visita el siguiente enlace: [GIT FLOW](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow).

## 5. Conflictos de código:
Los conflictos ocurren cuando dos o más desarrollos se solapan en las mismas líneas de código. Aquí te dejo una guía paso a paso para resolverlos:

1. Cambiar a la rama de pre-producción (usualmente develop):
```
git switch develop
```

2. Actualizar la rama local:
```
git pull origin develop
```

3. Cambiar de nuevo a la rama de trabajo:
```
git switch <id-ticket>-feat/<inicial nombre + apellido>
```

4. Traer los cambios desde develop y fusionar o rebase:
```
git merge develop
```
o
```
git rebase develop
```

5. Resolver los conflictos manualmente en los archivos indicados, luego agregar los cambios:
```
git add .
```

6. Finalizar el merge o rebase (si se hizo rebase) y actualizar la rama remota:
```
git push origin <id-ticket>-feat/<inicial nombre + apellido>
```
