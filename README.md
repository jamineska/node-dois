# PRACTICA API

API REST desarrollada con Node.js y Express bajo arquitetura modular (rutas y controladores) para la gestión CRUD de productos y servicios.

##puesta en marcha
1. Clona el repositorio:

```bash
git clone https://github.com

```
2. Instala dependencias

```bash
    npm i
```
3. Renombra el archivo .env.template por .env y sustituye los datos

```javaScript

PORT=''el nuemro del puerto
API_KEY='la apikey de xxxx'

```
4. Arranca el servidor en modo desarrollo:
```bash
npm run dev
```
## Endpoints disponibles (`http://localhost:<PORT>/api/v1`)

* **Productos:** `GET /productos` | `GET /productos/:id` | `POST /productos` | `PUT /productos/:id` | `DELETE /productos/:id`
* **Servicios:** `GET /servicios` | `GET /servicios/:id` | `POST /servicios` | `PUT /servicios/:id` | `DELETE /servicios/:id`