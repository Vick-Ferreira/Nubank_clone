# Use a imagem base Node.js
FROM node:14

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo package.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do backend
RUN npm install

# Copia os diretórios Backend e Frontend
COPY Backend ./Backend
COPY Frontend ./Frontend

# Instala as dependências do Backend e do Frontend
RUN cd Backend && npm install
RUN cd Frontend && npm install

# Expõe a porta 8080
EXPOSE 8080

# Comando de inicialização
CMD ["npm", "start"]
