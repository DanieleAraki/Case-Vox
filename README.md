### Documentação do Teste de Compra de Produtos

## Descrição

Este documento descreve um teste funcional para a funcionalidade de compra de produtos em uma aplicação de exemplo usando Cypress. O teste cobre o fluxo completo de login, ordenação de produtos, adição de produtos ao carrinho, verificação da quantidade de produtos, remoção de um produto do carrinho e finalização da compra.

## Pré-requisitos

- **Cypress**: Certifique-se de ter o Cypress instalado e configurado no seu projeto.
- **Acesso à URL**: O teste acessa a URL `https://www.saucedemo.com/`.

## Estrutura do Teste

### Teste: Realizando a Compra de Produtos com Sucesso

**Objetivo**: Verificar se a compra de produtos é realizada com sucesso, incluindo login, ordenação dos produtos, adição e remoção de itens do carrinho, e finalização da compra.

**Descrição**:

1. **Login com Sucesso**:
 - Acessa a URL `https://www.saucedemo.com/`.
 - Preenche o campo de nome de usuário com `"standard_user"`.
 - Preenche o campo de senha com `"secret_sauce"`.
 - Clica no botão de login.

2. **Ordenação de Produtos**:
 - Seleciona a opção para ordenar os produtos de menor para maior valor.

3. **Validação da Ordenação dos Produtos**:
 - Verifica se os produtos são exibidos na ordem correta:
 - Primeiro item: `'Sauce Labs Onesie'`.
 - Segundo item: `'Sauce Labs Bike Light'`.
 - Terceiro item: `'Sauce Labs Bolt T-Shirt'`.

4. **Adição de Produtos ao Carrinho**:
 - Adiciona o produto `'Sauce Labs Onesie'` ao carrinho.
 - Volta para a lista de produtos.
 - Adiciona o produto `'Sauce Labs Bike Light'` ao carrinho.
 - Volta para a lista de produtos.
 - Adiciona o produto `'Sauce Labs Bolt T-Shirt'` ao carrinho.
 - Volta para a lista de produtos.

5. **Checagem da Quantidade de Produtos no Carrinho**:
 - Verifica se o carrinho exibe a quantidade correta de produtos (3 itens).

6. **Remoção de um Produto do Carrinho**:
 - Acessa o carrinho.
 - Remove o produto `'Sauce Labs Onesie'` do carrinho.

7. **Checkout e Finalização da Compra**:
 - Inicia o processo de checkout.
 - Preenche os campos de nome, sobrenome e código postal.
 - Conclui o processo de checkout.
 - Verifica se a mensagem de confirmação de compra é exibida como `"Thank you for your order!"`.

## Execução dos Testes

1.  **Instale as Dependências**: Certifique-se de ter o Cypress instalado. Se não estiver instalado, você pode instalar usando:
    
    bash
    
    Copiar código
    
    `npm install cypress --save-dev` 
    
2.  **Abra o Cypress**: No terminal, inicie o Cypress com o comando:
    
    bash
    
    Copiar código
    
    `npx cypress open` 
    
3.  **Execute o Teste**: No painel do Cypress, selecione e execute o arquivo de teste que contém o código acima.
    

## Observações

-   Certifique-se de que a URL de login está acessível e o ambiente está configurado corretamente antes de executar os testes.
-   Ajuste os dados de entrada e validações conforme necessário para refletir qualquer alteração na aplicação ou requisitos de teste.

## Conclusão

Este teste garante que o fluxo de compra de produtos está funcionando corretamente, incluindo a ordenação de produtos, adição e remoção de itens do carrinho, e a finalização da compra com uma mensagem de confirmação.
