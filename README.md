# Documento de instalação do Portifólio

## Configuração do Frontend
------------------------------------------------
<br></br>
### 1. Pré-requisitos
### 2. Clonar o Projeto para o ambiente local
### 3. Instalação e configurações de pacotes
### 4. Inicializar com npm e yarn
<br></br>

-------------------------------------------------

## 1. Pré-requisitos

- Instalar VS CODE para visualizar os projetos

    - https://code.visualstudio.com/Download <br/><br/>

- Instalar Node em seu computador.

    - https://nodejs.org/en/download/ <br/><br/>

        - Obs: Existe várias formas de instalação do node, uma delas é via package manager. Se optar por essa forma de instalação, é necessário da instalação do <b>CURL</b>.<br/><br/>
      \*Para instalar o <b>CURL</b> acesse o link abaixo

      - https://curl.se/
      
      ou instale via linha de comando no terminal de Ubuntu

      ```sh
      sudo snap install curl
      ```

      ou

      ```sh
      sudo apt install curl
      ```
    - Verificar se o Node.js e NPM estão instalados.<br/>
    Quando instalamos o Node.js o gerenciador de pacotes NPM também é instalado, para confirmar a instalação do Node.js e NPM abra o terminal de comando do Ubuntu e execute os comandos abaixo <br/><br/>
        ```
        node --version 
        ```
        ou

        ```sh
        npm --version
        ```

        se a instalação estiver correta a respostado terminal deve conter algo assim.

        ```
        $ node --version

 - Instalar o Yarn ( Se for de sua preferência)

  - https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

    ```sh
    $ sudo npm install --global yarn
    ```

- Instalar o Git 

  - https://git-scm.com/download

    ou instale via linha de comando no terminal de Ubuntu

   No terminal, execute o seguinte comando para instalar o Git:
    ```
    sudo apt update
    sudo apt install git
    ```

    Após a instalação, você pode acessar o Git a partir do Terminal.
    Para verificar se a instalação foi bem-sucedida, abra um novo terminal e digite:
    ```
    git --version
    ```
    Você deverá ver a versão do Git instalada no seu sistema.

## 2. Clonar o Projeto para o ambiente local <br /><br />

Vá até o diretório que deseja colocar o projeto e execute o seguinte comando para clonar:
```
git clone URL_DO_REPOSITORIO
```

Substitua URL_DO_REPOSITORIO pela URL do repositório que você deseja clonar. Você pode encontrar a URL no canto superior direito da página do repositório no GitHub.



------------------------------------------------

## 3. Instalação e configurações de pacotes <br /><br />

No diretório do projeto execute os seguintes comandos para instalar os pacotes

```
npm install
```
ou
```
yarn install
```

Se aparecer algum erro de permissão tente rodar com sudo: 

```
sudo npm install
```
ou
```
sudo yarn install
```

Antes de inicializar é preciso configurar o arquivo .env na raiz do projeto

### Configure o .env
Crie um novo arquivo na raiz do seu frontend com o nome '.env'
```
VITE_API_FULL_NAME = "SEU NOME"
VITE_API_LIKEDIN_LINK="LINK DE SEU LINKEDIN"
VITE_API_EMAIL="SEU EMAIL"
VITE_API_EMAIL_LINK="mailto:SEU EMAIL"
VITE_API_GIT_NAME="NOME DO SEU GITHUB"
VITE_API_GIT_LINK="LINK DE SEU PERFIL GITHUB"
VITE_API_PHONE="SEU NÚMERO DE APRESENTAÇÃO"
VITE_API_PHONE_LINK="https://wa.me/ SEU NÚMERO COMPLETO SEM ESPAÇO EX:551199990000"
```

Salve o arquivo criado.

----------------------------------------------------------------
## 4. Inicializar com npm ou yarn

Após instalar os pacotes você estará pronto para executar o projeto

Execute o comando a seguir para rodar o frontend:

```
npm run start
```
ou
```
yarn start
```