# CoinsCompare

Sistema realizado em React, Google Charts e Bootstrap. Api CryptoCompare consumida via fetch 

Clonar o projeto, instalar as dependências (npm i) e executar com npm start

Versão Web: https://marcelofranchini.github.io/coinsCompare/
C:\Program Files\Git\mingw64\bin

## Referências do Gráfico:
Gráfico Padrão: Data atual - Ano anterior - R$ 10.000,00

Percentual acumulado:  Preço de fechamento do dia final em relação ao preço de abertura do primeiro dia(o dia inicial já calcula está variação)

Rendimento Acumulado: Relação entre Valor investido e Percentual Acumulado para cada dia.

Inputs de data: não permitem datas posteriores a atual e inicial a partir de 07/2015.

Input Investimento: Float Livre

## Parâmetros passados pela Url:
limit : Diferença de dias entre as 2 datas informadas(tratamento via código). Retorna o número de cotações diárias necessárias. 

toTs: Data final

fsym=BTC 

tsym: BRL(Real) 

api_key: Chave Cadastrada

As datas foram convertidas do formato unix para o convencional, e o inverso quando necessário.
