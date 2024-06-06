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

# Expõe a porta 3000 (se necessário)
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
