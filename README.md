# Instalação

O projeto tem dependências tanto na pasta **api** quanto na pasta **front**, então você precisa entrar em cada uma e executar:

```bash
# /javi/api
npm i

# /javi/front
npm i
```

Você também irá precisar criar um arquivo **.env** dentro da pasta **api** com as seguintes variáveis:

- JWT_SECRET: irá conter uma senha para o jason web token, que pode conter letras e números;
- SALT_ROUNDS: irá conter um número inteiro, que será usado para gerar o hash do bcryptjs;
- MONGO_URI: irá conter a url do mongo, recomendo utilizar `mongodb://localhost:27017/javi` ;
- API_PORT: irá conter a porta onde a api será executada, lembrando que o React roda na porta `3000`, então é melhor utilizar outra porta, eu uso a `3001`.

# Para Executar

Primeiro você precisar estar com o mongo executando na sua máquina, depois você precisa iniciar a api. O start está configurado com nodemon, então se forem feitas alterações no código, não é necessário reiniciar a api.

```bash
# /javi/api
npm start
```

Agora você precisa iniciar o React, sem finalizar a api, então recomendo abrir outro terminal para isso.

```bash
# /javi/front
npm start
```

# Configurações do VsCode

Tem uma pasta na raíz do projeto chamada .vscode com 2 arquivos, o **settings.json** que serve para executar as configurações do arquivo **.prettierrc** que também está salvo na raíz, se você tiver extensão do prettier no seu VsCode, sempre que um arquivo for salvo, o prettier irá formatar o arquivo. O arquivo **launch.json** contém as configurações do debugger, porém para executar o debugger é necessário estar executando o `debug`.

```bash
# /javi/api
npm run debug
```

Você pode executar esse comando do terminal do próprio VsCode, depois disso é só dar `F5` que o debugger irá funcionar normalmente.
