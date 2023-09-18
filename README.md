# SHILLING SPELLS FROM A TO Z

SHILLING SPELLS FROM A TO Z es un aplicación que te pertmite almacenar todos los hechizos de Harry Potter que desees obtener para memorizar.

## REQUIREMENTS

- Node.js
- NPM (Node Package Manager)

## INSTALL

1. Clona o descarga este repositorio.
2. Abre la carpeta de la aplicación en tu entorno de desarrollo preferido.
3. Instala las dependencias usando el siguiente comando: npm install
4. Para correr la aplicación siempre se debe anteponer el siguiente comando: npm run dev

### SHILLING SPELLS

1. Solicitar.

npm run dev -- --id=Parámetro                           | Imprime en la consola el hechizo correspondiente al id solicitado.
npm run dev -- --name=Parámetro                         | Imprime en la consola el hechizo correspondiente al nombre solicitado.
npm run dev -- --id=Parámetro --name=Parámetro          | Imprime en la consola el hechizo correspondiente al nomid y nombre solicitados.

2. Agregar.

npm run dev -- --add --id=Parámetro                     | Realiza la búsqueda del id solicitado y lo almacena en la base de datos.
npm run dev -- --add --name=Parámetro                   | Realiza la búsqueda del nombre solicitado y lo almacena en la base de datos.

3. Eliminar.

npm run dev -- --remove --id=Parámetro                  | Realiza la búsqueda del id solicitado y lo elimina en la base de datos.
npm run dev -- --remove --name=Parámetro                | Realiza la búsqueda del nombre solicitado y lo elimina en la base de datos.