## Sistema de fluxo de aprovação de protocolos


### Visão Geral 

O objetivo é criar uma API em Node.js que gerencie o ciclo de vida de solicitações. Uma solicitação não é aprovada instantaneamente; ela deve percorrer uma hierarquia de níveis (1, 2 e 3) até ser finalizada. 