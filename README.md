# Documentação de Uso do Projeto


## Visão Geral
Este projeto consiste em uma aplicação web desenvolvida em React para exibir uma lista de veículos e permitir a adição de novos registros através de um formulário. Utiliza Bootstrap para estilização e Axios para comunicação com uma API externa que fornece os dados dos veículos.

## Componentes Principais
### VehicleList Component

#### Funcionalidades:
Exibe uma lista de veículos agrupados por marca.
Permite adicionar novos veículos através de um formulário.
Ordena os veículos alfabeticamente pelo nome do modelo.
Responsivo, adaptado para diferentes tamanhos de tela.
Formulário de Adição de Veículo

#### Funcionalidades:
Captura informações do usuário sobre um novo veículo.
Realiza validações básicas nos campos antes de submeter os dados.
Integração no Projeto Existente
Dependências Necessárias:

-> Certifique-se de que o projeto inclui React, Axios e Bootstrap.
 -> Axios:
  ![image](https://github.com/gdssvpp/testeT-React/assets/92610124/81297bd3-dcc6-4ff3-9299-dad792229043)

 -> Bootstrap:
   ![image](https://github.com/gdssvpp/testeT-React/assets/92610124/defde3b2-35c6-4495-82ea-2b4988f3d96c)


Estilo CSS:

Utiliza classes do Bootstrap para layouts responsivos e componentes de formulário.
Componentização:

Cada parte da aplicação é encapsulada em componentes React reutilizáveis para facilitar a manutenção e expansão.
Fluxo de Trabalho
Renderização Inicial:

O componente VehicleList é renderizado na tela principal, exibindo a lista de veículos.
Interatividade:

O usuário pode adicionar novos veículos através do formulário fornecido, que atualiza dinamicamente a lista de veículos exibida.
Comunicação com a API:

Utiliza Axios para realizar requisições HTTP à API externa que fornece os dados dos veículos.
Considerações Finais
Este projeto visa demonstrar o uso básico de React para criação de interfaces de usuário interativas, integrando com APIs externas e aplicando estilos responsivos através do Bootstrap. Certifique-se de ajustar as configurações de proxy e CORS conforme necessário para garantir o correto funcionamento da aplicação em diferentes ambientes de implantação.

