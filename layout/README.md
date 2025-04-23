* flex-grow: O flex grow serve para quando existir espaço sobrando. esse espaço será adicionado aos elementos que tem flex-grow

* flex-shrink: O flex shrink serve para quando não existir espaço sobrando o item vai diminuir para caber ao container. Se o elemento pai possuir flex-wrap o flex-shrink não funcionará

* flex-basis: O flex-basis é o tamanho inicial de um elemento flex. Ele define o tamanho default do elemento antes do espaço remanescente for distribuido. O flex-basis é similiar ao min-width.

* Neste exemplo os campos nome e email tem: flex 1 0 130px. Isso significa que eles podem crescer (flex-grow: 1), mas que não podem ocupar menos que 130px (flex-shrink: 0). Então significa que eles podem ser maiores que 130px se tiver espaço, mas se não tiver, eles devem ter no mínimo 130px de largura e o botão no mínimo 40px.
