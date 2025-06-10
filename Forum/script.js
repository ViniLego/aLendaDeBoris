function expandirRaca(id) {
    const detalhes = document.getElementById(id);
    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
    } else {
        detalhes.style.display = "none";
    }
}
// Inicia a música quando a página carrega (se permitido)
window.onload = function() {
    const musica = document.getElementById('musica');
    musica.volume = 0.3; // Volume baixo por padrão
    musica.play().catch(e => console.log("Autoplay bloqueado. Clique em qualquer lugar para tocar."));
};

// Função para controlar a música de fundo
function controlarMusica() {
    const musica = document.getElementById('musica');
    const botao = document.getElementById('botao-musica');

    if (musica.paused) {
        musica.play();
        botao.textContent = '🎵 Desligar Música';
    } else {
        musica.pause();
        botao.textContent = '🎵 Ligar Música';
    }
}

// Função para mostrar conteúdo (já existente)
function mostrarConteudo(tipo) {
    const conteudo = document.getElementById('conteudo');
    let html = '';

    switch (tipo) {
        case 'historia':
            html = `
                <h1>História da Campanha</h1>
                <p>Aqui você encontrará a história do mundo e da campanha.</p>
            `;
            break;
        case 'mapa':
            html = `
                <h1>Mapa do Mundo</h1>
                <p>Clique em uma região para ver curiosidades.</p>
                <div class="mapa-container">
                <img src="mapa.png" usemap="#image-map">

                <map name="image-map">
                    <area target="" alt="Vastidão Mwangi" title="Vastidão Mwangi" href = # onclick="mostrarCuriosidade('vastidaoMwangi')" coords="260,896,498,898,569,622,284,604,261,788,234,801,231,817,226,830,220,831,226,847,227,857" shape="poly">
                    <area target="" alt="Terras Impossiveis" title="Terras Impossiveis" href = # onclick="mostrarCuriosidade('terrasImpossiveis')" coords="496,895,510,842,559,673,794,691,802,899" shape="poly">
                    <area target="" alt="Rota Dourada" title="Rota Dourada" href = # onclick="mostrarCuriosidade('rotaDourada')" coords="570,629,570,649,571,665,650,676,674,562,637,552,617,538,586,528,576,516,525,520,499,517,488,536,469,534,461,515,447,490,394,528,364,523,358,509,334,519,326,515,310,521,291,512,279,500,265,506,260,524,239,545,222,560,219,569,243,599" shape="poly">
                    <area target="" alt="Absalom" title="Absalom" href = # onclick="mostrarCuriosidade('absalom')" coords="272,494,315,473,339,470,349,487,399,470,439,435,497,452,554,436,608,466,666,420,730,486,689,549,635,544,513,517,486,529,473,526,469,520,436,494,418,505,402,512,392,519,378,519,371,524,375,500,265,490,321,512,305,508,296,505,292,489,305,521,578,443,509,461,463,500" shape="poly">
                    <area target="" alt="Cheliax Antiga" title="Cheliax Antiga" href = # onclick="mostrarCuriosidade('cheliaxAntiga')" coords="441,215,347,293,201,446,264,490,334,468,436,434,502,440,546,431,561,405,562,377,547,327,518,332,507,345,493,351,467,353,456,348,447,335,445,319" shape="poly">
                    <area target="" alt="Reinos Resplandecentes" title="Reinos Resplandecentes" href = # onclick="mostrarCuriosidade('reinosResplandecentes')" coords="545,321,556,266,578,295,594,275,622,249,669,261,711,254,744,228,780,216,793,223,796,480,747,485,723,458,712,451,707,439,683,431,671,423,675,415,659,419,646,430,628,435,619,448,612,461,604,460,582,440,563,433,552,424,562,410,564,402,573,389,572,378,564,375,560,369" shape="poly">
                    <area target="" alt="Olho do Pavor" title="Olho do Pavor" href = # onclick="mostrarCuriosidade('olhoDoPavor')" coords="541,315,509,330,483,351,456,349,449,333,449,315,443,267,452,257,439,213,438,164,437,149,441,133,442,121,474,110,490,93,518,105,522,116,541,121,566,121,581,121,607,106,616,114,616,137,610,158,604,175,598,191,586,191,571,198,573,211,582,222,594,236,605,236,608,242,596,254,589,270,581,274,578,289,571,290,566,274,560,259,548,262,548,275,548,281,546,292,543,303" shape="poly">
                    <area target="" alt="Terras Partidas" title="Terras Partidas" href = # onclick="mostrarCuriosidade('terrasPartidas')" coords="793,225,768,216,744,221,726,225,710,247,683,250,643,245,614,239,592,223,579,212,587,203,602,196,606,180,613,164,619,154,622,147,623,140,624,127,624,115,616,104,600,102,588,109,575,117,547,117,518,104,495,92,491,83,495,68,496,48,492,16,498,7,791,10" shape="poly">
                    <area target="" alt="Terras das Sagas" title="Terras das Sagas" href = # onclick="mostrarCuriosidade('terrasDasSagas')" coords="489,11,483,85,444,114,434,152,438,167,439,202,432,223,400,240,390,241,340,243,320,252,284,245,282,232,261,212,256,162,258,138,243,157,207,167,176,179,164,200,151,196,148,182,159,166,170,153,176,129,197,118,213,97,230,87,239,69,232,64,223,59,214,59,206,70,198,72,192,64,178,60,170,55,162,6" shape="poly">
                    <area target="" alt="Altos Mares" title="Altos Mares" href = # onclick="mostrarCuriosidade('altosMares')" coords="165,12,171,62,199,77,232,69,219,94,190,114,169,141,156,169,147,193,155,206,177,198,190,177,225,169,247,163,258,152,258,177,257,201,262,214,271,229,276,243,309,247,350,250,374,245,386,246,390,253,378,263,345,298,334,303,323,295,317,301,312,321,303,337,285,338,276,355,267,370,255,382,243,396,224,419,193,440,207,453,220,463,245,477,250,492,246,514,238,532,229,550,215,569,220,586,231,593,245,602,260,605,282,612,283,635,272,716,262,733,246,726,232,715,217,707,213,727,197,733,174,738,165,751,196,764,208,770,229,787,235,792,229,810,219,827,214,842,223,860,242,875,257,892,254,899,113,895,107,1" shape="poly">
                </map>
                </div>
                <div id="curiosidade-regiao"></div>
            `;
            break;
        case 'racas':
            html = `
                <h1>Raças</h1>
                <p>Descrição das raças disponíveis no mundo.</p>
                <div class="raca" onclick="expandirRaca('humanos')">
                    <h3>Humanos</h3>
                    <div class="detalhes-raca" id="humanos">
                        <img src="human.png" alt="Humanos">
                        <p><strong>História:</strong> Os humanos são conhecidos por sua adaptabilidade e ambição.</p>
                        <p><strong>Crenças:</strong> Acreditam em deuses da luz e da guerra.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('elfos')">
                    <h3>Elfos</h3>
                    <div class="detalhes-raca" id="elfos">
                        <img src="elfo.png" alt="Elfos">
                        <p><strong>História:</strong> Os elfos são seres místicos e longevos, conectados à natureza.</p>
                        <p><strong>Crenças:</strong> Adoram a Deusa da Natureza.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('anoes')">
                    <h3>Anões</h3>
                    <div class="detalhes-raca" id="anoes">
                        <img src="anão.png" alt="Anões">
                        <p><strong>História:</strong> Os anões são mestres na mineração e na metalurgia.</p>
                        <p><strong>Crenças:</strong> Seguem o Deus da Forja.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('orcs')">
                    <h3>Orcs</h3>
                    <div class="detalhes-raca" id="orcs">
                        <img src="orc.jpg" alt="Orcs">
                        <p><strong>História:</strong> Os orcs são guerreiros ferozes e tribais.</p>
                        <p><strong>Crenças:</strong> Adoram o Deus da Guerra.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('halfling')">
                    <h3>Halfling</h3>
                    <div class="detalhes-raca" id="halfling">
                        <img src="halfling.png" alt="Halfling">
                        <p><strong>História:</strong> Os orcs são guerreiros ferozes e tribais.</p>
                        <p><strong>Crenças:</strong> Adoram o Deus da Guerra.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('goblin')">
                    <h3>Goblin</h3>
                    <div class="detalhes-raca" id="goblin">
                        <img src="goblin.jpg" alt="Goblin">
                        <p><strong>História:</strong> Os orcs são guerreiros ferozes e tribais.</p>
                        <p><strong>Crenças:</strong> Adoram o Deus da Guerra.</p>
                    </div>
                </div>
                <div class="raca" onclick="expandirRaca('gnomo')">
                    <h3>Gnomo</h3>
                    <div class="detalhes-raca" id="gnomo">
                        <img src="gnomo.jpg" alt="Gnomo">
                        <p><strong>História:</strong> Os orcs são guerreiros ferozes e tribais.</p>
                        <p><strong>Crenças:</strong> Adoram o Deus da Guerra.</p>
                    </div>
                </div>
            `;
            break;
        case 'curiosidades':
            html = `
                <h1>Curiosidades</h1>
                <p>Fatos interessantes sobre o mundo.</p>
            `;
            break;
        case 'divindades':
            html = `
                <h1>Divindades</h1>
                <p>Informações sobre os deuses e deusas do mundo.</p>
                <ul>
                    <li>Deus da Luz</li>
                    <li>Deusa da Natureza</li>
                    <li>Deus da Guerra</li>
                </ul>
            `;// Função para expandir/recolher detalhes das raças (já existente)
function expandirRaca(id) {
    const detalhes = document.getElementById(id);
    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
    } else {
        detalhes.style.display = "none";
    }
}
            break;
        default:
            html = `
                <h1>Bem-vindo ao Fórum de RPG!</h1>
                <p>Selecione uma opção no menu ao lado para começar.</p>
            `;
    }

    conteudo.innerHTML = html;
}



