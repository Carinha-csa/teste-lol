# Instrução para iniciar o frontend

**Abra o terminal dentro do diretório e execute o comando**

_npm install ou npm i_ para assim instalar as dependencias do aplicativo.

## Explicando o fluxo de trabalho da aplicação

- Seguindo pelo diretório src o arquivo index.tsx faz a renderização do arquivo App.tsx e carrega o arquivo de estilização para as tags html / body / root

- Ainda no diretorio src temos o arquivo declaration.d.ts onde fazemos a declaração de imagens como modulos

- Abrindo o arquivo App.tsx temos o corpo principal da aplicação, primeiro percebemos os componentes da página sendo importados, logo em seguida os arquivos de estilização, um desses cuida de toda a renderização dp App e o outro da responsividade

- Seguindo para o diretório styles vemos os arquivos responsaveís pela estilização

- No diretório src vemos os componentes principais

- Agora vamos ao arquivo de maior importancia DDDS.tsx no qual é feito o fetch para o **backend** e executa as outras funcionalidades


## Fluxo de trabalho do componente DDDS.tsx

- Primeiro vemos dois objetos de tipagem  **dddsType** e **contract**, são responsaveis para tipar duas funções de state

### Dentro do corpo principal da função

- Temos 1 variavél chamada ddds que contem um array com os ddds que serão exibidos para os clientes calcularem a ligação
- Temos 3 váriaveis de estado explicarei a responsabilidade de cada a seguir.

1. dddsTable
   - Ela é responsavel por guardar os valores que de cada ligação entre os ddds
2. contract
   - Responsavél por guardar o nome dos contratos
3. tableResult
   - Responsavel por exibir os resultados da apiicação

- Logo após as variaveis de estado temos um useEffect um dos react-hooks
  1. Após a renderização da página ele executa uma função.
  
#### Fazendo o fetch para o backend

1. Primeiro declaramos o **fetch** com o endereço para backend que desejamos receber os dados

3. Utilizamos o **then** para executar uma função quando o a promise que o fetch gera for resolvado, definimos essa função como assincrona para aguardar o resultado
   - Dentro dela temos duas váriveis constantes que destruturam do resultado deste fetch os itens dddsTable e contractTable, vemos que essas variavies são aguardados do resultado value.json()
   
     - O item dddsTable aguarda uma tabela com os valores das ligações entre os ddds
     
     - O item contractTable aguarda o nome dos contratos
     
   - Em seguidas temos duas funções para atualizar os estados das váriaveis dddsTable e Contract

#### Funcionalidades

1. findValueForRoute
   - Ela é responsavél por encontrar o valor entre as rotas que o cliente está ligando por exemplo: *011 há 016 tem um valor de 1.90* por minuto*, e ao finalizar ela retornara esse valor

2. getContractSelected
   - Essa função vai ser responsavél por pegar o plano que o cliente escolheu e verificar se ele existe e depos retornar um objeto com o nome do plano e o tempo em ligação gratuito que ele permite

3. getTimeClientWantCall 
   - Reponsavél por pegar o tempo que o cliente deseja falar e retornar o mesmo

4. calcPlan
   - Responsavél por fazer o calculo da ligação entre as rotas e retornar o resultado

5. insetResultOnScreen
   - Responsavél por inserir o resultado do calculo da ligação na tela para o cliente
   - 
**Para mais detalhes consultar o código**

