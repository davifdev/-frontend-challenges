* flex-grow: Significa se o elemento pode crescer e ocupar o espaço que está sobrando

* flex-shrink: Significa se o elemento pode ser diminuído caso o container tenha um espaço menor do que o necessário

* flex-basis: Seta o tamanho inicial do elemento

* Neste exemplo os campos nome e email tem: flex 1 0 130px. Isso significa que eles podem crescer (flex-grow: 1), mas que não podem ocupar menos que 130px (flex-shrink: 0). Então significa que eles podem ser maiores que 130px se tiver espaço, mas se não tiver, eles devem ter no mínimo 130px de largura e o botão no mínimo 40px.