function mostrarCuriosidade(regiao) {
    const curiosidade = document.getElementById('curiosidade-regiao');
    let html = '';

    switch (regiao) {
        case 'vastidaoMwangi':
            html = `
                <h2>Vastidão Mwangi</h2>
                <p>A Vastidão Mwangi é o lar de uma grande variedade de civilizações, tanto no passado quanto no presente, mesmo possuindo as mais extensas regiões selvagens do Mar Interior. De fato, uma das primeiras civilizações a se erguer das cinzas após a Queda da Terra se ergueu aqui, nesta terra — a nação Shory e suas impressionantes cidades voadoras, das quais derivam muitas das práticas modernas da magia.

Algumas cidades e reinos mwangi foram perdidos bem mais recentemente do que aquelas maravilhas antigas.
</p>
<p> Quando o Olho de Abendego se formou há pouco mais de um século, seus ventos e ondas inundaram dois reinos significativos ao longo da costa oeste de Garunda. Onde outrora se erguiam as nações de Lirgen e Yamasa agora se espalham apenas as Terras Encharcadas, uma região de pântanos e mangues ocupada por gangues rivais de saqueadores e monstros. Ainda mais recentemente, uma poderosa cidade-estado no coração da Selva Mwangi, Usaro, caiu quando seu líder brutal, Ruthazek, o Rei Gorila, foi morto por aventureiros. Usaro ficou sem um líder apenas por poucos anos, mas seus habitantes violentos já causaram danos significativos com suas revoltas anárquicas. 
</p>
<p>
Uma longa linhagem de Reis Gorilas demonicamente infundidos tem governado Usaro por séculos, e por isso, um novo provavelmente irá surgir para tomar o controle de Usaro, mas atualmente esta região sinistra não possui um líder para direcionar sua ira.

Á despeito destas instâncias de ruína e destruição, a Vastidão Mwangi abriga uma variedade de diversas e poderosas cidades-estados dentro de seu território. Na Enseada de Sangue, a impiedosa liga mercante do Consórcio Áspide governa. Mais para o sul ao longo da costa se ergue Senghor, cuja política contra pirataria e escravidão colocam a cidade em forte contraste com seu vizinho ao norte. A cidade-estado de Nantambu fica distante, a montante da Enseada de Sangue, no Rio Vanji, onde seus cidadãos mantêm as tradições antigas do Velho Mago Jatembe de combinar magia arcana e primal. 
</p> 
<p>Bem para o sudeste fica Mzali, que jaz sob o governo opressivo do rei-criança morto-vivo Walkena, embora um grupo dissidente chamado de Leões Reluzentes trabalhe para montar uma resistência ao reinado da múmia. E então temos a cidade de Kibwe, onde dentro de suas muralhas habita uma mistura eclética de pessoas que viajaram de longe em busca de comércio e companhia.

Mais ao sul destas cidades-estados independentes está a recém liberta nação de Vídrian. Originalmente estabelecida como a colônia chelishita de Sargava, Vídrian agora tomou seu próprio destino e se libertou de seus grilhões coloniais. Ao fazer isto, a jovem nação se expôs à predação de piratas e coisas piores, ainda assim, para seus cidadãos, a liberdade da opressão vale este preço.</p>
            `;
            break;
        case 'terrasImpossiveis':
            html = `
                <h2>Terras Impossiveis</h2>
                <p>A magia permite feitos espantosos e, ainda assim, mesmo

os que se consideram especialistas nas artes mágicas hesitam maravilhados perante os espetáculos encontrados nas Terras Impossíveis. O que é tido como certo nestas estranhas e ecléticas nações seria considerado impossível em outros lugares.

Tenha Geb como um exemplo. Lá, os vivos são minoria, e a não-vida é o meio de vida predominante. Crueldade, sadismo e violência são a norma em Geb, como se pode esperar de uma terra governada por um violento ditador morto-vivo. Este fantasma, de quem o lugar herdou o nome, tem governado sua nação por milhares de anos, embora há muitos séculos o governo diário da terra tenha recaído sobre sua rainha, Arazni. Seu recente desaparecimento (muitos chamariam de “fuga”?) e abandono de seus deveres revigorou o soberano fantasma para novamente assumir a liderança ativa de seu reino tomado pela escuridão.

Geb tem se oposto ao seu vizinho nortista, Nex, por toda a sua existência. Também batizado com o nome de seu governante, Nex é um reino cosmopolita onde a magia é mundana. O próprio Nex está desaparecido há eras, ainda que em sua ausência, os Arquelordes tenham governado de forma bem eficiente. Aqui, golens patrulham as ruas e a prática de muta-carne é uma indústria legítima e aceita.

Entre estas nações opostas há uma faixa de terra conhecida como Deserto de Mana, uma desolação assolada e destruída formada pelas antigas guerras entre Nex e Geb. À própria magia destas terras está danificada — ou em muitos pontos inteiramente morta — e mutantes peculiares vagam e espreitam pelas ruínas em busca de presas.

Apenas no ducado de Alkenstrela a vida se aproxima de qualquer coisa normal, mas mesmo ali as suposições do resto do mundo são voltadas contra ele. Com a magia sendo imprevisível, os cidadãos de Alkenstrela se voltaram à tecnologia para substituí-la. A nação é o lar de metalúrgicos e maquinistas, e a arte da fabricação de armas concede uma vantagem excelente nesta parte do mundo. As exportações de armas de fogo aumentaram consideravelmente ao longo dos anos e, devido a isso, Alkenstrela está emergindo como um poder de influência significativa.

Após as águas do Oceano Obari fica o úlitmo reino das Terras Impossíveis: a nação insular de Jalmeray. Aqui não apenas a magia permite impossibilidades, mas também o autocontrole focado e a perfeição espiritual. O povo de Jalmeray conquistou espantosos feitos físicos e alcançou notáveis avanços intelectuais usando nada além de antigas tradições místicas e auto-perfeição.</p>
            `;
            break;
        case 'rotaDourada':
            html = `
                <h2>Rota Dourada</h2>
                <p>Comércio e viagens governam os caminhos da assim chamada Rota Dourada, conhecida por suas areias brilhantes e força econômica. A maior parte desta região consiste de imensos desertos selvagens, mas isto não significa que ela possua uma população esparsa. Costas e rios servem como o sangue vital desta região, e algumas caravanas desbravam o calor e os perigos do deserto para negociar ao longo do norte de Garunda. Algumas das mais antigas nações na região do Mar Interior comandam esta região, e conhecimento antigo e tesouros valiosos podem ser encontrados entre suas areias mutáveis e cidades históricas.

A maior destas cidades é a cosmopolita Katapesh, onde o mercantilismo é supervisionado por um estranho grupo chamado de Mestres do Pacto. Muito do comércio em Katapesh envolve bens que podem ser exportados ou importados livremente por toda a região do Mar Interior, mas a cidade também faz tantos negócios quanto sobre assuntos normalmente relegados aos mercados negros de outras sociedades.

As cidades de Qadira podem não ser individualmente tão grandes quanto Katapesh, mas a economia da nação talvez seja mais forte. Elas certamente são as mais antigas na região, com o apoio do há muito estabelecido Império Padishah de Kelesh no leste. Isto, junto com a igreja de Sarenrae — talvez a exportação cultural mais bem-sucedida para o resto

da região do Mar Interior — assegurou o status de Qadira como um dos mais importantes centros de influência na Rota Dourada.

Para o oeste, as cinco cidades-estados de Thuvia controlam o lendário artefato chamado de elixir de orquídea solar, que concede quase-imortalidade àqueles que o consomem. Esta preciosa comodidade é a chave para o lugar de Thuvia na Rota Dourada. Mais a oeste, a nação de Rahadoum talvez seja o elo mercante mais fraco, mas o fato desta sociedade ter abandonado a adoração aos deuses para colocar sua fé na indústria e talento dos mortais a fornece uma atração própria.

No centro da Rota Dourada fica a poderosa Osírion, uma das mais antigas nações da região do Mar Interior. Embora Osírion tenha sido governada por Qadira durante um período, os legados e monumentos de seus primeiros dias ainda resistem e são fonte de orgulho e identidade indisputáveis e icônicos para seu povo. A influência dos artesões, filósofos e conjuradores de Osírion se espalharam por toda a parte, particularmente através da Ordem Esotérica do Olho Palatino, bem ao norte em Ustalav, e a fé de Nethys cujo não-tão-humilde começo como um mago mortal pode ser rastreado até o começo da história de Osírion durante a antiga Era do Destino</p>
            `;
            break;
        case 'absalom':
            html = `
                <h2>Absalom e a Ilha da Pedra Estrelar</h2>
                <p>No coração do Mar Interior fica a Ilha de Kortos, erguida das águas há milhares de anos como o primeiro ato divino de Aroden. Este feito incrível marca o início da Era da Entronização e o primeiro ano do calendário no Cômputo de Absalom. A própria cidade de Absalom, a maior na região do Mar Interior, se espalha pela costa sul desta ilha — e no coração da cidade fica a lendária Catedral da Pedra Estelar. Dentro dos salões desta estrutura, a Pedra Estelar aguarda para testar seus próximos suplicantes — os poucos mortais que passam neste teste místico se tornam deuses. Isto transformou Absalom em uma metrópole frequentemente sitiada, mas em seus quase 5.000 anos, ela nunca calu.

Absalom, chamada por muitos de Cidade no Centro do Mundo, ostenta uma população de mais de 300.000 habitantes e sua cultura é uma verdadeira mistura de ancestralidades e crenças. Mesmo a arquitetura da cidade reflete isto, como esperado de um assentamento de sua idade. Dos altos e majestosos templos na Corte Ascendente até as lojas e salões de guilda espremidos no Distrito da Pétala e os casebres frágeis nas Poças, as vizinhanças de Absalom nunca falham em apresentar uma vista memorável. Muitas organizações de alcance mundial

nasceram em Absalom, sendo a mais notável a Sociedade Pathfinder (página 436).

A Ilha de Kortos, também conhecida como Ilha da Pedra Estelar, possui um ecossistema similarmente diverso. As florestas e planícies verdejantes do oeste fornecem muitos dos recursos que Absalom necessita; mas, para o leste, o deserto rochoso e escarpado conhecido como Raspa, as perigosas Colinas Fluviais e a recém-formada desolação conhecida como o Domínio do Tirano apresentam climas bem mais severos. A Ilha de Erran, logo ao norte da Ilha da Pedra Estelar, abriga a segunda maior cidade da área, Escadar. Sendo um porto severo com uma parte mais do que generosa de acordos escusos e tipos perigosos, Escadar também abriga grandes estaleiros e mantém a poderosa marinha que ajuda a manter seguras as águas próximas do Mar Interior. Várias ilhas menores também pontilham a costa da Ilha de Kortos — umas estéreis, outras servindo como esconderijos de criminosos e exilados.

Erguendo-se no centro da Ilha de Kortos estão os Montes Kortos, uma pequena e escarpada cadeia de picos rochosos que, ao longo dos anos, foi governada por dragões, harpias, minotauros e coisas piores. Algumas passagens perigosas permitem viagens através das montanhas, mas com a costa norte da Ilha de Kortos dominada pelo emaranhado encharcado de Lama Parda, esta extensão norte oferece pouco para atrair qualquer um que não sejam bandidos ou aventureiros a estas terras ainda indomadas.</p>
            `;
            break;
        case 'cheliaxAntiga':
            html = `
                <h2>Cheliax Antiga</h2>
                <p>Em seu ápice, o império de Cheliax possuía domínios que iam de Varísia a Garunda e para o leste até Galt. Estava profetizado que Aroden retornaria ao mundo dos mortais para iniciar uma nova Era de Glória e aquelas profecias prediziam que a cidade chelishita de Coroa-do-Oeste seria seu ponto de chegada. Ao invés disto, sua morte levou a uma guerra civil que durou décadas. Quando a Três-VezesAmaldiçoada Casa de Thrune emergiu como vitoriosa, Cheliax havia mudado para sempre. Sob o governo da Casa Thrune, Cheliax se transformou em uma nação que via O Inferno como um modelo de governo. À igreja de Asmodeus se tornou a religião oficial do estado e o diabolismo sua filosofia mais poderosa. Os diabos estavam em casa no governo e, enquanto os políticos e líderes da nação alegavam manter o controle sobre seus destinos — e que a Casa Thrune havia meramente formado uma aliança com o Inferno para manter seu poder e manter a ordem — os inimigos internos e externos da nação sabiam a verdade.

Muitas das províncias externas de Cheliax — como Andoran, Galt e Vídrian — se revoltaram e se tornaram nações independentes. À nação de Isger continua, pelo menos no papel, servil. Cheliax valoriza Isger por sua posição importante como rota comercial para a região do Lago Encarthan, mas quando Isger foi devastada pela violência das Guerras de Sangue Goblin há décadas, a Casa Thrune

fez pouco para ajudar. Conforme as repercussões do retorno do Tirano Sussurrante ao poder enviou ondas de terror e nervosismo pela terra, o povo de Isger começou a temer que lhes faltava não apenas força política própria, mas também em seu suposto protetor e como resultado, Isger é um dos locais da região do Mar Interior que mais precisa de heróis.

Recentemente, vários levantes dentro de Cheliax testaram ainda mais a determinação da nação. Após uma perda náutica devastadora nos Grilhões que resultou na independência de Vídrian, uma nova rebelião iomedaeana chamada Reclamação Gloriosa ameaçou Cheliax de dentro. A Casa Thrune e a igreja asmodeana derrotaram a Reclamação Gloriosa, mas pagaram um preço — uma rebelião simultânea obteve sucesso, com um grupo de rebeldes chamados de Corvos Prateados negociando a secessão bem sucedida da nova nação de Ravounel.

Ao norte de Cheliax, a nação sombria de Nidal continua sendo o único aliado real da nação diabólica. Uma teocracia governada pela igreja de Zon-Kuthon, Nidal é a nação mais velha de Avistânia, pois seu povo se voltou para o Senhor da Meia Noite em busca de proteção durante a Era da Escuridão depois da Queda da Terra. Hoje, dor e terror são confortos para os cidadãos de Nidal e milênios de governo sob uma igreja que festeja a dor os deixou acostumados com a dor e recebendo bem a perda</p>
            `;
            break;
        case 'reinosResplandecentes':
            html = `
                <h2>Reinos Resplandecentes</h2>
                <p>O império de Taldor foi, historicamente, o coração dos Reinos Resplandecentes. No início da Era do Entronamento, Taldor enviou vários Exércitos de Exploração para expandir as fronteiras da nação e colonizar as terras ao redor. Hoje, Taldor é uma sombra de sua glória antiga, mas depois de um surto recente de conflito interno, uma nova imperatriz progressiva clamou o trono, e Taldor pode estar no caminho para recuperar sua antiga glória pela primeira vez em séculos.

Para o oeste, a nação democrática de Andoran se ergue como uma estrela em ascensão no palco internacional. Desde que a província se separou da nação de Cheliax, os militares de Andoran ajudaram a diminuir o fluxo de escravos e seus heróis têm se colocado contra todo o tipo de perigo ao povo comum. Mas o futuro não parece inteiramente brilhante para Andoran, pois com os problemas recentes de Cheliax, correm rumores de que a Casa Thrune pode buscar retomar o controle de seu servo rebelde. Dada a ameaça crescente do Tirano Sussurrante, uma guerra aberta entre estas duas nações poderosas poderia ser desastrosa.

A nordeste de Andoran se espalham as cidades-estados enânicas das Montanhas dos Cinco Reis. Acostumados à guerra, tanto contra inimigos externos quanto internos, os anões dos Cinco Reis permanecem aliados de Andoran, mas possuem seus próprios problemas que ocupam a maior parte de sua atenção. Para o oeste do reino anão, a rica e poderosa

nação de Druma controla quase metade da costa sulista do lago e usa sua posição para alimentar seus cofres e espalhar os ensinamentos das Profecias de Kalistrade, uma filosofia que ensina que a riqueza pode ser alcançada ao se aderir a práticas rígidas e abstêmias.

A nordeste de Druma ficam as florestais terras élficas de Kyonin, uma das nações mais antigas de Avistânia. Esta terra pertencia aos elfos muito antes da Queda da Terra, mas por milhares de anos após aquela devastação, eles deixaram seu reino abandonado. Naquele período, um poderoso demônio chamado Arrazárvore tomou controle da parte mais ao sul da floresta, corrompendo o terreno em um lamaçal desolado chamado Sarcemaranha. Embora os elfos tenham retornado, eles foram incapazes de expulsar Arrazárvore de sua fronteira sul.

Mais a leste ainda está a nação de Galt. Devastada por décadas de uma auto-perpetuante série de rebeliões e revoluções, esta terra foi partida vez após outra. Seu povo está cansado e desesperado conforme continuam a viver as vidas que conseguem nas sombras das lâminas finais — poderosas guilhotinas mágicas que clamam as almas daqueles que decapitam. Se quaisquer das regiões dos Reinos Resplandecentes está propenso a mudança significativa no futuro próximo, é com certeza a Galt devastada por revoluções.</p>
            `;
            break;
        case 'olhoDoPavor':
            html = `
                <h2>Olho do Pavor</h2>
                <p>O coração do continente de Avistânia apodreceu.

Esta região é dominada pelo Lago Encarthan, um grande mar continental que era — até recentemente — um polo comercial movimentado. No sudoeste se ergue a nação militarista de Molthune, que há tempos está engajada em uma guerra intermitente contra seu vizinho nortenho, Nirmathas, uma nação florestal povoada por pessoas que levam sua liberdade a sério. Um levante de hobgoblins se aproveitou deste conflito e, embora as hostilidades tenham diminuído, as duas nações agora partilham fronteiras com uma terceira: a recém-nascida nação hobgoblin de Oprak.

Ao norte destas nações assoladas pela guerra estão duas outras nações igualmente forjadas no crisol do conflito. Até recentemente, os paladinos e protetores da pequena e poderosa nação de Ultimuro se erguiam contra as invasões de orcs, mortos-vivos e semelhantes. Enquanto isso, o selvagem e escarpado Forte de Belkzen tem sido há muito mantido por esses orcs — desde que foram expulsos das Terras Sombrias abaixo pelos anões durante a Busca pelo Céu há milhares de anos.

Ainda mais ao norte está a nação de Ustalav, uma coleção de condados, cada um assediado por sua própria manifestação de horror e medo, variando do pesadelarmente cósmico ao terrivelmente infernal.

Foi de Ustalav que uma das maiores ameaças à região do Mar Interior emergiu. O antigo lich Tar-Baphon — conhecido como o Tirano Sussurrante — foi derrotado duas vezes no passado distante — uma por Aroden e outra pelos heróis da Cruzada Radiante; mas ele nunca foi verdadeiramente destruído. Quando os selos mágicos que o mantinham aprisionado abaixo do ameaçador Pináculo do Cadafalso foram finalmente violados em 4719 ca, Tar-Baphon emergiu, trazendo consigo uma devastação tão grande que a outrora nação de Ultimuro — que sofreu o peso de seu retorno ao mundo — foi completamente destruída. Atualmente ela existe apenas como as Terras Sepulcrais — a nação que outrora mantinha guarda contra levantes de mortos-vivos que eagora está entregue à sua própria não-vida. Embora heróis tenham temporariamente atrapalhado os planos imediatos do Tirano Sussurrante pouco depois que ele emergiu, o lich continua sendo uma ameaça ativa.

O Tirano Sussurrante agora governa um reino de mortosvivos na apropriadamente chamada Ilha do Terror, que fica no centro do Lago Encarthan. Todas as nações que costeiam o Lago Encarthan sofreram em graus variados sob a influência renovada do Tirano Sussurrante, e algumas estão buscando alianças improváveis para resistir a ele. O lich está reunindo seus recursos na Ilha do Terror e ninguém sabe dizer onde ou quando ele irá atacar da próxima vez.</p>
            `;
            break;
        case 'terrasPartidas':
            html = `
                <h2>Terras partidas</h2>
                <p>de sua divindade. Ao norte, em Mendev, estas fraturas

Bem ao norte de Absalom se estendem as Terras Partidas — nações e terras ermas unidas por seu estado partilhado como regiões fraturadas — lugares onde a própria vida sofreu um golpe e a luta pela sobrevivência é simplesmente uma parte da realidade diária. Nem todas as Terras Partidas são constantemente assoladas por perigos mas, independentemente de onde alguém se assenta nestes tempos tumultuados destas partes, o perigo raramente está longe de casa.

Em alguns casos, as divisões são políticas. No nordeste, a nação de Brevoy está há muitos anos à beira de uma guerra civil, enquanto uma antiga divisão entre as tradicionais casas nobres de Issia e os mercenários senhores das espadas de Correnterra mantém um constante estado de tensão — que pode estar se aproximando do ponto de ruptura. Mas, no caso dos sempre contestados Reinos Fluviais, estas divergências políticas chegaram a um impasse, pois diz-se que ali qualquer um pode se tornar o governante de uma nação — basta ter a tenacidade de tomar as rédeas do governo.

Em outros lugares das Terras Partidas, as fraturas são mais espirituais. Razmiran, por exemplo, é governada pelo deus vivo Razmir, que demanda a adoração de todos que morem dentro dos limites de suas fronteiras e não tolera competições à sua fé. Seus sacerdotes agem como polícia em toda a terra, impondo brutalmente as leis

espirituais são menos óbvias; esta terra luta para reclamar sua herança após um século de ocupação por uma força de cruzados que, há alguns anos, se erguia como um bastião contra os demônios que governavam as terras a oeste que fica depois do rio.

Estas terras a oeste estão verdadeiramente partidas — de forma física — pois no período caótico do início da Era dos Presságios Perdidos, poderosos agentes do lorde demônio Deskari rasgaram um buraco na realidade. A ferida resultante no local permitiu que legiões de demônios passassem e devastassem as terras outrora conhecidas como Sarkoris. Embora heróis da Quinta Cruzada tenham recentemente derrotado Deskari e fechado a fenda, estas terras ainda são conhecidas como a Ferida do Mundo. A principal ameaça foi vencida, mas demônios ainda habitam a região e a terra devastada luta para voltar ao normal.

Talvez a mais estranha das Terras Partidas fique próxima de seu centro. As colinas e planícies escarpadas de Numeria são o lar de muitos clãs Kellides. Entretanto, no passado distante, a queda de uma espaçonave cientificamente avançada trouxe alienígenas estranhos, monstruosidades mecânicas e maravilhas tecnológicas a Golarion — mas sua chegada flamejante deixou vastas regiões do terreno ao redor destruídas e arruinadas até os dias atuais</p>
            `;
            break;
        case 'terrasDasSagas':
            html = `
                <h2>Terras Das Sagas</h2>
                <p>Embora a oportunidade para aventuras épicas existam por todo o mundo, nos anos recentes parece que as Terras das Sagas produziram os contos mais notáveis e lendários. Estas vastidões nortenhas ostentam reinos governados por vikings e bruxas, reinos que abrigam clãs Kellides que montam mamutes e uma região fronteiriça de cidades livres e ermos perigosos — todos com bases no antigo legado do há muito caído império da Tassilônia.

Há milênios, a nação da Tassilônia foi governada pelos pecadores e tirânicos senhores das runas. Estes magos esculpiram lendas feitas para durar por uma eternidade, mas mesmo os poderosos senhores das runas sucumbiram à devastação da Queda da Terra. Os sete senhores das runas reinantes no período recuaram para a segurança de domínios extradimensionais, e dormiram por eras, até que começaram a despertar em 4707 CA.

O reino fronteiriço de Varísia, outrora o coração da Tassilônia, suportou o grosso da ira do primeiro senhor das runas desperto, o sádico avarento chamado Karzoug. Um bando de heróis improváveis emergiu da pequena cidade costeira de Pontareia para eventualmente encarar e derrotar Karzoug, ainda assim, seu breve despertar alertaria outros senhores das runas adormecidos e um novo bando de heróis foi forçado a derrotar os tiranos despertos.

Enquanto as vizinhas Terras dos Reis Linnorme, os Reinos dos Senhores dos Mamutes e o assombrado por bruxas Irrisen nunca encararam as repercussões diretas dos senhores das runas, estas terras nortenhas abrigam perigos próprios. Uma antiga guerra fria entre os vikings dos Reinos Linnorme e as bruxas invernais de Irrisen no leste finalmente chegaram a um fim quando a filha da bruxa imortal Baba Yaga tentou desafiar sua mãe e usurpar as tradições de governo de Irrisen. Embora o inverno eterno de Irrisen, iniciado por Baba Yaga perdure, sua nova governante, Anastácia, pode se provar a primeira presença benevolente em séculos a se sentar no trono. Mais a leste, os clãs Kellides do Reino dos Senhores dos Mamutes tiveram uma função essencial própria ao desafiar os demônios da Ferida do Mundo.

Recentemente, uma nova nação se ergueu nas Terras das Sagas. Depois que os senhores das runas foram derrotados, dois senhores das runas sobreviventes decidiram ajustar suas tradições para se encaixar neste estranho novo mundo onde se encontraram. Agora, a recente nação de Nova Tassilônia se espalha pela fronteira norte de Varísia e ninguém sabe ainda se seus governantes adotarão completamente um caminho mais pacífico ou se é questão de tempo antes que as velhas tradições de

pecado e violência surjam novamente</p>
            `;
            break;
        case 'altosMares':
            html = `
                <h2>Altos Mares</h2>
                <p>Das frotas de piratas unidos sob a Rainha Furação dos Grilhões ao antigo e subaquático império de monstros metamorfos liderados pelos sinistros mestres velados, os Altos Mares de Golarion apresentam perigos tanto acima quanto abaixo das ondas. Ainda assim eles também servem como importantes rotas comerciais, com navios mercantes viajando pelas águas para ligar nações poderosas em pontos opostos dos continentes. Capitães marítimos desbravam os perigos dos Altos Mares na esperança de participar das fortunas sendo feitas pelo comércio, ligando os portos do próprio Mar Interior àqueles nas costas do Oceano Arcadiano, das Vastidões Mwangi às Terras das Sagas.

A pirataria é um dos maiores perigos enfrentados ao se viajar nos Altos Mares. O imenso arquipélago vulcânico conhecido como os Grilhões serve como um refúgio para estes piratas, com sua Rainha Furacão fornecendo a estrutura mínima necessária para impedi-los de pularem nas gargantas uns dos outros. Uma grande variedade de monstros e ameaças povoa estas ilhas, e os piratas locais sabem quais são seguras e quais evitar. Ao norte dos Grilhões fica a Ilha Mediogalti. Embora seu único porto relevante, Ilizmagorti, também seja um famoso porto seguro para piratas, é a presença dos infames assassinos do Louva-a-Deus Vermelho que governam a ilha que concede a maior infâmia a esta região.

Outros portos apresentam complicações próprias. A cidadeporto de Promessa na remota ilha de Hermea a algumas centenas de quilômetros a oeste de Avistânia recompensa bem aqueles que conseguem negociar o privilégio do comércio — mas tal honra é difícil de se ganhar, pois o dragão que governa esta sociedade fechada não permite que simplesmente qualquer um visite. Rumores sobre o que ocorre além do distrito das docas de Promessa variam entre contos sobre uma sociedade perfeita aos de um governo opressivo que não tolera o livre arbítrio. Mais para o norte, os elfos do Pináculo Mordaz são ainda mais fechados a visitas, e para a maioria dos marinheiros, a única coisa que o Pináculo Mordaz oferece é um marco inconfundível para navegação, pois o pináculo retorcido pode ser visto por quilômetros.

Entretanto, de todas as regiões ao longo das costas de Avistânia e Garunda, nenhuma é mais perigosa de se viajar do que nas águas torturadas pelo Olho de Abendego. Este furação imenso se formou no início da Era dos Presságios Perdidos, quando tempestades assolaram Golarion inteiro na sequência da morte de Aroden. Entretanto, diferente destas outras tempestades, este furacão permanece existindo. Seus ventos e surtos tempestuosos destruíram várias nações e transformaram um golfo anteriormente fundamental em um pesadelo para a navegação. Contudo, até hoje nenhuma investigação sabe que força estranha causou e como se mantém perpétuo o Olho de Abendego.</p>
            `;
            break;


        default:
            html = `<p>Selecione uma região no mapa para ver curiosidades.</p>`;
    }

    curiosidade.innerHTML = html;
}