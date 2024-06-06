FROM node:14

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo package.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do backend
RUN npm install

# Copia os diretórios Backend e Frontendd
COPY Backend ./Backend
COPY Frontend ./Frontend

# Instala as dependências do Backend e do Frontend
RUN cd Backend && npm install
RUN cd Frontend && npm install

# Expõe a porta 3000 (se necessário)
EXPOSE 8080

# Comando de inicialização
CMD ["npm", "start"]
