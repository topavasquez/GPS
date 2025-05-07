# Etapa 1: Construcción de la aplicación
FROM maven:3.9.0-eclipse-temurin-17 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y descarga las dependencias
COPY pom.xml .
RUN mvn clean install -DskipTests

# Copia el código fuente
COPY src /app/src

# Compila el proyecto
RUN mvn clean package -DskipTests

# Etapa 2: Creación de la imagen final
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo JAR construido desde la etapa anterior
COPY --from=build /app/target/usuarios-servicio-0.0.1-SNAPSHOT.jar /app/usuarios-servicio.jar

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando para ejecutar el microservicio
CMD ["java", "-jar", "/app/usuarios-servicio.jar"]
