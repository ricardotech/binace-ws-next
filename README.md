# App de Criptomoedas com WebSocket em Next.js

Este é um aplicativo simples de criptomoedas desenvolvido em Next.js, que recebe os dados via WebSocket com os valores de criptomoedas e seus percentuais de mudança nas últimas 24 horas usando Socket.IO.

## Tecnologias usadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Socket.IO](https://socket.io/)

## Como executar o aplicativo

Para executar o aplicativo, siga os passos abaixo:

1. Clone o repositório para o seu computador:
   ```
   git clone https://github.com/ricardotech/binance-ws-next.git
   ```
2. Navegue até o diretório do aplicativo:
   ```
   cd binance-ws-next
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm run dev
   ```
5. Acesse o aplicativo no seu navegador em [http://localhost:3000](http://localhost:3000).

## Como funciona o aplicativo

O aplicativo recebe os dados de criptomoedas usando o Socket.IO, que é uma biblioteca JavaScript para comunicação em tempo real entre o cliente e o servidor. O servidor envia os dados para o cliente através de uma conexão WebSocket.

Os dados são exibidos em uma tabela simples na página inicial do aplicativo, com as informações de cada criptomoeda, incluindo seu nome, valor atual e percentual de mudança nas últimas 24 horas.

Os dados são atualizados automaticamente em tempo real, sem a necessidade de recarregar a página, graças à conexão WebSocket.

## Conclusão

Este é um aplicativo simples de criptomoedas desenvolvido em Next.js que recebe dados em tempo real usando Socket.IO. Com isso, você pode criar um aplicativo com informações em tempo real que se atualizam automaticamente sem a necessidade de recarregar a página.
