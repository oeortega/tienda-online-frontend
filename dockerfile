# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Limpia el caché de npm
RUN npm cache clean --force

# Instala las dependencias
RUN npm install --legacy-peer-deps    


# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
