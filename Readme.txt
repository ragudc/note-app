Instrucciones para instalar y ejecutar

El proyecto esta hecho el Backend en Node Js, la base en Mongo en DB y Front-End en Boostrap 4

A continuacion se encuentra la documentación completa para instalar y ejecutar el proyecto de forma correcta

1- Descargar node js del siguiente enlace o sitio web:
https://nodejs.org/es/

2- Instalar node js 

Agregar Node.Js PPA

Antes de instalar la última versión de Node.js, debe agregar su PPA a Ubuntu ... Este repositorio es proporcionado por el paquete oficial. Para agregar el repositorio, ejecute los siguientes comandos.

sudo apt install curl

Hay dos repositorios que puede instalar, un repositorio contiene los últimos paquetes de Node.js y el otro tiene los paquetes LTS o (Soporte a largo plazo) Si necesita lo último y lo mejor, instale el primer repositorio

Por otro lado, si necesita paquetes Node.js más estables y probados, instale el repositorio LTS ...

Luego, para el último lanzamiento, agregue este PPA.

curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

Para instalar la versión LTS , use este PPA

curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -

Después de eso, ahora puede instalar la última versión de Node.js desde el repositorio en particular que elija, Si agrega ambos repositorios, se instalará la última versión de Node.js y no el LTS .

Paso 2: Instala Node.Js Y NPM

Para instalar, ejecute los siguientes comandos

sudo apt install nodejs

Después de la instalación, tanto los módulos Node.js como NPM deben estar instalados y listos para usar.

Puede usar los siguientes comandos para ver el número de versión instalada, escriba los siguientes comandos desde la aplicación terminal
en Ubuntu y paso seguido digite la tecla enter de su computador.

node -v
npm -v

Listo aqui finaliza la instalación del paquete Node Js en Ubuntu

Instalar y configurar el motor de base de datos Mongo DB

Pasos

Antes de proceder con la instalación de MongoDB, debera de ingresar a la consola o terminal de Ubuntu como usuario Administrador o Root
copiar el siguiente comando

sudo -i

1- Importe la clave pública utilizada por el sistema de gestión de paquetes

Las herramientas de administración de paquetes de Ubuntu (es decir, dpkgy apt) aseguran la consistencia y autenticidad del paquete al requerir que los distribuidores firmen los paquetes con claves GPG. Ejecute el siguiente comando para importar la clave GPG pública de MongoDB

sudo apt-key adv --keyserver hkp: //keyserver.ubuntu.com: 80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

2- Crear un archivo de lista para MongoDB

Crea el archivo de lista /etc/apt/sources.list.d/mongodb-org-4.0.listpara tu versión de Ubuntu.

echo  "deb [arch = amd64, arm64] https://repo.mongodb.org/apt/ubuntu xenial / mongodb-org / 4.0 multiverse"  | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

3- Recargar la base de datos del paquete local.

Ejecute el siguiente comando para volver a cargar la base de datos del paquete local:

sudo apt-get update

4- Instala los paquetes de MongoDB.

sudo apt-get install -y mongodb-org = 4 .0.4 mongodb-org-server = 4 .0.4 mongodb-org-shell = 4 .0.4 mongodb-org-mongos = 4 .0.4 mongodb-org-tools = 4 .0.4

5- Iniciar MongoDB

Ejecute el siguiente com6- Comience a usar MongoDBando para iniciar mongod:

sudo service mongod start

6- Comience a usar MongoDB

mongo || mongod

Instale los siguiente paquetes o depencias de Node Js desde la terminal de Ubuntu

npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash

npm i nodemon -D

mkdir config helpers models public routes views

por ultimo para poner a correr el proyecto colocar el siguiente comando en la terminal de ubuntu y paso seguido presionar la
tecla Enter

npm run dev

para ver el proyecto ejecutandose correctamente ingresar en el navegador web a la siguiente dirección

http://localhost:3000/




