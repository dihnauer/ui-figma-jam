## FigJam

![Clique para ver](https://i.ibb.co/FKZdRZD/Captura-de-tela-20230206-144752.png)

Este projeto foi desenvolvido como prática de conhecimentos com React.

O funcionamento do app se assemelha a nova funcionalidade do Figma - FigJam, um whiteboard para criar componentes e interligá-los.

Para criá-lo, foi utilizado:
- Vite
- React com TypeScript
- TailwindCSS (apesar de poucos estilos)
- React Flow para criar o whiteboard e seus funcionamentos
- RadixUI para criar a toolbar

### Como executar o app

Clone este repositório. Execute ``npm i`` para instalar as dependências e ``npm run dev`` para iniciar.

### Funcionamento

O app inicia com o whiteboard ocupando toda a tela e uma toolbar com apenas um quadrado na cor roxa como elemento para posicioná-lo na tela. É possível redimencionar o tamanho do quadrado, além de poder adicionar outros quadrados e interligá-los, funcionamento encontrado no FigJam.

O quadrado foi criado seguindo a documentação do React Flow, então é possível tanto modificar seu tamanho e forma como, também, criar outros elementos de diferentes cores e/ou formatos..
