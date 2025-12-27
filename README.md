# Convertor em Binário 🧮➡️🔢

**Aplicação web pequena que converte números decimais em binário.**

---

## ✨ Resumo

Projeto simples e objetivo que demonstra domínio prático de JavaScript e princípios de UX — com espaço claro para aplicar testes e melhorias de acessibilidade. 

Converte um número decimal em sua representação binária e exibe o resultado na página.

- Entrada: número (via campo `input` em `home.html`)
- Saída: string binária exibida em `#numero_binario`

---

## 🚀 Como funciona (técnico)

- A página (`home.html`) carrega `index.js` (atributo `defer`).
- O usuário insere um número no campo `#numero_decimal_input` e clica em `#converter_button`.
- O código lê o valor, converte para inteiro com `parseInt(valor, 10)` (atualmente) e chama `toString(2)` para gerar o binário.
- Em caso de entrada inválida, o projeto mostra um `alert()` e atualiza a UI com uma mensagem de erro.

---

## 🧩 Tecnologias

- HTML5
- CSS3
- JavaScript (DOM — manipulação de eventos e `Number.prototype.toString`)

---

## ✅ Pontos fortes

- Interface simples e direta — fácil de usar e entender.
- Já utiliza um formulário (input + botão) — melhora a acessibilidade em relação ao `prompt()`.
- Código enxuto, pronto para ser estendido com validação, testes e deploy.



---

## Objetivo do repositório

Este repositório é público com a intenção de:

- Servir como base de estudo para outros desenvolvedores iniciantes
- Permitir que o código seja reutilizado, modificado e aprimorado
- Registrar minha evolução prática em JavaScript

Sinta-se à vontade para clonar, adaptar ou refatorar o código.

---

## Próximas melhorias planejadas

- Conversão de binário para decimal
- Refatoração das funções de conversão
- Melhor organização do código JavaScript
- Melhorias visuais e de acessibilidade

---

## Observações

Este projeto faz parte do meu processo de aprendizado. Sugestões de melhoria são bem-vindas.


"# conversor-decimal" 
