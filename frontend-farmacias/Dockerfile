# Etapa 1: Construcción de la aplicación
FROM node:20 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json (o yarn.lock)
COPY package.json ./
COPY package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . ./

# Genera los archivos estáticos de producción
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copia los archivos de producción desde la etapa anterior
COPY --from=build /app/out /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
