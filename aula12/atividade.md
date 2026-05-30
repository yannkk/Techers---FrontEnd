## Exercício para os Alunos: Cartão de Perfil

**Contextualização:**
Vocês foram contratados para desenvolver a interface de um painel de administração corporativo. O designer entregou a especificação de um "Cartão de Perfil" (Profile Card) que será repetido dezenas de vezes na tela para listar os funcionários. Para garantir a performance e a manutenibilidade do código, o líder técnico proibiu o uso de `document.createElement` para montar o HTML estrutural.

**Missão:**
Criar um Web Component chamado `<profile-card>` do zero, utilizando a abordagem declarativa com `<template>` e `<slot>`. 

**Regras e Passos:**

- **Passo 1: O Molde (HTML)**
No seu arquivo `index.html`, crie uma tag `<template>` com um ID específico. Dentro dela, construa a estrutura visual de um cartão usando uma `div` principal. O cartão deve prever três áreas dinâmicas usando **Named Slots** (Slots nomeados):
    1. Um espaço para a `foto` do usuário (adicione uma imagem genérica como fallback).
    2. Um espaço para o `nome` do usuário (adicione "Usuário Anônimo" como fallback).
    3. Um espaço para a `biografia` (adicione "Sem biografia" como fallback).
    *Dica:* Adicione uma tag `<style>` dentro do template para deixar o cartão com bordas e um padding amigável.
- **Passo 2: O Cérebro (JavaScript)**
Crie o arquivo `ProfileCard.js` e defina a classe do componente. No construtor, anexe o Shadow DOM em modo aberto. Em seguida, capture a referência do seu `<template>` do HTML, faça um clone profundo (`cloneNode(true)`) do conteúdo dele e anexe diretamente no Shadow Root. Registre o componente como `profile-card`.
- **Passo 3: O Consumo (HTML)**
Volte ao `index.html` e chame a tag `<profile-card>` duas vezes no `<body>`:
    1. Na primeira, injete (usando o atributo `slot`) uma tag `img`, um `h2` para o nome e um `p` para a biografia com seus dados reais.
    2. Na segunda, injete apenas o seu `nome`, deixando o componente usar as opções de fallback para a foto e a biografia.

