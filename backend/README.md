# Instrução para iniciar o backend

**Abra o terminal dentro do diretório e execute o comando**

_npm install ou npm i_ para assim instalar as dependencias do aplicativo.

   ### Explicando o conceito de factory
  - Factory se da por conta do design pattern factory que consiste em sub-dividir as funcionalidaes em arquivos diferentes e depois unir         elas em um único arquivo principal que seria a mainFactory para assim evitar muita navegação entre diretórios e importações desnecessárias 

## Explicando o fluxo de trabalho da aplicação

- Temos o arquivo principal **_index.js_**  onde está o corpo da aplicação

- Seguindo para o diretório factoryDatabase temos um arquivo principal chamado **_mainDbFactory.js_** onde está a factory principal do banco de dados

- Em seguida temos o diretório subFunctionsDb onde temos dois arquivos responsavéis por fazer o query no banco de dados


## Explicando o _index.js_

- Primeiro temos uma váriavel chamada de express onde ela importa o biblioteca express

- Seguindo temos uma váriavel chamada cors onde ela também faz uma importação para a biblioteca cors

- Agora temos uma chamada dbFunctions que importa a facotry principal do banco de dados

- O aplicativo começa a ser iniciado a partir da variavel app que recebe o express como funcionalidade para iniciar o app e adquirir suas heranças

- Utilizamos o cors dentro do app usando app.use para não dar conflito entre requisições 

- Criamos uma rota com o procotolo **GET** para enviar e receber requisições de leitura do _clientside_
  1. Temos duas váriveis nomeadas _dddsTable_ e _contractTable_ que aguarda a query no banco de dados

  2. E então chamamoss um response para enviar o resultado dessas duas váriveis para o _clientside_ assim encerrando o método get

- Por último temos o app.listen para ouvir o servidor na porta 3001

## Por dentro do diretório factoryDatabase
 
  ### Arquivo mainDbFactory.js
  1. Primeiro importamos as duas funcionalidades de query ao banco de dados
  
  2. Definimos um objeto dbFunctions que é a nossa factory principal onde comporta as outras duas funcionalidades

  3. Para finalizar exportamos elas
 
 ### Diretório subFunctionsDb
 
 ### queryContracts.js | Importa os contratos existentes no banco de dados
  1. Importamos o pg que é uma biblioteca para utilizar o postgresSQL dentro do Node
  
  2. Definimos uma função assincrona queryContracts
  
     - Criamos uma instancia de cliente para o banco de dados utilizando ```new pg.Client``` e fazemos a configuração do nosso client
     
       - host: Endereço onde está o banco de dados
       
       - port: Porta em que seu banco de dados está ouvindo
       
       - user: Usuário criado no banco de dados
       
       - password: Senha para seu usuário
       
       - database: banco de dados postgresSQL onde está as tabelas que irá consultar
       
  3. Aguardamos o cliente connectar ao banco de dados

  4. Após o client connectar fazemos uma chamada de query ao banco de dados ```client.query('SELECT * FROM contracts')```
     - contracts é a tabela onde estara os seus dados sobre o contrato, sinta-se a vontade para trocar o nome, basta apenas alterar no código também

  5. Encerramos a conexão com o banco de dados

  6. Retornamos o dados que foram conseguidos no item 4

**Por fim exportamos a função queryContracts**


 ### queryDDs.js | Faz a query para pegar a tabela com os ddds e o valor entre as ligações 
 
  1. Importamos o pg que é uma biblioteca para utilizar o postgresSQL dentro do Node
  
  2. Definimos uma função assincrona queryContracts
  
     - Criamos uma instancia de cliente para o banco de dados utilizando ```new pg.Client``` e fazemos a configuração do nosso client
     
       - host: Endereço onde está o banco de dados
       
       - port: Porta em que seu banco de dados está ouvindo
       
       - user: Usuário criado no banco de dados
       
       - password: Senha para seu usuário
       
       - database: banco de dados postgresSQL onde está as tabelas que irá consultar
       
  3. Aguardamos o cliente connectar ao banco de dados

  4. Após o client connectar fazemos uma chamada de query ao banco de dados ```client.query('SELECT * from ddds')```
     - ddds é a tabela onde estara os seus dados sobre o valor das ligações, sinta-se a vontade para trocar o nome, basta apenas alterar no código também

  5. Encerramos a conexão com o banco de dados

  6. Retornamos o dados que foram conseguidos no item 4

**Por fim exportamos a função dddsTable**
