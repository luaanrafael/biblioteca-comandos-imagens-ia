const BANCO_COMANDOS = [
  {
    "id": 41,
    "comando": "/windowlight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Recria a luz suave e direcional que entra por uma janela, iluminando o rosto ou objeto de forma difusa e natural.",
    "exemplo": "Retrato de um profissional analisando uma planta perto da janela, /windowlight, /50mmlook",
    "dica": "Posicione o assunto a 45 graus da janela para modelar o rosto com suavidade sem achatar os traços."
  },
  {
    "id": 42,
    "comando": "/goldenhour",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Aplica a luz quente e dourada do início da manhã ou fim de tarde, com tons alaranjados e sombras alongadas.",
    "exemplo": "Foto de um canteiro de obras ao por do sol, /goldenhour, /backlight",
    "dica": "Combine com /warmtones para reforçar a paleta; descreva sombras longas no prompt para marcar o horário."
  },
  {
    "id": 43,
    "comando": "/bluehour",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Reproduz a luz azulada e uniforme dos minutos entre o dia e a noite, logo antes do amanhecer ou depois do por do sol.",
    "exemplo": "Fachada de um prédio comercial iluminada ao anoitecer, /bluehour, /twilightexterior",
    "dica": "Ideal para externas de arquitetura com luzes internas acesas - peça isso explicitamente no prompt para gerar contraste."
  },
  {
    "id": 44,
    "comando": "/overcastlight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Simula um dia nublado, com luz difusa que elimina sombras duras e uniformiza a exposição.",
    "exemplo": "Foto de produto ao ar livre em dia nublado, /overcastlight, /naturebackground",
    "dica": "Ótimo para peles e texturas sem estourar realces; evite pedir 'sol forte' no mesmo prompt, pois conflita."
  },
  {
    "id": 45,
    "comando": "/openshade",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Aplica a luz suave encontrada a sombra, fora da luz direta do sol, mas ainda com boa claridade ambiente.",
    "exemplo": "Retrato corporativo em uma varanda coberta, /openshade, /eyelevel",
    "dica": "Combine com /filllight quando o rosto estiver de costas para o céu aberto, para evitar sombras nos olhos."
  },
  {
    "id": 46,
    "comando": "/backlight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Posiciona a fonte de luz principal atrás do assunto, criando contornos luminosos e silhuetas parciais.",
    "exemplo": "Pessoa caminhando entre colunas de um prédio, /backlight, /rimlight",
    "dica": "Peça explicitamente 'leve luz de preenchimento frontal' no prompt para não perder detalhes do rosto na sombra."
  },
  {
    "id": 47,
    "comando": "/sidelight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Ilumina o assunto a partir de um dos lados, revelando textura, volume e profundidade.",
    "exemplo": "Textura de uma parede com rachaduras, /sidelight, /materialdetail",
    "dica": "Excelente para evidenciar relevo (trincas, reboco, tijolos); descreva a luz como 'rasante' para maximizar a textura."
  },
  {
    "id": 48,
    "comando": "/dappledlight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Cria padrões de luz e sombra filtrados por folhagens ou estruturas vazadas.",
    "exemplo": "Retrato ao ar livre sob uma árvore, /dappledlight, /naturalgreens",
    "dica": "Funciona melhor com fundos naturais; evite combinar com /studiobackdrop, que remove o contexto necessário."
  },
  {
    "id": 49,
    "comando": "/morninglight",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Traz a atmosfera fresca e clara do início da manhã, com tons suaves e pouco contraste.",
    "exemplo": "Equipe chegando ao canteiro de obras pela manhã, /morninglight, /documentarystyle",
    "dica": "Combine com /mistymorning em cenas externas para reforçar a sensação de começo de dia."
  },
  {
    "id": 50,
    "comando": "/sunsetglow",
    "colecao": "Fotografia",
    "categoria": "Luz Natural",
    "descricao": "Aplica o brilho quente e avermelhado característico do por do sol sobre toda a cena.",
    "exemplo": "Vista de uma obra finalizada ao entardecer, /sunsetglow, /landscapephoto",
    "dica": "Use com moderação em fotos de produto - o tom avermelhado pode distorcer as cores reais dos materiais."
  },
  {
    "id": 51,
    "comando": "/softbox",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Reproduz a luz difusa e uniforme de um softbox de estúdio, suavizando sombras sem eliminá-las.",
    "exemplo": "Retrato profissional para capa de ebook, /softbox, /highkey",
    "dica": "E a base mais segura para retratos corporativos; combine com /beautydish só quando quiser mais definição."
  },
  {
    "id": 52,
    "comando": "/beautydish",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Cria contornos faciais bem definidos com uma transição suave entre luz e sombra, típica de still de beleza.",
    "exemplo": "Retrato de estúdio com foco no rosto, /beautydish, /85mmlook",
    "dica": "Peça a fonte de luz 'centralizada e ligeiramente acima' no prompt para reproduzir o ângulo clássico."
  },
  {
    "id": 53,
    "comando": "/rembrandtlight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Forma um pequeno triângulo de luz na bochecha mais escura do rosto, um padrão clássico de retrato dramático.",
    "exemplo": "Retrato dramático com fundo escuro, /rembrandtlight, /lowkey",
    "dica": "Peça o rosto levemente virado (3/4) - o triângulo só aparece com esse ângulo correto."
  },
  {
    "id": 54,
    "comando": "/butterflylight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Posiciona a luz acima e centralizada, criando uma sombra pequena e simétrica sob o nariz.",
    "exemplo": "Retrato de beleza simétrico e frontal, /butterflylight, /centercomposition",
    "dica": "Funciona melhor com o rosto de frente para a câmera; evite ângulos de perfil, que anulam o efeito."
  },
  {
    "id": 55,
    "comando": "/looplight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Gera uma sombra curta do nariz, ligeiramente deslocada para um dos lados - o padrão mais versátil de retrato.",
    "exemplo": "Retrato profissional para perfil no LinkedIn, /looplight, /corporate",
    "dica": "E a escolha mais segura quando não souber qual esquema de luz pedir - funciona bem na maioria dos rostos."
  },
  {
    "id": 56,
    "comando": "/splitlight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Divide o rosto exatamente ao meio entre luz e sombra, criando um efeito dramático e gráfico.",
    "exemplo": "Retrato conceitual dividido entre luz e sombra, /splitlight, /fineartphoto",
    "dica": "Use em conceitos fortes (mistério, dualidade); evite em fotos institucionais, onde o efeito é excessivo."
  },
  {
    "id": 57,
    "comando": "/rimlight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Adiciona uma linha fina de luz contornando as bordas do assunto, separando-o do fundo escuro.",
    "exemplo": "Silhueta de um trabalhador com capacete, /rimlight, /lowkey",
    "dica": "Combine sempre com fundo escuro (/lowkey) para o contorno se destacar claramente."
  },
  {
    "id": 58,
    "comando": "/filllight",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Suaviza e reduz a profundidade das sombras já existentes, sem remover o volume da imagem.",
    "exemplo": "Retrato ao ar livre com sombra forte no rosto, /filllight, /openshade",
    "dica": "Use quando outra luz (como /backlight ou /sidelight) deixar sombras fortes demais no rosto."
  },
  {
    "id": 59,
    "comando": "/highkey",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Produz uma imagem predominantemente clara, com sombras mínimas e visual leve.",
    "exemplo": "Foto de produto sobre fundo branco estourado, /highkey, /whitebackground",
    "dica": "Ideal para capas de ebook e anúncios; peça 'sem sombras duras' no prompt para reforçar o efeito."
  },
  {
    "id": 60,
    "comando": "/lowkey",
    "colecao": "Fotografia",
    "categoria": "Luz de Estúdio",
    "descricao": "Cria uma imagem majoritariamente escura, com apenas realces pontuais de luz - visual dramático e sério.",
    "exemplo": "Retrato dramático de um perito em ambiente escuro, /lowkey, /rembrandtlight",
    "dica": "Ótimo para thumbnails de vídeos sérios (perícias, patologias); combine com /cinematiccolor para reforçar o clima."
  },
  {
    "id": 61,
    "comando": "/eyelevel",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Posiciona a câmera na altura dos olhos do assunto, gerando uma perspectiva neutra e natural.",
    "exemplo": "Entrevista em vídeo com um engenheiro, /eyelevel, /documentarystyle",
    "dica": "E o ângulo padrão mais seguro para conteúdo institucional e entrevistas - use por padrão se não houver motivo para outro."
  },
  {
    "id": 62,
    "comando": "/lowangle",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Posiciona a câmera abaixo do assunto, fazendo-o parecer maior, mais imponente ou poderoso.",
    "exemplo": "Prédio em construção fotografado de baixo, /lowangle, /verticallines",
    "dica": "Reforça a sensação de escala em prédios e estruturas; use com moderação em retratos, pois distorce o rosto."
  },
  {
    "id": 63,
    "comando": "/highangle",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Posiciona a câmera acima do assunto olhando para baixo, reduzindo a sensação de imponência.",
    "exemplo": "Vista geral de um canteiro de obras, /highangle, /architecturephoto",
    "dica": "Útil para mostrar contexto e organização do espaço; combine com /topdown para uma visão quase total da cena."
  },
  {
    "id": 64,
    "comando": "/topdown",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Enquadra a cena diretamente de cima, em um ângulo de 90 graus.",
    "exemplo": "Layout de um canteiro de obras visto de cima, /topdown, /layeredcomposition",
    "dica": "Muito usado em flat lays de produto e comida; em arquitetura, funciona bem para mostrar organização do espaço."
  },
  {
    "id": 65,
    "comando": "/groundlevel",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Posiciona a câmera bem próxima ao chao, quase na altura do solo.",
    "exemplo": "Foto de uma rachadura na base de uma parede, /groundlevel, /materialdetail",
    "dica": "Excelente para registros técnicos (fissuras, fundações); aproxime a descrição do objeto para reforçar o detalhe."
  },
  {
    "id": 66,
    "comando": "/threequarterview",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Mostra o assunto em um ângulo de três quartos entre a frente e o perfil, o enquadramento clássico de retrato.",
    "exemplo": "Retrato profissional para currículo, /threequarterview, /looplight",
    "dica": "Mais lisonjeiro que a vista frontal direta para a maioria dos rostos - bom padrão para fotos de perfil."
  },
  {
    "id": 67,
    "comando": "/sideprofile",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Enquadra o assunto exatamente de lado, mostrando apenas o perfil.",
    "exemplo": "Retrato artístico de perfil, /sideprofile, /rimlight",
    "dica": "Reforça o contorno do rosto ou objeto; combine com /rimlight ou /splitlight para efeitos mais gráficos."
  },
  {
    "id": 68,
    "comando": "/rearview",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Mostra o assunto de costas para a câmera.",
    "exemplo": "Pessoa observando um prédio a distância, de costas, /rearview, /architecturephoto",
    "dica": "Ótimo para preservar anonimato em conteúdo faceless - combine com paisagens ou arquitetura ao fundo."
  },
  {
    "id": 69,
    "comando": "/dutchangle",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Inclina o horizonte da câmera, criando uma composição dinâmica e com tensão visual.",
    "exemplo": "Foto urbana dinâmica de um prédio moderno, /dutchangle, /lowangle",
    "dica": "Use com moderação - o efeito é forte e pode parecer não intencional se exagerado em toda a galeria."
  },
  {
    "id": 70,
    "comando": "/aerialview",
    "colecao": "Fotografia",
    "categoria": "Ângulos de Câmera",
    "descricao": "Mostra a cena a partir de uma perspectiva aérea elevada, como a de um drone.",
    "exemplo": "Vista aérea de um bairro em construção, /aerialview, /topdown",
    "dica": "Ótimo para mostrar escala de obras e loteamentos; descreva a altitude aproximada para calibrar o enquadramento."
  },
  {
    "id": 71,
    "comando": "/24mmlook",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Simula uma lente grande-angular de 24mm, capturando mais contexto do ambiente ao redor do assunto.",
    "exemplo": "Trabalhador em um canteiro amplo, mostrando toda a obra ao fundo, /24mmlook",
    "dica": "Ideal quando o ambiente conta parte da história; evite em retratos próximos, pois distorce feições nas bordas."
  },
  {
    "id": 72,
    "comando": "/35mmlook",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Recria uma lente moderadamente grande-angular, próxima da percepção natural do olho humano no dia a dia.",
    "exemplo": "Foto de rua de um bairro em reforma, /35mmlook, /documentarystyle",
    "dica": "Boa escolha padrão para fotos de bastidores, por parecer mais espontânea e menos 'produzida'."
  },
  {
    "id": 73,
    "comando": "/50mmlook",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Aplica a perspectiva de uma lente 50mm, o padrão mais versátil e equilibrado entre contexto e proximidade.",
    "exemplo": "Retrato de um perito em seu escritório, /50mmlook, /eyelevel",
    "dica": "E a lente mais segura quando não tiver certeza de qual pedir - funciona bem em quase qualquer cena."
  },
  {
    "id": 74,
    "comando": "/85mmlook",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Simula uma lente de retrato clássica, comprimindo levemente o fundo e isolando o assunto com desfoque suave.",
    "exemplo": "Retrato de perfil profissional para redes sociais, /85mmlook, /creamybokeh",
    "dica": "Combine com /subjectisolation em thumbnails de rosto, garantindo que o assunto se destaque do fundo."
  },
  {
    "id": 75,
    "comando": "/135mmlook",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Reproduz uma lente teleobjetiva, comprimindo bastante o fundo e criando um retrato mais distante e íntimo.",
    "exemplo": "Retrato a distância com fundo bem comprimido, /135mmlook, /creamybokeh",
    "dica": "Ótimo para dar sensação de observação discreta em fotos de rua ou documentário."
  },
  {
    "id": 76,
    "comando": "/macrophoto",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Aproxima extremamente a câmera do assunto, revelando detalhes minúsculos invisíveis a olho nu.",
    "exemplo": "Detalhe extremo de uma fissura em concreto, /macrophoto, /materialdetail",
    "dica": "Excelente para evidências técnicas (trincas, corrosão, textura); descreva a escala aproximada no prompt."
  },
  {
    "id": 77,
    "comando": "/shallowfocus",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Reduz a profundidade de campo, deixando apenas uma fatia estreita da imagem nítida.",
    "exemplo": "Retrato com fundo totalmente desfocado, /shallowfocus, /85mmlook",
    "dica": "Combine com /subjectisolation quando o objetivo for eliminar por completo a distração do fundo."
  },
  {
    "id": 78,
    "comando": "/deepfocus",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Mantém tanto o primeiro plano quanto o fundo nítidos, sem áreas desfocadas.",
    "exemplo": "Canteiro de obras com detalhes nítidos do chao ao fundo, /deepfocus, /architecturephoto",
    "dica": "Essencial em fotos técnicas e de arquitetura, onde toda a cena precisa estar legível."
  },
  {
    "id": 79,
    "comando": "/creamybokeh",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Suaviza as áreas fora de foco em um desfoque cremoso e uniforme, sem formas duras ou distrações.",
    "exemplo": "Retrato com luzes de fundo desfocadas suavemente, /creamybokeh, /goldenhour",
    "dica": "Combine com fundo com pontos de luz (janelas, luzes noturnas) para criar circulos de desfoque visíveis."
  },
  {
    "id": 80,
    "comando": "/subjectisolation",
    "colecao": "Fotografia",
    "categoria": "Lentes e Foco",
    "descricao": "Separa visualmente o assunto principal do restante da cena, guiando o olhar direto para ele.",
    "exemplo": "Ferramenta de trabalho isolada do fundo desfocado, /subjectisolation, /shallowfocus",
    "dica": "Combine com /cleanbackground quando o fundo já for simples, reforçando ainda mais o foco no assunto."
  },
  {
    "id": 81,
    "comando": "/ruleofthirds",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Posiciona os elementos principais ao longo de linhas imaginárias que dividem o quadro em terços, evitando centralização.",
    "exemplo": "Retrato com o rosto posicionado no terço superior direito, /ruleofthirds",
    "dica": "E a regra mais versátil - use como padrão sempre que não houver um motivo específico para centralizar."
  },
  {
    "id": 82,
    "comando": "/centercomposition",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Posiciona o assunto principal exatamente no centro do quadro, criando uma composição direta e simétrica.",
    "exemplo": "Produto centralizado no quadro, /centercomposition, /whitebackground",
    "dica": "Funciona bem para produtos e ícones visuais; em retratos, combine com /symmetry para reforçar o efeito."
  },
  {
    "id": 83,
    "comando": "/symmetry",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Organiza a cena com equilíbrio espelhado entre os dois lados do quadro.",
    "exemplo": "Fachada de um prédio com composição simétrica, /symmetry, /architecturephoto",
    "dica": "Ideal para arquitetura e corredores; peça um 'ponto de vista central' no prompt para garantir o alinhamento."
  },
  {
    "id": 84,
    "comando": "/leadinglines",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Usa linhas naturais da cena (estradas, corrimãos, vigas) para guiar o olhar até o assunto principal.",
    "exemplo": "Corredor de obra levando o olhar até o trabalhador ao fundo, /leadinglines",
    "dica": "Descreva qual elemento deve formar a linha (escada, cerca, trilho) para o resultado ficar mais previsível."
  },
  {
    "id": 85,
    "comando": "/negativeSpace",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Reserva áreas vazias e propositais ao redor do assunto, criando respiro visual e destaque.",
    "exemplo": "Trabalhador pequeno em um grande espaço vazio de obra, /negativeSpace, /minimalphoto",
    "dica": "Ótimo para capas e thumbnails, pois deixa espaço livre para inserir texto por cima da imagem depois."
  },
  {
    "id": 86,
    "comando": "/framewithinframe",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Usa elementos da própria cena (portas, janelas, arcos) para emoldurar o assunto principal.",
    "exemplo": "Pessoa vista através do vão de uma porta em obra, /framewithinframe",
    "dica": "Combine com /foregrounddepth para reforçar a sensação de profundidade e camadas."
  },
  {
    "id": 87,
    "comando": "/foregrounddepth",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Adiciona elementos desfocados em primeiro plano para criar sensação de profundidade na cena.",
    "exemplo": "Fachada fotografada com folhagem desfocada em primeiro plano, /foregrounddepth",
    "dica": "Combine com /layeredcomposition quando quiser reforçar três planos distintos (frente, meio, fundo)."
  },
  {
    "id": 88,
    "comando": "/layeredcomposition",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Organiza a cena em planos claramente distintos - primeiro plano, meio e fundo.",
    "exemplo": "Obra com trabalhador em primeiro plano e prédio ao fundo, /layeredcomposition",
    "dica": "Ótimo para fotos de contexto que precisam contar uma história em várias camadas visuais."
  },
  {
    "id": 89,
    "comando": "/diagonalcomposition",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Organiza os elementos principais ao longo de uma linha diagonal, criando dinamismo e movimento visual.",
    "exemplo": "Escada de obra fotografada em diagonal, /diagonalcomposition",
    "dica": "Reforça energia e movimento; combine com /dutchangle apenas quando quiser um efeito ainda mais dramático."
  },
  {
    "id": 90,
    "comando": "/balancedframing",
    "colecao": "Fotografia",
    "categoria": "Composição",
    "descricao": "Distribui o peso visual dos elementos de forma equilibrada por todo o quadro.",
    "exemplo": "Cena de obra com elementos distribuidos equilibradamente, /balancedframing",
    "dica": "Use quando a cena tiver vários elementos importantes e nenhum ponto de foco central único."
  },
  {
    "id": 91,
    "comando": "/cleanbackground",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Simplifica ou remove elementos distrativos do fundo, deixando a cena mais limpa.",
    "exemplo": "Retrato profissional com fundo simplificado, /cleanbackground, /corporate",
    "dica": "Peça para 'manter o assunto intacto' no prompt, já que o pedido é sobre o fundo, não sobre a pessoa."
  },
  {
    "id": 92,
    "comando": "/studiobackdrop",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Substitui o fundo por um cenário liso ou com textura sutil, típico de estúdio fotográfico.",
    "exemplo": "Retrato com fundo cinza liso de estúdio, /studiobackdrop, /softbox",
    "dica": "Especifique a cor do fundo desejada (cinza, branco, preto) para controlar melhor o resultado."
  },
  {
    "id": 93,
    "comando": "/backgroundswap",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Substitui o fundo original por um novo, especificado no prompt.",
    "exemplo": "Trocar o fundo por um escritório de engenharia moderno, /backgroundswap",
    "dica": "Descreva o novo fundo com o máximo de detalhes possível (luz, cor, elementos) para um resultado coerente."
  },
  {
    "id": 94,
    "comando": "/backgroundpreserve",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Mantém o fundo original da imagem intacto, mesmo ao alterar outros aspectos da foto.",
    "exemplo": "Ajustar a iluminação da pessoa sem alterar o fundo original, /backgroundpreserve",
    "dica": "Use sempre que quiser editar apenas o assunto (roupa, pose, luz) sem risco de mudar o cenário."
  },
  {
    "id": 95,
    "comando": "/backgroundblur",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Aplica um desfoque natural e gradual ao fundo, sem alterar sua composição original.",
    "exemplo": "Desfocar suavemente o fundo de um retrato ao ar livre, /backgroundblur",
    "dica": "Diferente de /shallowfocus (que já nasce desfocado na captura), este comando ajusta uma foto já existente."
  },
  {
    "id": 96,
    "comando": "/removeclutter",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Remove elementos específicos e indesejados do fundo da cena.",
    "exemplo": "Remover fios e entulho ao fundo da foto de uma obra, /removeclutter",
    "dica": "Liste exatamente o que remover (fios, entulho, placas) - pedidos genéricos trazem resultados imprevisíveis."
  },
  {
    "id": 97,
    "comando": "/urbanbackground",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Ambienta a cena em um cenário urbano apropriado ao contexto da imagem.",
    "exemplo": "Retrato com uma avenida movimentada ao fundo, /urbanbackground",
    "dica": "Combine com /naturebackground apenas em cenas de transição; evite usar os dois fundos ao mesmo tempo."
  },
  {
    "id": 98,
    "comando": "/naturebackground",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Ambienta a cena em um cenário natural ao ar livre.",
    "exemplo": "Pessoa fotografada com uma floresta ao fundo, /naturebackground, /naturalgreens",
    "dica": "Descreva o tipo de vegetação (mata, campo, litoral) para o resultado corresponder a região desejada."
  },
  {
    "id": 99,
    "comando": "/luxuryinterior",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Ambienta a cena em um interior refinado, com materiais e acabamentos realistas de alto padrão.",
    "exemplo": "Reunião de negócios em um escritório de alto padrão, /luxuryinterior, /interiorphoto",
    "dica": "Cite materiais específicos (mármore, madeira nobre, vidro) para elevar o realismo do ambiente gerado."
  },
  {
    "id": 100,
    "comando": "/contextmatch",
    "colecao": "Fotografia",
    "categoria": "Fundos",
    "descricao": "Ajusta escala, perspectiva e iluminação de um elemento inserido para combinar naturalmente com a cena.",
    "exemplo": "Inserir uma pessoa em uma foto de obra mantendo escala e luz coerentes, /contextmatch",
    "dica": "Essencial ao combinar duas imagens - sem esse ajuste, o elemento inserido parece 'colado'."
  },
  {
    "id": 101,
    "comando": "/whitebalance",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Neutraliza matizes de cor indesejados, corrigindo a imagem para tons mais naturais.",
    "exemplo": "Corrigir uma foto com tom amarelado excessivo, /whitebalance",
    "dica": "Use antes de qualquer outro ajuste de cor - corrigir o balanço primeiro evita que os próximos efeitos fiquem deslocados."
  },
  {
    "id": 102,
    "comando": "/warmtones",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Desloca a paleta de cores da imagem para tons mais quentes (amarelos, laranjas, vermelhos).",
    "exemplo": "Dar um tom mais quente e acolhedor a uma foto de interior, /warmtones",
    "dica": "Combine com /goldenhour em cenas externas para reforçar a coerência entre luz e cor."
  },
  {
    "id": 103,
    "comando": "/cooltones",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Desloca a paleta de cores da imagem para tons mais frios (azuis, ciano, cinza-azulado).",
    "exemplo": "Aplicar um tom mais frio e técnico a uma foto de escritório, /cooltones",
    "dica": "Bom para transmitir seriedade em conteúdo institucional; evite em fotos de comida, pois esfria o apetite visual."
  },
  {
    "id": 104,
    "comando": "/mutedcolors",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Reduz a intensidade e saturação das cores, criando uma paleta mais discreta e sofisticada.",
    "exemplo": "Reduzir a saturação de uma foto para um visual mais sóbrio, /mutedcolors",
    "dica": "Combine com /editorialphoto para um resultado com cara de revista ou portfólio profissional."
  },
  {
    "id": 105,
    "comando": "/vibrantcolors",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Intensifica as cores da imagem, mantendo tons de pele naturais e realistas.",
    "exemplo": "Deixar as cores de uma foto de produto mais vivas e chamativas, /vibrantcolors",
    "dica": "Ótimo para thumbnails que precisam chamar atenção na rolagem; use com moderação em retratos."
  },
  {
    "id": 106,
    "comando": "/earthtones",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Aplica uma paleta baseada em marrons, verde-oliva e tons crus.",
    "exemplo": "Dar uma paleta terrosa a uma foto de material de construção, /earthtones",
    "dica": "Combina bem com fotos de materiais naturais (madeira, terra, concreto aparente) e temas de sustentabilidade."
  },
  {
    "id": 107,
    "comando": "/pasteltones",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Aplica uma paleta de cores suaves e com baixa saturação.",
    "exemplo": "Dar um visual suave e delicado a uma foto de produto, /pasteltones",
    "dica": "Menos indicado para conteúdo técnico ou sério - funciona melhor em temas leves e lifestyle."
  },
  {
    "id": 108,
    "comando": "/cinematiccolor",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Aplica uma correção de cor com aparência de produção cinematográfica.",
    "exemplo": "Dar um visual de filme a uma cena de obra a noite, /cinematiccolor, /lowkey",
    "dica": "Excelente para thumbnails de vídeo com apelo dramático; combine com /lowkey para reforçar o clima."
  },
  {
    "id": 109,
    "comando": "/monochrome",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Converte a imagem para preto e branco com boa separação de tons entre claros e escuros.",
    "exemplo": "Converter um retrato para preto e branco com bom contraste, /monochrome",
    "dica": "Reforça textura e forma sem a distração da cor - ótimo para detalhes estruturais e materiais."
  },
  {
    "id": 110,
    "comando": "/colorconsistency",
    "colecao": "Fotografia",
    "categoria": "Cor e Humor",
    "descricao": "Ajusta e uniformiza as cores entre várias imagens de uma mesma série.",
    "exemplo": "Padronizar as cores de uma sequência de fotos para um carrossel, /colorconsistency",
    "dica": "Use sempre que for publicar várias imagens juntas para manter a identidade visual coesa."
  },
  {
    "id": 111,
    "comando": "/editorialphoto",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Aplica um visual conceitual de revista, com composição elaborada e intenção estética forte.",
    "exemplo": "Foto conceitual de um engenheiro em estilo de reportagem de revista, /editorialphoto",
    "dica": "Combine com /mutedcolors ou /cinematiccolor para reforçar a sofisticação típica do estilo editorial."
  },
  {
    "id": 112,
    "comando": "/documentarystyle",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Aplica um visual observacional e realista, como se a cena não tivesse sido encenada.",
    "exemplo": "Foto espontânea de uma equipe trabalhando em obra, /documentarystyle",
    "dica": "Peça poses e expressões 'naturais, não posadas' no prompt para reforçar a sensação de autenticidade."
  },
  {
    "id": 113,
    "comando": "/lifestylephoto",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Retrata atividades cotidianas organizadas de forma natural, sem parecer excessivamente produzida.",
    "exemplo": "Profissional revisando plantas em casa, em um momento cotidiano, /lifestylephoto",
    "dica": "Descreva uma atividade real (tomando café, olhando documentos) para reforçar a naturalidade."
  },
  {
    "id": 114,
    "comando": "/fineartphoto",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Cria uma atmosfera artística e expressiva, priorizando emoção e conceito sobre realismo documental.",
    "exemplo": "Composição artística e conceitual sobre estruturas urbanas, /fineartphoto",
    "dica": "De liberdade criativa na descrição (metáforas visuais, conceitos abstratos) - funciona melhor com prompts menos literais."
  },
  {
    "id": 115,
    "comando": "/minimalphoto",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Simplifica elementos, cores e cenário, deixando a composição enxuta e direta.",
    "exemplo": "Foto minimalista de uma ferramenta isolada em fundo neutro, /minimalphoto",
    "dica": "Combine com /negativeSpace e /cleanbackground para reforçar a limpeza visual do estilo."
  },
  {
    "id": 116,
    "comando": "/cinematicstill",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Da a imagem a aparência de um frame retirado de um filme, com composição e luz dramáticas.",
    "exemplo": "Cena de obra ao entardecer com aparência de still de filme, /cinematicstill",
    "dica": "Combine com formato horizontal amplo (widescreen) para reforçar a sensação de cinema."
  },
  {
    "id": 117,
    "comando": "/analoglook",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Aplica cor e textura inspiradas em fotografia analógica, com grão e tons característicos de filme.",
    "exemplo": "Dar um visual de filme fotográfico a uma foto de rua, /analoglook",
    "dica": "Combine com /retro80s ou /retro90s quando quiser cravar uma década específica, em vez de um 'filme' genérico."
  },
  {
    "id": 118,
    "comando": "/retro80s",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Aplica uma estética fotográfica inspirada nos anos 1980.",
    "exemplo": "Retrato com visual de propaganda dos anos 80, /retro80s",
    "dica": "Descreva também figurino e cores de época no prompt - o comando define apenas o tratamento da imagem."
  },
  {
    "id": 119,
    "comando": "/retro90s",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Aplica uma estética fotográfica inspirada nos anos 1990.",
    "exemplo": "Foto de grupo com visual de album de fotos dos anos 90, /retro90s",
    "dica": "Funciona bem com grão de filme leve; para um efeito mais forte de 'polaroid', descreva bordas brancas no prompt."
  },
  {
    "id": 120,
    "comando": "/directflash",
    "colecao": "Fotografia",
    "categoria": "Estilos Fotográficos",
    "descricao": "Simula o uso de flash direto na câmera, com sombras marcadas e contraste elevado.",
    "exemplo": "Foto de festa com flash direto e sombras fortes, /directflash",
    "dica": "Ótimo para um visual despojado e autêntico; evite em retratos corporativos, onde parece pouco profissional."
  },
  {
    "id": 121,
    "comando": "/producthero",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Torna o produto o ponto focal absoluto da composição.",
    "exemplo": "Capa de ebook com o produto centralizado como destaque principal, /producthero",
    "dica": "Combine com /centercomposition e /cleanbackground para reforçar o protagonismo do produto."
  },
  {
    "id": 122,
    "comando": "/packshot",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Mostra uma visão clara do produto junto de sua embalagem.",
    "exemplo": "Foto clara de um ebook com a capa e elementos da embalagem visíveis, /packshot",
    "dica": "Peça ângulo frontal ou levemente 3/4 para garantir que o texto e o design da capa fiquem legíveis."
  },
  {
    "id": 123,
    "comando": "/whitebackground",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Isola o produto sobre um fundo branco limpo, formato padrão de catálogo e e-commerce.",
    "exemplo": "Produto fotografado isolado em fundo branco puro, /whitebackground, /highkey",
    "dica": "Peça 'sombra de contato sutil' no prompt para o produto não parecer flutuando de forma artificial."
  },
  {
    "id": 124,
    "comando": "/productflatlay",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Organiza produtos vistos diretamente de cima, um arranjo popular em redes sociais.",
    "exemplo": "Ferramentas de trabalho organizadas vistas de cima, /productflatlay, /topdown",
    "dica": "Descreva o espaçamento entre os itens (organizado, com respiro) para evitar uma composição poluída."
  },
  {
    "id": 125,
    "comando": "/productmacro",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Aproxima a câmera para revelar pequenos detalhes do produto.",
    "exemplo": "Detalhe aproximado da textura da capa de um ebook, /productmacro",
    "dica": "Combine com /materialdetail quando o objetivo for destacar textura, acabamento ou qualidade de material."
  },
  {
    "id": 126,
    "comando": "/labelpreserve",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Mantém o texto e os logotipos do rótulo do produto legíveis e sem distorção.",
    "exemplo": "Foto de produto mantendo o texto da embalagem legível, /labelpreserve",
    "dica": "Use sempre que o produto tiver marca, texto ou logotipo importante - sem isso, textos tendem a sair distorcidos."
  },
  {
    "id": 127,
    "comando": "/productshape",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Preserva a forma e as proporções originais do produto durante a edição.",
    "exemplo": "Ajustar o fundo do produto sem alterar seu formato original, /productshape",
    "dica": "Combine com /backgroundswap para trocar apenas o cenário, sem deformar o produto em si."
  },
  {
    "id": 128,
    "comando": "/materialdetail",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Revela as características do material do objeto (textura, brilho, rugosidade).",
    "exemplo": "Destacar a textura de um material de construção, /materialdetail, /sidelight",
    "dica": "Combine com /sidelight, já que luz rasante lateral é o que mais evidencia textura e relevo."
  },
  {
    "id": 129,
    "comando": "/controlledreflection",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Adiciona reflexos calculados que ajudam a revelar a forma e o volume do objeto.",
    "exemplo": "Produto com reflexo sutil que reforça sua forma, /controlledreflection",
    "dica": "Use com moderação em superfícies muito brilhantes - reflexos exagerados distraem do próprio produto."
  },
  {
    "id": 130,
    "comando": "/contactshadow",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Produto",
    "descricao": "Adiciona uma sombra de contato realista, ancorando o objeto visualmente ao chao ou a superfície.",
    "exemplo": "Produto sobre uma mesa com sombra de contato natural, /contactshadow",
    "dica": "Essencial em fotos de produto sobre fundo liso - sem essa sombra, o objeto parece 'colado' ou flutuando."
  },
  {
    "id": 131,
    "comando": "/foodphoto",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Aplica uma apresentação apetitosa e visualmente atraente ao prato.",
    "exemplo": "Prato de comida apresentado de forma apetitosa, /foodphoto",
    "dica": "Descreva o prato com detalhes sensoriais (crocante, suculento, fresco) para guiar melhor a composição."
  },
  {
    "id": 132,
    "comando": "/appetizinglight",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Usa uma luz que realça a textura e a sensação de frescor do alimento.",
    "exemplo": "Prato iluminado para destacar frescor e textura, /appetizinglight",
    "dica": "Combine com /sidelight, o ângulo de luz que mais realça a textura de alimentos."
  },
  {
    "id": 133,
    "comando": "/foodcloseup",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Aproxima a câmera para mostrar detalhes específicos do prato.",
    "exemplo": "Close-up de um prato destacando os detalhes dos ingredientes, /foodcloseup",
    "dica": "Combine com /shallowfocus para desfocar o fundo e concentrar a atenção no alimento."
  },
  {
    "id": 134,
    "comando": "/foodflatlay",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Mostra o prato visto diretamente de cima, formato clássico para redes sociais.",
    "exemplo": "Mesa posta fotografada de cima, com pratos organizados, /foodflatlay, /topdown",
    "dica": "Peça talheres e guardanapos organizados ao redor do prato para compor a cena sem sobrecarregá-la."
  },
  {
    "id": 135,
    "comando": "/steamdetail",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Adiciona um vapor sutil e realista saindo de um alimento quente.",
    "exemplo": "Prato de sopa quente com vapor subindo suavemente, /steamdetail",
    "dica": "Use com moderação - vapor exagerado parece artificial; peça 'vapor sutil e fino' no prompt."
  },
  {
    "id": 136,
    "comando": "/crispytexture",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Enfatiza superfícies crocantes do alimento, reforçando a sensação de textura.",
    "exemplo": "Destacar a crocância da casca de um pão, /crispytexture",
    "dica": "Combine com luz lateral (/sidelight) para acentuar ainda mais o relevo da superfície crocante."
  },
  {
    "id": 137,
    "comando": "/saucegloss",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Adiciona um brilho realista e apetitoso a molhos.",
    "exemplo": "Molho brilhante e apetitoso cobrindo o prato, /saucegloss",
    "dica": "Combine com /appetizinglight para reforçar tanto o brilho do molho quanto a textura geral do prato."
  },
  {
    "id": 138,
    "comando": "/drinkcondensation",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Adiciona gotas de condensação realistas em bebidas geladas.",
    "exemplo": "Copo gelado com gotas de condensação na superfície, /drinkcondensation",
    "dica": "Especifique o tipo de recipiente (copo, garrafa, lata) - a condensação se comporta diferente em cada um."
  },
  {
    "id": 139,
    "comando": "/pourshot",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Captura o momento de um líquido sendo servido de forma crível e dinâmica.",
    "exemplo": "Bebida sendo servida em um copo, capturando o movimento do líquido, /pourshot",
    "dica": "Combine com /freezeaction para garantir que o movimento do líquido fique nítido e não borrado."
  },
  {
    "id": 140,
    "comando": "/ingredientstory",
    "colecao": "Fotografia",
    "categoria": "Comida e Bebidas",
    "descricao": "Compõe a cena do prato principal cercado pelos ingredientes que o compõem.",
    "exemplo": "Prato principal cercado pelos ingredientes crus usados no preparo, /ingredientstory",
    "dica": "Liste os ingredientes reais da receita no prompt para o resultado ficar coerente com o prato."
  },
  {
    "id": 141,
    "comando": "/fashioneditorial",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Aplica um conceito visual de revista de moda, com forte intenção estética.",
    "exemplo": "Ensaio de moda conceitual em ambiente urbano, /fashioneditorial",
    "dica": "Combine com /mutedcolors ou /cinematiccolor para reforçar a sofisticação editorial."
  },
  {
    "id": 142,
    "comando": "/lookbookphoto",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Mostra o look completo de forma clara e consistente, típico de catálogos de moda.",
    "exemplo": "Foto de corpo inteiro mostrando o look completo, /lookbookphoto",
    "dica": "Peça enquadramento de corpo inteiro e fundo neutro para o foco ficar inteiramente na roupa."
  },
  {
    "id": 143,
    "comando": "/streetwearphoto",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Ambienta a moda em um cenário urbano casual.",
    "exemplo": "Look casual fotografado em um cenário de rua urbano, /streetwearphoto",
    "dica": "Combine com /urbanbackground para garantir coerência entre o estilo da roupa e o cenário ao redor."
  },
  {
    "id": 144,
    "comando": "/formalwear",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Enfatiza roupas e aparência formais.",
    "exemplo": "Retrato profissional em traje formal, /formalwear, /corporate",
    "dica": "Combine com /studiobackdrop ou /luxuryinterior para reforçar a seriedade do contexto formal."
  },
  {
    "id": 145,
    "comando": "/modestfashion",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Aplica um estilo elegante e discreto de vestuário.",
    "exemplo": "Look elegante e discreto fotografado em ambiente externo, /modestfashion",
    "dica": "Descreva tecidos e cortes específicos no prompt, já que o comando define a intenção, não a peça exata."
  },
  {
    "id": 146,
    "comando": "/fabrictexture",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Refina e evidencia a textura do tecido da roupa.",
    "exemplo": "Destacar a textura do tecido de uma peça de roupa, /fabrictexture",
    "dica": "Combine com luz lateral (/sidelight) para acentuar relevo e trama do tecido."
  },
  {
    "id": 147,
    "comando": "/garmentpreserve",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Mantém design, cor e corte originais da roupa durante a edição.",
    "exemplo": "Trocar o fundo da foto sem alterar a roupa original, /garmentpreserve, /backgroundswap",
    "dica": "Use sempre que precisar editar apenas cenário ou pose, sem risco de alterar a peça de roupa."
  },
  {
    "id": 148,
    "comando": "/tailoredfit",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Ajusta como a roupa se encaixa e cai sobre o corpo.",
    "exemplo": "Ajustar o caimento de uma roupa para um visual mais alinhado, /tailoredfit",
    "dica": "Combine com /fashionmovement quando quiser um caimento mais natural em vez de estático."
  },
  {
    "id": 149,
    "comando": "/accessorydetail",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Evidencia detalhes de acessórios (relógios, bolsas, joias).",
    "exemplo": "Destacar os detalhes de um acessório usado no look, /accessorydetail, /productmacro",
    "dica": "Combine com /productmacro quando o acessório for pequeno e precisar de aproximação extra."
  },
  {
    "id": 150,
    "comando": "/fashionmovement",
    "colecao": "Fotografia",
    "categoria": "Fotografia de Moda",
    "descricao": "Adiciona movimento natural ao tecido e a pose, evitando um visual estático.",
    "exemplo": "Roupa com movimento natural do tecido durante uma caminhada, /fashionmovement",
    "dica": "Combine com /motionblur sutil apenas no tecido, mantendo o rosto e o restante nítidos."
  },
  {
    "id": 151,
    "comando": "/travelphoto",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Conta uma história por meio do lugar e da atividade retratada.",
    "exemplo": "Foto contando a experiência de visitar um novo lugar, /travelphoto",
    "dica": "Inclua uma ação específica (caminhando, explorando, observando) para a cena parecer mais narrativa."
  },
  {
    "id": 152,
    "comando": "/landscapephoto",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Torna a paisagem o verdadeiro assunto principal da imagem.",
    "exemplo": "Paisagem natural como protagonista da composição, /landscapephoto",
    "dica": "Combine com /leadinglines para guiar o olhar através da paisagem até o ponto mais interessante."
  },
  {
    "id": 153,
    "comando": "/seascape",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Retrata o mar, a costa e as ondas como elementos centrais.",
    "exemplo": "Vista do mar com ondas quebrando na costa, /seascape",
    "dica": "Combine com /watersmooth quando quiser um efeito de água suave em vez de ondas nítidas e agitadas."
  },
  {
    "id": 154,
    "comando": "/mountainview",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Enfatiza a profundidade e a luz em camadas de montanhas.",
    "exemplo": "Cadeia de montanhas com camadas de profundidade visíveis, /mountainview",
    "dica": "Peça um horário específico (amanhecer, entardecer) para reforçar a separação de camadas pela luz."
  },
  {
    "id": 155,
    "comando": "/forestlight",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Aplica uma luz filtrada característica de florestas e áreas com muita vegetação.",
    "exemplo": "Trilha na floresta com luz filtrada pelas árvores, /forestlight, /dappledlight",
    "dica": "Combine com /dappledlight para reforçar o padrão de luz e sombra típico da vegetação densa."
  },
  {
    "id": 156,
    "comando": "/mistymorning",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Adiciona uma névoa suave e em camadas, típica do início da manhã.",
    "exemplo": "Paisagem com névoa suave logo pela manhã, /mistymorning, /morninglight",
    "dica": "Funciona melhor em cenas com profundidade (vales, campos abertos), pois a névoa reforça a distância."
  },
  {
    "id": 157,
    "comando": "/dramaticclouds",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Enfatiza formações de nuvens dramáticas no céu.",
    "exemplo": "Céu com nuvens dramáticas sobre a paisagem, /dramaticclouds",
    "dica": "Combine com /lowangle para dar mais protagonismo ao céu na composição."
  },
  {
    "id": 158,
    "comando": "/naturalgreens",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Aplica tons de vegetação naturais, evitando verdes artificiais ou neon.",
    "exemplo": "Vegetação com tons de verde naturais e realistas, /naturalgreens",
    "dica": "Use sempre que fotos de natureza sairem com verde 'gritante' demais - o comando corrige para um tom mais fiel."
  },
  {
    "id": 159,
    "comando": "/watersmooth",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Suaviza a água como em uma exposição longa, criando um efeito sedoso.",
    "exemplo": "Cachoeira com efeito de água suave e sedosa, /watersmooth",
    "dica": "Combine com /landscapephoto ou /seascape quando a água for parte importante da composição geral."
  },
  {
    "id": 160,
    "comando": "/horizonlevel",
    "colecao": "Fotografia",
    "categoria": "Viagem e Paisagens",
    "descricao": "Corrige e alinha o horizonte da imagem, deixando-o perfeitamente nivelado.",
    "exemplo": "Corrigir o alinhamento do horizonte em uma foto de paisagem, /horizonlevel",
    "dica": "Aplique por último, depois de qualquer ajuste de ângulo - pequenas inclinações só aparecem nessa checagem final."
  },
  {
    "id": 161,
    "comando": "/architecturephoto",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Enfatiza a forma e as proporções do edifício.",
    "exemplo": "Prédio fotografado destacando sua forma e proporções, /architecturephoto",
    "dica": "Combine com /verticallines para garantir que as linhas do prédio fiquem retas, sem parecer 'caindo para trás'."
  },
  {
    "id": 162,
    "comando": "/interiorphoto",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Cria uma composição equilibrada de interiores, com boa distribuição de luz.",
    "exemplo": "Ambiente interno fotografado com composição e luz equilibradas, /interiorphoto",
    "dica": "Combine com /ambientlight para preservar a iluminação real do ambiente em vez de uma luz genérica."
  },
  {
    "id": 163,
    "comando": "/verticallines",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Endireita as linhas verticais do prédio, corrigindo distorções de perspectiva.",
    "exemplo": "Corrigir a inclinação das linhas verticais de uma fachada, /verticallines",
    "dica": "Essencial em fotos de baixo ângulo (/lowangle) de prédios altos, onde a distorção é mais perceptível."
  },
  {
    "id": 164,
    "comando": "/roomperspective",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Corrige naturalmente a perspectiva de um ambiente interno.",
    "exemplo": "Corrigir a perspectiva de um cômodo fotografado em ângulo, /roomperspective",
    "dica": "Use quando o ambiente parecer 'torto' por ter sido fotografado de um canto - o comando reequilibra o espaço."
  },
  {
    "id": 165,
    "comando": "/windowbalance",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Equilibra a exposição entre o interior do ambiente e a vista externa pela janela.",
    "exemplo": "Equilibrar a luz entre o interior e a vista da janela, /windowbalance",
    "dica": "Resolve o problema clássico de janelas 'estouradas' (brancas) enquanto o interior fica escuro."
  },
  {
    "id": 166,
    "comando": "/ambientlight",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Preserva a iluminação já existente no ambiente, sem substituí-la por uma luz artificial genérica.",
    "exemplo": "Manter a iluminação natural original de um escritório, /ambientlight",
    "dica": "Use quando a luz real do ambiente (luminárias, janelas) já for esteticamente interessante."
  },
  {
    "id": 167,
    "comando": "/interiordetail",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Evidencia detalhes de móveis e materiais do ambiente.",
    "exemplo": "Destacar detalhes de acabamento de um móvel planejado, /interiordetail",
    "dica": "Combine com /macrophoto quando quiser aproximar ainda mais de um detalhe específico de acabamento."
  },
  {
    "id": 168,
    "comando": "/facadephoto",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Concentra o enquadramento na fachada do edifício.",
    "exemplo": "Foto frontal da fachada de um prédio, /facadephoto, /symmetry",
    "dica": "Combine com /symmetry quando a fachada tiver um desenho simétrico, reforçando o impacto visual."
  },
  {
    "id": 169,
    "comando": "/twilightexterior",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Retrata o exterior do edifício ao entardecer, com as luzes internas já acesas.",
    "exemplo": "Fachada de um prédio ao entardecer com luzes internas acesas, /twilightexterior, /bluehour",
    "dica": "Combine com /bluehour para obter o contraste clássico entre céu azulado e janelas em tom quente."
  },
  {
    "id": 170,
    "comando": "/spacepreserve",
    "colecao": "Fotografia",
    "categoria": "Arquitetura e Interiores",
    "descricao": "Preserva o layout e a arquitetura originais do ambiente durante qualquer edição.",
    "exemplo": "Editar a iluminação de um ambiente sem alterar sua estrutura original, /spacepreserve",
    "dica": "Use sempre que o objetivo for ajustar apenas luz ou cor de um ambiente real, sem risco de alterar a estrutura."
  },
  {
    "id": 171,
    "comando": "/freezeaction",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Congela o movimento com aparência de obturador rápido, sem borroes.",
    "exemplo": "Congelar o movimento de uma ferramenta em uso, /freezeaction",
    "dica": "Use quando o objetivo for nitidez total do momento; para transmitir velocidade, prefira /motionblur ou /panningshot."
  },
  {
    "id": 172,
    "comando": "/panningshot",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Mantém o assunto nítido enquanto o fundo aparece borrado horizontalmente, transmitindo velocidade.",
    "exemplo": "Veículo em movimento com fundo borrado horizontalmente, /panningshot",
    "dica": "Descreva o assunto se movendo lateralmente (não de frente para a câmera) para gerar o efeito clássico."
  },
  {
    "id": 173,
    "comando": "/motionblur",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Borra naturalmente as partes em movimento da cena, preservando o restante nítido.",
    "exemplo": "Borrao natural nas mãos de alguém trabalhando rapidamente, /motionblur",
    "dica": "Especifique qual parte deve borrar (mãos, roda, tecido) - sem isso, o efeito pode se espalhar pela imagem toda."
  },
  {
    "id": 174,
    "comando": "/sportsphoto",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Cria uma ação esportiva crível e dinâmica.",
    "exemplo": "Jogador em ação durante uma partida, /sportsphoto, /freezeaction",
    "dica": "Combine com /peakaction para capturar exatamente o instante mais impactante do movimento."
  },
  {
    "id": 175,
    "comando": "/peakaction",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Captura o momento de pico de uma ação, o instante mais dramático do movimento.",
    "exemplo": "Capturar o ponto mais alto do salto de um atleta, /peakaction",
    "dica": "Descreva especificamente qual é o 'pico' desejado (o salto no ar, o impacto) para guiar melhor o resultado."
  },
  {
    "id": 176,
    "comando": "/golfaction",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Ajusta a pose e o equipamento de golfe para proporções realistas.",
    "exemplo": "Jogador de golfe em pose de taco durante o swing, /golfaction",
    "dica": "Combine com /peakaction para capturar o momento exato do impacto do taco com a bola."
  },
  {
    "id": 177,
    "comando": "/wildlifephoto",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Retrata animais dentro de seu ambiente natural.",
    "exemplo": "Animal selvagem fotografado em seu habitat natural, /wildlifephoto",
    "dica": "Combine com /135mmlook para simular a distância de segurança típica da fotografia de vida selvagem."
  },
  {
    "id": 178,
    "comando": "/birdflight",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Garante anatomia natural e crível das asas de um pássaro em voo.",
    "exemplo": "Pássaro em pleno voo com as asas estendidas, /birdflight",
    "dica": "Combine com /freezeaction para manter as penas e as asas nítidas mesmo durante o movimento rápido."
  },
  {
    "id": 179,
    "comando": "/petportrait",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Enfatiza o caráter e a personalidade de um animal de estimação.",
    "exemplo": "Retrato de um cachorro destacando sua personalidade, /petportrait, /eyelevel",
    "dica": "Fotografar na altura dos olhos do animal (/eyelevel) cria uma conexão muito mais forte do que ângulos de cima."
  },
  {
    "id": 180,
    "comando": "/animalaction",
    "colecao": "Fotografia",
    "categoria": "Movimento, Esportes e Animais",
    "descricao": "Retrata movimento e interação natural entre animais.",
    "exemplo": "Dois animais interagindo naturalmente em movimento, /animalaction",
    "dica": "Combine com /motionblur sutil nas patas ou na cauda para reforçar o movimento sem perder nitidez no rosto."
  },
  {
    "id": 181,
    "comando": "/restoration",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Restaura uma foto antiga preservando ao máximo o conteúdo original.",
    "exemplo": "Restaurar uma foto antiga de família preservando os detalhes originais, /restoration",
    "dica": "Use como comando inicial; depois refine com comandos específicos (/scratchremove, /fadefix) conforme o dano."
  },
  {
    "id": 182,
    "comando": "/scratchremove",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Remove arranhões físicos presentes na fotografia.",
    "exemplo": "Remover arranhões visíveis em uma foto antiga escaneada, /scratchremove",
    "dica": "Combine com /dustremove, já que arranhões e poeira costumam aparecer juntos em fotos antigas escaneadas."
  },
  {
    "id": 183,
    "comando": "/dustremove",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Remove pequenos pontos de poeira captados no escaneamento da foto.",
    "exemplo": "Remover pontos de poeira de uma foto escaneada, /dustremove",
    "dica": "Frequentemente usado em conjunto com /scratchremove logo no início do processo de restauração."
  },
  {
    "id": 184,
    "comando": "/creasefix",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Reduz marcas de dobras e vincos na fotografia original.",
    "exemplo": "Reduzir as marcas de dobra em uma foto antiga dobrada, /creasefix",
    "dica": "Aplique antes de /colorize - corrigir a superfície primeiro evita que a colorização realce os vincos."
  },
  {
    "id": 185,
    "comando": "/fadefix",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Corrige tons desbotados pelo tempo, recuperando contraste e definição.",
    "exemplo": "Recuperar o contraste de uma foto antiga desbotada, /fadefix",
    "dica": "Combine com /colorcastfix quando o desbotamento vier acompanhado de um tom amarelado geral."
  },
  {
    "id": 186,
    "comando": "/colorize",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Adiciona cores plausíveis a uma foto em preto e branco, com base em referências realistas.",
    "exemplo": "Colorir uma foto antiga em preto e branco de forma realista, /colorize",
    "dica": "Se souber as cores reais (roupas, objetos), descreva-as no prompt - sem referência, a IA precisa 'adivinhar'."
  },
  {
    "id": 187,
    "comando": "/colorcastfix",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Reduz tons de cor indesejados causados pelo envelhecimento ou pelo processo de escaneamento.",
    "exemplo": "Corrigir o tom amarelado geral de uma foto antiga, /colorcastfix",
    "dica": "Aplique antes de /vibrantcolors ou /warmtones, para não reforçar o problema de cor original."
  },
  {
    "id": 188,
    "comando": "/noisereduce",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Reduz ruído digital da imagem, preservando as texturas mais importantes.",
    "exemplo": "Reduzir o ruído de uma foto tirada com pouca luz, /noisereduce",
    "dica": "Use com moderação - reduzir ruído em excesso também apaga detalhes finos reais, como fios de cabelo."
  },
  {
    "id": 189,
    "comando": "/gentledeblur",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Reduz um leve desfoque de forma conservadora, sem inventar detalhes que não existiam.",
    "exemplo": "Melhorar levemente a nitidez de uma foto ligeiramente desfocada, /gentledeblur",
    "dica": "Funciona bem apenas em desfoques leves; fotos muito borradas geram artefatos quando forçadas a ficar nítidas."
  },
  {
    "id": 190,
    "comando": "/archivalpreserve",
    "colecao": "Fotografia",
    "categoria": "Restauração de Fotos",
    "descricao": "Repara danos da foto evitando a invenção de detalhes que não podem ser confirmados.",
    "exemplo": "Restaurar uma foto histórica sem adicionar elementos inventados, /archivalpreserve",
    "dica": "Ideal para fotos de valor histórico, onde fidelidade ao original importa mais que um resultado perfeito."
  },
  {
    "id": 191,
    "comando": "/anatomycheck",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Revisa e corrige inconsistências de anatomia geradas pela IA.",
    "exemplo": "Corrigir proporções anatômicas incorretas em um retrato gerado, /anatomycheck",
    "dica": "Use como uma segunda passada de revisão, depois de gerar a imagem principal, em poses mais complexas."
  },
  {
    "id": 192,
    "comando": "/handfix",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Corrige o número e o posicionamento dos dedos das mãos.",
    "exemplo": "Corrigir os dedos das mãos em uma foto gerada por IA, /handfix",
    "dica": "Mãos ainda são um dos pontos mais problemáticos em imagens de IA - revise sempre que estiverem em destaque."
  },
  {
    "id": 193,
    "comando": "/perspectivefix",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Alinha a perspectiva entre o assunto e os objetos ao redor.",
    "exemplo": "Corrigir a perspectiva entre uma pessoa e o objeto ao seu lado, /perspectivefix",
    "dica": "Use sempre que um elemento inserido parecer 'fora de escala' ou em ângulo diferente do restante da cena."
  },
  {
    "id": 194,
    "comando": "/shadowmatch",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Ajusta a direção e a suavidade das sombras para que fiquem coerentes entre si.",
    "exemplo": "Ajustar as sombras de um elemento adicionado para combinar com a cena, /shadowmatch",
    "dica": "Essencial junto com /contextmatch sempre que compuser elementos de fontes diferentes na mesma imagem."
  },
  {
    "id": 195,
    "comando": "/edgecleanup",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Refina as bordas de cabelo, roupas e objetos, removendo serrilhados ou recortes artificiais.",
    "exemplo": "Refinar as bordas do cabelo em um retrato recortado, /edgecleanup",
    "dica": "Aplique depois de qualquer /backgroundswap - e nesse momento que bordas mal recortadas ficam mais evidentes."
  },
  {
    "id": 196,
    "comando": "/artifactremove",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Remove defeitos visuais causados pelo processamento da imagem por IA.",
    "exemplo": "Remover artefatos visuais estranhos gerados na imagem, /artifactremove",
    "dica": "Use como revisão final, depois de todos os outros ajustes, para capturar pequenos defeitos que passaram despercebidos."
  },
  {
    "id": 197,
    "comando": "/upscale",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Solicita o aumento da resolução da imagem, respeitando os limites da ferramenta usada.",
    "exemplo": "Aumentar a resolução de uma imagem para impressão, /upscale",
    "dica": "Verifique o limite máximo de resolução da ferramenta antes de pedir - um aumento irreal pode gerar artefatos."
  },
  {
    "id": 198,
    "comando": "/ar4by5",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Define o enquadramento em formato retrato, proporção 4:5.",
    "exemplo": "Gerar uma imagem em formato retrato 4:5 para post no Instagram, /ar4by5",
    "dica": "E a proporção mais usada em posts de feed do Instagram - ocupa mais espaço vertical na tela do que o quadrado."
  },
  {
    "id": 199,
    "comando": "/ar9by16",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Define o enquadramento em formato retrato vertical, proporção 9:16.",
    "exemplo": "Gerar uma imagem vertical para Stories ou Reels, /ar9by16",
    "dica": "Formato obrigatório para thumbnails e capas de vídeos verticais (Shorts, Reels, Stories) - defina isso logo no início."
  },
  {
    "id": 200,
    "comando": "/ar3by2",
    "colecao": "Fotografia",
    "categoria": "Correções e Formatos",
    "descricao": "Define o enquadramento em formato paisagem, proporção 3:2.",
    "exemplo": "Gerar uma imagem horizontal para thumbnail de YouTube, /ar3by2",
    "dica": "Proporção clássica de fotografia horizontal - boa alternativa ao 16:9 quando quiser um enquadramento menos alongado."
  },
  {
    "id": 1,
    "comando": "/80s",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica uma estética visual inspirada na década de 1980.",
    "exemplo": "Foto de perfil com visual retrô dos anos 80, /80s",
    "dica": "Funciona muito bem para thumbnails nostálgicos; combine com /vhs para reforçar ainda mais a textura de época."
  },
  {
    "id": 2,
    "comando": "/90s",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica uma estética visual inspirada na década de 1990.",
    "exemplo": "Retrato com visual nostálgico dos anos 90, /90s",
    "dica": "Ótimo para conteúdo de nostalgia; combine com /polaroid para um resultado ainda mais autêntico de época."
  },
  {
    "id": 3,
    "comando": "/70s",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica uma estética visual inspirada na década de 1970.",
    "exemplo": "Foto com cores e clima característicos dos anos 70, /70s",
    "dica": "Peça tons quentes e saturados no prompt - e a paleta que mais reforça a identidade visual dessa década."
  },
  {
    "id": 4,
    "comando": "/60s",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica uma estética visual inspirada na década de 1960.",
    "exemplo": "Retrato com estilo visual dos anos 60, /60s",
    "dica": "Combine com /sépia ou /vintagefilm quando quiser um resultado ainda mais antigo e menos 'colorido pop'."
  },
  {
    "id": 5,
    "comando": "/50s",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica uma estética visual inspirada na década de 1950.",
    "exemplo": "Cena com visual clássico dos anos 50, /50s",
    "dica": "Descreva também figurino e objetos de época no prompt - o comando define o tratamento visual, não o cenário."
  },
  {
    "id": 6,
    "comando": "/y2k",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica a estética visual do final dos anos 1990 e início dos anos 2000.",
    "exemplo": "Foto com estética Y2K, cores metálicas e futurista de época, /y2k",
    "dica": "Tag muito popular para conteúdo jovem e de tendência atual; funciona bem em posts de moda e lifestyle."
  },
  {
    "id": 7,
    "comando": "/vhs",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Simula a textura e as distorções visuais de uma fita VHS.",
    "exemplo": "Cena com efeito de fita VHS, linhas e distorção sutil, /vhs",
    "dica": "Combine com /90s ou /80s para reforçar a época associada a esse tipo de mídia."
  },
  {
    "id": 8,
    "comando": "/polaroid",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Simula o visual de uma foto instantânea Polaroid, com borda branca característica.",
    "exemplo": "Foto no formato clássico de Polaroid com borda branca, /polaroid",
    "dica": "Ótimo para album e conteúdo de 'momento capturado'; combine com /70s ou /90s dependendo da década desejada."
  },
  {
    "id": 9,
    "comando": "/sépia",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica um tom monocromático amarronzado, característico de fotos muito antigas.",
    "exemplo": "Retrato de família com tom sépia antigo, /sépia",
    "dica": "Reforça sensação de memória e passado distante - mais antigo visualmente do que /vintagefilm ou /analoglook."
  },
  {
    "id": 10,
    "comando": "/vintagefilm",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Aplica cor e textura inspiradas em fotografia analógica antiga.",
    "exemplo": "Cena com visual de filme fotográfico vintage, /vintagefilm",
    "dica": "Meio-termo entre uma foto moderna e o efeito mais forte do /sépia - bom para nostalgia sem parecer história antiga."
  },
  {
    "id": 11,
    "comando": "/retrofuturism",
    "colecao": "Estilos",
    "categoria": "Retrô e Décadas",
    "descricao": "Combina elementos futuristas com uma estética visual retrô.",
    "exemplo": "Cena futurista com visual retrô dos anos 80, /retrofuturism",
    "dica": "Combina bem com temas de tecnologia e ficção científica; descreva elementos futuristas específicos no prompt."
  },
  {
    "id": 12,
    "comando": "/anime",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Transforma a imagem em um estilo de animação japonesa.",
    "exemplo": "Retrato transformado em estilo anime, /anime",
    "dica": "Descreva o subestilo desejado (anime clássico dos anos 90, anime moderno) para um resultado mais específico."
  },
  {
    "id": 13,
    "comando": "/manga",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica o estilo visual de quadrinhos japoneses em preto e branco.",
    "exemplo": "Cena ilustrada em estilo de manga, /manga",
    "dica": "Funciona muito bem para capas de conteúdo e thumbnails com apelo jovem e geek."
  },
  {
    "id": 14,
    "comando": "/chibi",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Transforma o personagem em uma versão fofa e proporcionalmente reduzida (cabeça grande, corpo pequeno).",
    "exemplo": "Personagem transformado em versão chibi fofa, /chibi",
    "dica": "Ótimo para mascotes e avatares descontraídos; evite em conteúdo institucional ou sério."
  },
  {
    "id": 15,
    "comando": "/cartoon",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Transforma a imagem em um estilo de desenho animado clássico.",
    "exemplo": "Retrato transformado em estilo de desenho animado, /cartoon",
    "dica": "E o estilo mais versátil e reconhecível do grupo - bom ponto de partida antes de tentar subestilos mais específicos."
  },
  {
    "id": 16,
    "comando": "/comicbook",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica o estilo visual de quadrinhos ocidentais, com contornos marcados.",
    "exemplo": "Cena ilustrada em estilo de quadrinho americano, /comicbook",
    "dica": "Combine com /celshading para reforçar o contraste de cor típico dos quadrinhos impressos."
  },
  {
    "id": 17,
    "comando": "/webtoon",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica o estilo visual característico de quadrinhos digitais coreanos.",
    "exemplo": "Cena ilustrada em estilo de webtoon coreano, /webtoon",
    "dica": "Traço mais limpo e suave que o comic book ocidental - bom para conteúdo de narrativa em sequência."
  },
  {
    "id": 18,
    "comando": "/popart",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica o estilo visual gráfico e colorido da pop art.",
    "exemplo": "Retrato transformado em estilo pop art colorido, /popart",
    "dica": "Peça cores fortes e contrastantes no prompt para reforçar ainda mais o impacto visual do estilo."
  },
  {
    "id": 19,
    "comando": "/caricature",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Exagera de forma cômica traços marcantes do rosto do assunto.",
    "exemplo": "Retrato transformado em caricatura exagerada e bem-humorada, /caricature",
    "dica": "Use com bom humor e moderação - funciona melhor com o consentimento da pessoa retratada."
  },
  {
    "id": 20,
    "comando": "/celshading",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica sombreamento em blocos sólidos de cor, típico de animações e quadrinhos.",
    "exemplo": "Personagem com sombreamento em blocos de cor sólida, /celshading",
    "dica": "Combine com /anime ou /cartoon para reforçar o acabamento típico de animação 2D."
  },
  {
    "id": 21,
    "comando": "/lineart",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Reduz a imagem a contornos e linhas, sem preenchimento de cor.",
    "exemplo": "Ilustração reduzida a linhas de contorno, sem cor, /lineart",
    "dica": "Ótimo como base para colorir depois manualmente, ou para um visual minimalista de esboço técnico."
  },
  {
    "id": 22,
    "comando": "/inkcomic",
    "colecao": "Estilos",
    "categoria": "Cartoon e Quadrinhos",
    "descricao": "Aplica um estilo de traço a nanquim, com contraste forte entre preto e branco.",
    "exemplo": "Cena ilustrada em traço de nanquim de alto contraste, /inkcomic",
    "dica": "Reforça um clima mais sério e dramático do que o /comicbook tradicional colorido."
  },
  {
    "id": 23,
    "comando": "/watercolor",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura em aquarela, com transições suaves de cor.",
    "exemplo": "Retrato transformado em pintura de aquarela, /watercolor",
    "dica": "Funciona muito bem em temas delicados (natureza, retratos suaves); peça bordas 'sangradas' para reforçar a textura."
  },
  {
    "id": 24,
    "comando": "/oilpainting",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura a óleo, com pinceladas visíveis e textura de tinta.",
    "exemplo": "Retrato transformado em pintura a óleo clássica, /oilpainting",
    "dica": "Combine com /royalportrait quando quiser um resultado com cara de quadro clássico de museu."
  },
  {
    "id": 25,
    "comando": "/pencilsketch",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula um desenho a lápis, com traços e sombreamento manual.",
    "exemplo": "Retrato transformado em esboço a lápis, /pencilsketch",
    "dica": "Peça 'traços visíveis e sombreamento cruzado' para reforçar a textura de desenho feito a mão."
  },
  {
    "id": 26,
    "comando": "/charcoal",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula um desenho a carvão, com contrastes fortes e textura granulada.",
    "exemplo": "Retrato transformado em desenho a carvão dramático, /charcoal",
    "dica": "Reforça mais contraste e drama que o /pencilsketch - bom para retratos com clima mais intenso."
  },
  {
    "id": 27,
    "comando": "/pastel",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura com giz pastel, de cores suaves e textura granulada.",
    "exemplo": "Cena transformada em pintura com giz pastel suave, /pastel",
    "dica": "Combina bem com temas delicados e infantis; menos indicado para conteúdo técnico ou sério."
  },
  {
    "id": 28,
    "comando": "/gouache",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura em guache, com cores opacas e mais sólidas que a aquarela.",
    "exemplo": "Ilustração transformada em pintura de guache, /gouache",
    "dica": "Boa alternativa ao /watercolor quando quiser cores mais opacas e menos transparentes."
  },
  {
    "id": 29,
    "comando": "/acrylic",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura em tinta acrílica, com cores vibrantes e textura definida.",
    "exemplo": "Retrato transformado em pintura acrílica vibrante, /acrylic",
    "dica": "Combina bem com composições de cores fortes e contrastantes, diferente do efeito mais suave da aquarela."
  },
  {
    "id": 30,
    "comando": "/inkwash",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura em tinta diluída, com tons de cinza em gradação suave.",
    "exemplo": "Paisagem transformada em pintura de tinta diluída, /inkwash",
    "dica": "Visual próximo do /sumi-e, mas com gradações mais livres - bom para paisagens atmosféricas."
  },
  {
    "id": 31,
    "comando": "/sumi-e",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Aplica o estilo tradicional japonês de pintura a tinta, com pinceladas minimalistas.",
    "exemplo": "Paisagem em estilo tradicional japonês de pintura a tinta, /sumi-e",
    "dica": "Funciona melhor com composições simples e poucos elementos - o estilo valoriza espaço vazio."
  },
  {
    "id": 32,
    "comando": "/crosshatch",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula sombreamento por linhas cruzadas, técnica clássica de ilustração e gravura.",
    "exemplo": "Ilustração com sombreamento em linhas cruzadas, /crosshatch",
    "dica": "Combine com /inkcomic ou /pencilsketch para reforçar um visual de ilustração técnica ou editorial antiga."
  },
  {
    "id": 33,
    "comando": "/impasto",
    "colecao": "Estilos",
    "categoria": "Pintura e Esboço",
    "descricao": "Simula uma pintura com camadas espessas e visíveis de tinta.",
    "exemplo": "Retrato transformado em pintura com textura espessa de tinta, /impasto",
    "dica": "Reforça uma textura tátil forte na imagem - bom para um efeito de pintura mais física e expressiva."
  },
  {
    "id": 34,
    "comando": "/papercraft",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma a cena em uma composição feita de papel recortado e dobrado.",
    "exemplo": "Cena transformada em arte de papel recortado, /papercraft",
    "dica": "Funciona muito bem em thumbnails lúdicos e infográficos criativos, dando um ar tátil e artesanal."
  },
  {
    "id": 35,
    "comando": "/papercut",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Simula camadas de papel recortado sobrepostas, criando profundidade.",
    "exemplo": "Ilustração com camadas de papel recortado sobrepostas, /papercut",
    "dica": "Combine com composições em camadas para reforçar ainda mais a sensação de profundidade."
  },
  {
    "id": 36,
    "comando": "/origami",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma o assunto em uma escultura de dobradura de papel.",
    "exemplo": "Objeto transformado em escultura de origami, /origami",
    "dica": "Funciona melhor com formas geométricas simples - assuntos muito orgânicos ficam menos reconhecíveis."
  },
  {
    "id": 37,
    "comando": "/quilling",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Simula a técnica de enrolar tiras de papel para formar desenhos e padrões.",
    "exemplo": "Ilustração feita com a técnica de tiras de papel enroladas, /quilling",
    "dica": "Ótimo para elementos decorativos e ilustrações delicadas; menos indicado para retratos realistas."
  },
  {
    "id": 38,
    "comando": "/claymation",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma a cena em um estilo de animação em massinha (stop-motion).",
    "exemplo": "Personagem transformado em estilo de animação em massinha, /claymation",
    "dica": "Combine com /diorama quando quiser reforçar ainda mais a sensação de cenário em miniatura."
  },
  {
    "id": 39,
    "comando": "/felt",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Simula uma textura de feltro artesanal na composição.",
    "exemplo": "Personagem transformado em textura de feltro artesanal, /felt",
    "dica": "Bom para conteúdo aconchegante e caseiro; combine com cores suaves para reforçar o clima artesanal."
  },
  {
    "id": 40,
    "comando": "/crochet",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma o assunto em uma peça feita de crochê.",
    "exemplo": "Objeto transformado em versão de crochê, /crochet",
    "dica": "Muito popular em tendências atuais de redes sociais; funciona bem com objetos e personagens simples."
  },
  {
    "id": 41,
    "comando": "/knitted",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma o assunto em uma textura de tricô.",
    "exemplo": "Personagem transformado em textura de tricô, /knitted",
    "dica": "Combine com cores aconchegantes (tons terrosos, pastéis) para reforçar a sensação artesanal de la."
  },
  {
    "id": 42,
    "comando": "/embroidery",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Simula um bordado a mão, com pontos e linhas visíveis.",
    "exemplo": "Ilustração transformada em bordado artesanal, /embroidery",
    "dica": "Funciona bem em composições simples com poucos elementos - bordados muito detalhados perdem legibilidade."
  },
  {
    "id": 43,
    "comando": "/diorama",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Transforma a cena em uma miniatura tridimensional dentro de uma caixa ou vitrine.",
    "exemplo": "Cena transformada em miniatura dentro de um diorama, /diorama",
    "dica": "Combine com /tiltshift para reforçar ainda mais a ilusão de miniatura."
  },
  {
    "id": 44,
    "comando": "/miniature",
    "colecao": "Estilos",
    "categoria": "Miniatura e Artesanato",
    "descricao": "Faz a cena parecer uma versão em miniatura do mundo real.",
    "exemplo": "Cidade transformada em versão miniatura, /miniature",
    "dica": "Combine com /tiltshift, técnica clássica que reforça a ilusão de escala reduzida."
  },
  {
    "id": 45,
    "comando": "/3dcartoon",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma a imagem em uma renderização 3D em estilo animado.",
    "exemplo": "Personagem transformado em estilo de animação 3D, /3dcartoon",
    "dica": "Bom padrão para mascotes e personagens de marca; peça um 'acabamento suave e colorido' no prompt."
  },
  {
    "id": 46,
    "comando": "/clayrender",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Simula uma renderização 3D com acabamento de argila fosca.",
    "exemplo": "Objeto renderizado com acabamento de argila fosca, /clayrender",
    "dica": "Ótimo para mostrar formas e volumes de forma limpa, sem a distração de reflexos complexos."
  },
  {
    "id": 47,
    "comando": "/vinyltoy",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma o personagem em um brinquedo de vinil colecionável.",
    "exemplo": "Personagem transformado em brinquedo colecionável de vinil, /vinyltoy",
    "dica": "Peça um acabamento 'liso e brilhante' no prompt para reforçar a textura típica desses colecionáveis."
  },
  {
    "id": 48,
    "comando": "/bobblehead",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma o personagem em um boneco com cabeça grande e desproporcional.",
    "exemplo": "Retrato transformado em boneco bobblehead, /bobblehead",
    "dica": "Funciona muito bem como brincadeira ou mascote pessoal; efeito cômico intencional, evite em conteúdo sério."
  },
  {
    "id": 49,
    "comando": "/actionfigure",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma o personagem em um boneco de ação colecionável, com embalagem.",
    "exemplo": "Retrato transformado em boneco de ação com embalagem, /actionfigure",
    "dica": "Tendência muito popular atualmente; descreva acessórios específicos do 'boneco' para um resultado mais completo."
  },
  {
    "id": 50,
    "comando": "/plushie",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma o personagem em um bicho de pelúcia fofo.",
    "exemplo": "Personagem transformado em pelúcia fofa, /plushie",
    "dica": "Ótimo para mascotes de marca com apelo emocional; funciona melhor com formas arredondadas."
  },
  {
    "id": 51,
    "comando": "/lowpoly",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Simplifica a imagem em formas geométricas poligonais de baixa resolução.",
    "exemplo": "Objeto transformado em modelo 3D de baixa poligonagem, /lowpoly",
    "dica": "Bom para um visual moderno e gráfico; funciona melhor com formas simples do que com detalhes finos."
  },
  {
    "id": 52,
    "comando": "/voxel",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma a imagem em blocos cúbicos tridimensionais, como em jogos de blocos.",
    "exemplo": "Cena transformada em estilo de blocos cúbicos (voxel), /voxel",
    "dica": "Ótimo para conteúdo com apelo a jogos; funciona melhor em cenas ou objetos simples e reconhecíveis."
  },
  {
    "id": 53,
    "comando": "/pixelart",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Transforma a imagem em arte de pixels, estilo de jogos retrô.",
    "exemplo": "Cena transformada em arte de pixels estilo retrô, /pixelart",
    "dica": "Combine com /y2k ou /80s quando quiser reforçar a nostalgia de jogos eletrônicos antigos."
  },
  {
    "id": 54,
    "comando": "/isometric",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Aplica uma perspectiva isométrica, comum em jogos e ilustrações técnicas.",
    "exemplo": "Ambiente ilustrado em perspectiva isométrica, /isometric",
    "dica": "Ótimo para mostrar plantas e ambientes de forma clara, com todos os elementos visíveis ao mesmo tempo."
  },
  {
    "id": 55,
    "comando": "/snowglobe",
    "colecao": "Estilos",
    "categoria": "3D, Brinquedos e Jogos",
    "descricao": "Coloca a cena dentro de uma bola de neve decorativa.",
    "exemplo": "Cena colocada dentro de uma bola de neve, /snowglobe",
    "dica": "Funciona muito bem em conteúdo sazonal de fim de ano; peça flocos de neve flutuando para reforçar o efeito."
  },
  {
    "id": 56,
    "comando": "/filmnoir",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica um visual dramático em preto e branco, típico do cinema policial clássico.",
    "exemplo": "Cena dramática em preto e branco estilo cinema policial clássico, /filmnoir",
    "dica": "Descreva sombras fortes e contraste alto no prompt para reforçar o clima de mistério do estilo."
  },
  {
    "id": 57,
    "comando": "/cinematic",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Da a imagem uma aparência geral de still de produção cinematográfica.",
    "exemplo": "Cena com aparência de still de filme, /cinematic",
    "dica": "Funciona muito bem em thumbnails de vídeo; combine com uma paleta de cor específica para reforçar o gênero."
  },
  {
    "id": 58,
    "comando": "/cyberpunk",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética futurista urbana, com neon e tecnologia avançada.",
    "exemplo": "Cidade futurista com luzes neon e alta tecnologia, /cyberpunk",
    "dica": "Descreva cores neon específicas (roxo, ciano, magenta) no prompt para reforçar a identidade visual."
  },
  {
    "id": 59,
    "comando": "/steampunk",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Combina elementos vitorianos com tecnologia mecânica e engrenagens.",
    "exemplo": "Cena com estética vitoriana e engrenagens mecânicas, /steampunk",
    "dica": "Descreva materiais específicos (latão, couro, engrenagens de bronze) para reforçar a estética retrô-mecânica."
  },
  {
    "id": 60,
    "comando": "/synthwave",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética visual dos anos 80 com cores neon e grades futuristas.",
    "exemplo": "Cena com estética neon dos anos 80 e grade futurista, /synthwave",
    "dica": "Combine com tons de rosa e roxo no prompt, cores mais associadas a essa estética."
  },
  {
    "id": 61,
    "comando": "/vaporwave",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética surreal e nostálgica, com cores pastel e elementos retrô-digitais.",
    "exemplo": "Cena surreal com estética nostálgica em tons pastel, /vaporwave",
    "dica": "Combine com estátuas ou grades geométricas no prompt para reforçar a estética típica desse estilo."
  },
  {
    "id": 62,
    "comando": "/dreamscape",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Cria uma cena onírica e surreal, com lógica visual de sonho.",
    "exemplo": "Cena surreal com atmosfera de sonho, /dreamscape",
    "dica": "De liberdade criativa na descrição (elementos flutuantes, escalas improváveis) - funciona melhor com prompts menos literais."
  },
  {
    "id": 63,
    "comando": "/ethereal",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Cria uma atmosfera etérea, suave e levemente sobrenatural.",
    "exemplo": "Retrato com atmosfera suave e etérea, /ethereal",
    "dica": "Combine com luz suave e neblina leve no prompt para reforçar a sensação de leveza e delicadeza."
  },
  {
    "id": 64,
    "comando": "/darkfantasy",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética sombria e fantástica, com clima tenso e misterioso.",
    "exemplo": "Cena de fantasia sombria com clima misterioso, /darkfantasy",
    "dica": "Combine com sombras fortes e cores dessaturadas no prompt para reforçar o clima pesado do estilo."
  },
  {
    "id": 65,
    "comando": "/scifi",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética futurista de ficção científica.",
    "exemplo": "Cena futurista de ficção científica, /scifi",
    "dica": "Especifique o tipo de ambiente (nave espacial, cidade futurista, outro planeta) para direcionar melhor o resultado."
  },
  {
    "id": 66,
    "comando": "/western",
    "colecao": "Estilos",
    "categoria": "Cinema e Fantasia",
    "descricao": "Aplica uma estética visual de faroeste clássico.",
    "exemplo": "Cena ambientada no velho oeste, estilo faroeste clássico, /western",
    "dica": "Combine com tons terrosos e quentes no prompt para reforçar a paleta clássica do gênero."
  },
  {
    "id": 67,
    "comando": "/headshot",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Cria um retrato profissional focado no rosto, no padrão usado em perfis corporativos.",
    "exemplo": "Foto de perfil profissional para LinkedIn, /headshot",
    "dica": "E a base mais segura para fotos de perfil profissionais - funciona bem sem precisar de muitos outros ajustes."
  },
  {
    "id": 68,
    "comando": "/passport",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Cria um retrato no formato padrão de foto de documento.",
    "exemplo": "Foto no formato padrão de documento oficial, /passport",
    "dica": "Peça fundo liso e expressão neutra no prompt, exigências comuns em fotos de documento."
  },
  {
    "id": 69,
    "comando": "/yearbook80s",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Cria um retrato no estilo de album de formatura dos anos 1980.",
    "exemplo": "Retrato estilo album de formatura dos anos 80, /yearbook80s",
    "dica": "Ótimo para conteúdo de nostalgia e humor; funciona bem em posts comparativos de 'antes e depois'."
  },
  {
    "id": 70,
    "comando": "/yearbook90s",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Cria um retrato no estilo de album de formatura dos anos 1990.",
    "exemplo": "Retrato estilo album de formatura dos anos 90, /yearbook90s",
    "dica": "Combine com um fundo de estúdio genérico com laser ou nuvens, elemento clássico desse tipo de foto na época."
  },
  {
    "id": 71,
    "comando": "/royalportrait",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Transforma o retrato em uma pintura real de época, como um monarca ou nobre.",
    "exemplo": "Retrato transformado em pintura real de época, /royalportrait",
    "dica": "Combine com /oilpainting para reforçar ainda mais a aparência de quadro clássico de museu."
  },
  {
    "id": 72,
    "comando": "/oilportrait",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Transforma o retrato especificamente em uma pintura a óleo clássica de rosto.",
    "exemplo": "Retrato transformado em pintura a óleo clássica, /oilportrait",
    "dica": "Funciona melhor com boa iluminação de rosto na foto original - a IA usa isso para recriar volume na 'pintura'."
  },
  {
    "id": 73,
    "comando": "/fashioncover",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Transforma o retrato em uma capa de revista de moda.",
    "exemplo": "Retrato transformado em capa de revista de moda, /fashioncover",
    "dica": "Peça também elementos gráficos típicos de capa (título, chamadas) para o efeito completo de revista."
  },
  {
    "id": 74,
    "comando": "/corporate",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Aplica um visual profissional e institucional ao retrato.",
    "exemplo": "Retrato com visual profissional e institucional, /corporate",
    "dica": "Combine com /headshot e roupa formal descrita no prompt para reforçar a seriedade do resultado."
  },
  {
    "id": 75,
    "comando": "/studioportrait",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Aplica o acabamento clássico de um retrato feito em estúdio fotográfico.",
    "exemplo": "Retrato com acabamento clássico de estúdio, /studioportrait",
    "dica": "Bom ponto de partida neutro antes de aplicar um estilo mais específico deste grupo por cima."
  },
  {
    "id": 76,
    "comando": "/beautyshot",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Aplica um acabamento de still de beleza, com foco em pele e traços do rosto.",
    "exemplo": "Retrato com acabamento de still de beleza, /beautyshot",
    "dica": "Funciona melhor com boa luz frontal na foto original - a IA realça pele e traços com base nessa referência."
  },
  {
    "id": 77,
    "comando": "/silhouette",
    "colecao": "Estilos",
    "categoria": "Retratos e Transformações",
    "descricao": "Transforma o assunto em um contorno escuro e sólido contra um fundo claro.",
    "exemplo": "Pessoa transformada em silhueta contra um fundo claro, /silhouette",
    "dica": "Ótimo para preservar anonimato em conteúdo faceless; funciona melhor com poses bem reconhecíveis."
  },
  {
    "id": 78,
    "comando": "/marble",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma escultura de mármore.",
    "exemplo": "Busto transformado em escultura de mármore clássica, /marble",
    "dica": "Funciona muito bem com retratos e bustos; peça veios sutis de pedra no prompt para reforçar o realismo."
  },
  {
    "id": 79,
    "comando": "/bronze",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma estátua de bronze.",
    "exemplo": "Figura transformada em estátua de bronze, /bronze",
    "dica": "Peça uma patina esverdeada sutil no prompt para reforçar o efeito de bronze envelhecido."
  },
  {
    "id": 80,
    "comando": "/porcelain",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma escultura de porcelana delicada.",
    "exemplo": "Figura transformada em escultura de porcelana, /porcelain",
    "dica": "Combina bem com temas delicados e decorativos; peça um acabamento 'brilhante e liso' para reforçar a textura."
  },
  {
    "id": 81,
    "comando": "/stainedglass",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma a imagem em um painel de vitral colorido.",
    "exemplo": "Cena transformada em painel de vitral colorido, /stainedglass",
    "dica": "Funciona melhor com composições de contornos bem definidos, já que o vitral depende de divisões claras entre as cores."
  },
  {
    "id": 82,
    "comando": "/mosaic",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma a imagem em um mosaico feito de pequenas peças coloridas.",
    "exemplo": "Retrato transformado em mosaico de peças coloridas, /mosaic",
    "dica": "Peça o tamanho aproximado das peças (grandes ou pequenas) - isso muda bastante o nível de detalhe final."
  },
  {
    "id": 83,
    "comando": "/woodcarving",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em um entalhe de madeira.",
    "exemplo": "Figura transformada em entalhe de madeira, /woodcarving",
    "dica": "Peça o tipo de acabamento (madeira clara, escura, com verniz) para controlar melhor a aparência final."
  },
  {
    "id": 84,
    "comando": "/icesculpture",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma escultura de gelo translúcida.",
    "exemplo": "Figura transformada em escultura de gelo, /icesculpture",
    "dica": "Ótimo para conteúdo temático de eventos e inverno; funciona melhor com formas mais simples e sólidas."
  },
  {
    "id": 85,
    "comando": "/crystal",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma escultura de cristal transparente e facetado.",
    "exemplo": "Objeto transformado em escultura de cristal facetado, /crystal",
    "dica": "Peça reflexos e refrações de luz no prompt para reforçar a sensação de transparência do material."
  },
  {
    "id": 86,
    "comando": "/goldstatue",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma estátua de ouro reluzente.",
    "exemplo": "Figura transformada em estátua de ouro, /goldstatue",
    "dica": "Ótimo para conteúdo de conquista e premiação; peça um brilho 'polido, sem excesso de reflexo' no prompt."
  },
  {
    "id": 87,
    "comando": "/silverstatue",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma estátua de prata polida.",
    "exemplo": "Figura transformada em estátua de prata polida, /silverstatue",
    "dica": "Visual mais frio e discreto que o /goldstatue - bom para um efeito elegante sem parecer ostentoso."
  },
  {
    "id": 88,
    "comando": "/hologram",
    "colecao": "Estilos",
    "categoria": "Escultura e Material",
    "descricao": "Transforma o assunto em uma projeção holográfica futurista e translúcida.",
    "exemplo": "Figura transformada em projeção holográfica, /hologram",
    "dica": "Combine com /cyberpunk ou /scifi para reforçar o clima futurista geral da cena."
  },
  {
    "id": 89,
    "comando": "/blackandwhite",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Converte a imagem para preto e branco.",
    "exemplo": "Converter uma foto colorida para preto e branco, /blackandwhite",
    "dica": "Peça também para ajustar o contraste ao converter - sem isso, algumas imagens ficam com aspecto 'lavado'."
  },
  {
    "id": 90,
    "comando": "/colorize",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Adiciona cor a uma imagem originalmente em preto e branco.",
    "exemplo": "Colorir uma foto antiga em preto e branco, /colorize",
    "dica": "Descreva as cores reais dos elementos, se souber - isso evita que a IA escolha tons genéricos ou pouco fiéis."
  },
  {
    "id": 91,
    "comando": "/restore",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Restaura de forma geral uma imagem antiga ou danificada.",
    "exemplo": "Restaurar uma foto antiga danificada, /restore",
    "dica": "Use como comando inicial e geral; para danos específicos, complemente com pedidos mais detalhados no texto."
  },
  {
    "id": 92,
    "comando": "/infrared",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Simula o efeito de fotografia infravermelha, com folhagem clara e céu escurecido.",
    "exemplo": "Paisagem transformada com efeito de fotografia infravermelha, /infrared",
    "dica": "Funciona melhor em cenas com bastante vegetação - e o verde das folhas que fica esbranquiçado no efeito."
  },
  {
    "id": 93,
    "comando": "/duotone",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Reduz a imagem a apenas duas cores em gradação.",
    "exemplo": "Retrato transformado em duas cores de gradação, /duotone",
    "dica": "Especifique as duas cores desejadas no prompt (por exemplo, azul e laranja) para uma identidade visual mais forte."
  },
  {
    "id": 94,
    "comando": "/halftone",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Simula o padrão de pontos usado na impressão gráfica clássica.",
    "exemplo": "Ilustração com padrão de pontos de impressão clássica, /halftone",
    "dica": "Combine com /popart ou /comicbook para reforçar o visual gráfico de impressão vintage."
  },
  {
    "id": 95,
    "comando": "/doubleexposure",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Sobrepõe duas imagens diferentes em uma única composição.",
    "exemplo": "Retrato sobreposto a uma paisagem em dupla exposição, /doubleexposure",
    "dica": "Escolha uma segunda imagem com significado conceitual (natureza, cidade) para reforçar a narrativa."
  },
  {
    "id": 96,
    "comando": "/tiltshift",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Cria uma ilusão de miniatura, desfocando as bordas superior e inferior da imagem.",
    "exemplo": "Cidade fotografada com efeito de miniatura, /tiltshift",
    "dica": "Funciona melhor em fotos tiradas de um ângulo elevado, olhando para baixo sobre a cena."
  },
  {
    "id": 97,
    "comando": "/fisheye",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Aplica uma distorção curva extrema, típica de lentes olho de peixe.",
    "exemplo": "Cena com distorção curva de lente olho de peixe, /fisheye",
    "dica": "Use com moderação em retratos, já que a distorção é bem perceptível nas bordas; mais indicado para efeitos criativos."
  },
  {
    "id": 98,
    "comando": "/filmgrain",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Adiciona uma textura granulada sutil, característica de filme fotográfico.",
    "exemplo": "Adicionar granulação sutil de filme a uma foto digital, /filmgrain",
    "dica": "Combine com /vintagefilm para reforçar ainda mais a sensação de fotografia analógica."
  },
  {
    "id": 99,
    "comando": "/softglow",
    "colecao": "Estilos",
    "categoria": "Transformações de Foto",
    "descricao": "Adiciona um brilho suave e difuso ao redor das áreas mais claras da imagem.",
    "exemplo": "Retrato com um brilho suave ao redor das luzes, /softglow",
    "dica": "Ótimo para retratos românticos ou sonhadores; use com moderação para não deixar a imagem sem nitidez."
  }
];
