# 📚 Estudos JavaScript — Rest Operator (`...`)

> Repositório de estudos pessoais sobre JavaScript moderno (ES6+).  
> Este arquivo documenta o conceito de **Rest Operator** com exemplos práticos e explicações detalhadas.

---

## 📌 O que é o Rest Operator?

O **Rest Operator** (`...`) usa a **mesma sintaxe** do Spread Operator, mas tem um propósito diferente: em vez de espalhar valores, ele **agrupa** um número indefinido de argumentos em um único array.

É muito usado em **parâmetros de funções** quando você não sabe quantos valores serão passados na chamada.

> 💬 Uma boa forma de lembrar:
> - **Spread** → espalha valores para fora
> - **Rest** → agrupa valores para dentro

---

## 🧪 Exemplos estudados

### 1. Recebendo convidados com Rest

```javascript
function convidados(...nomes) {
    console.log("Seja bem vindo");
    console.log(nomes);
}

convidados("Lucas", "João", "Marcos", "Mario Silva");

// Saída:
// Seja bem vindo
// [ 'Lucas', 'João', 'Marcos', 'Mario Silva' ]
```

**O que acontece aqui?**
- `...nomes` captura **todos os argumentos** passados na chamada da função
- Independente de passar 2 ou 20 nomes, todos chegam agrupados num **array**
- Sem o Rest, seria necessário declarar um parâmetro para cada nome: `function convidados(n1, n2, n3...)` — inviável!

---

### 2. Sorteador de números — Caso de Uso Real ✅

```javascript
function soteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log("Numero gerado foi:" + numeros[numeroGerado]);
}

soteador(1, 4, 5, 15, 25, 90, 55, 34);

// Exemplo de saída:
// [ 1, 4, 5, 15, 25, 90, 55, 34 ]
// Numero gerado foi: 25
```

**O que acontece aqui, passo a passo?**

| Passo | Código | O que faz |
|---|---|---|
| 1 | `...numeros` | Agrupa todos os argumentos num array |
| 2 | `numeros.length` | Pega o total de números recebidos (8 neste caso) |
| 3 | `Math.random() * numeros.length` | Gera um decimal entre `0` e `8` |
| 4 | `Math.floor(...)` | Arredonda para baixo, gerando um índice válido (0 a 7) |
| 5 | `numeros[numeroGerado]` | Acessa o número sorteado no array pelo índice |

**Resultado:** a função sorteia aleatoriamente um dos números passados, e funciona com **qualquer quantidade** de valores!

---

## 💡 Por que usar o Rest Operator?

- **Flexibilidade** — a função aceita qualquer quantidade de argumentos sem precisar alterar sua assinatura
- **Código mais limpo** — substitui o antigo objeto `arguments` do JavaScript com uma sintaxe moderna
- **Integração com arrays** — como o resultado já é um array, todas as funções como `.length`, `.map()`, `.filter()` funcionam diretamente

---

## 🔀 Rest vs Spread — Qual a diferença?

```javascript
// SPREAD — espalha um array em valores individuais
let nums = [1, 2, 3];
console.log(...nums); // 1  2  3

// REST — agrupa valores individuais em um array
function soma(...nums) {
    console.log(nums); // [1, 2, 3]
}
soma(1, 2, 3);
```

Mesma sintaxe (`...`), propósito oposto. O contexto de uso define qual é qual.

---

## ⚠️ Pontos de Atenção

- O Rest **deve ser sempre o último parâmetro** da função:

```javascript
// ✅ Correto
function exemplo(primeiro, segundo, ...resto) { }

// ❌ Erro — Rest não pode vir antes de outros parâmetros
function exemplo(...resto, ultimo) { }
```

- Só pode existir **um** Rest Operator por função.

---

## 🛠️ Tecnologias

- **JavaScript** (ES6+)
- Executado com **Node.js**

---

## 📁 Estrutura do Projeto

```
📦 rest-operator/
 ┣ 📄 index.js       ← Código com os exemplos
 ┗ 📄 README.md      ← Este arquivo
```

---

## 👤 Autor

Feito com 💻 durante estudos de JavaScript moderno.  
Sinta-se à vontade para usar como referência!
