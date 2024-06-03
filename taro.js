/**
 * App Web - Qual sua sorte no tarô?
 * @author João Vitor Andrade
 * @author Camila Yukari Jodai
 */


function sortearCarta() {
    let cartas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"] // Total de 22 cartas

    let carta = cartas[Math.floor(Math.random() * 22)] // Sorteio de (0 - 21)
    // console.log(`${carta}`)

    // Exibir carta de acordo com valor sorteado
    switch (carta) {
        case '0':
            document.getElementById('centro').innerHTML = `<img src = "./img/0-louco.jpg">`
            document.getElementById('titulo').innerText = "0 - O Louco"
            document.getElementById('texto').innerText = "O Louco simboliza novos começos, novas experiências, simboliza o início da jornada. Indica que está na hora de deixar para trás tudo que empata nossos objetivos, como medos, dúvidas e preocupações, para trilhar novos rumos."
            break
        case '1':
            document.getElementById('centro').innerHTML = `<img src = "./img/1-mago.jpg">`
            document.getElementById('titulo').innerText = "I - O Mago"
            document.getElementById('texto').innerText = "O Mago traz a mensagem de que seus talentos e seus próprios dons são as chaves para o seu sucesso em qualquer situação questionada. É como se você tivesse todas as ferramentas que precisa bem na sua frente para garantir que o sucesso potencial se manifeste."
            break
        case '2':
            document.getElementById('centro').innerHTML = `<img src = "./img/2-sacerdotisa.jpg">`
            document.getElementById('titulo').innerText = "II - A Sacerdotisa"
            document.getElementById('texto').innerText = "A Sacerdotisa é um lembrete de que não temos como saber de tudo acerca de uma situação. Indica que ou não recebemos todos os fatos, ou não enxergamos todos os fatos ou outras pessoas podem estar retendo informações importantes."
            break
        case '3':
            document.getElementById('centro').innerHTML = `<img src = "./img/3-imperatriz.jpg">`
            document.getElementById('titulo').innerText = "III - A Imperatriz"
            document.getElementById('texto').innerText = "A Imperatriz, geralmente indica que as coisas vão bem na situação questionada, como se cada coisa estivesse em seu devido lugar, exatamente como desejado. Também é uma figura poderosa e muito segura de si. Sugere proteção e não questiona as decisões. Esta carta indica um bom presságio, assim como realização e sucesso."
            break
        case '4':
            document.getElementById('centro').innerHTML = `<img src = "./img/4-imperador.jpg">`
            document.getElementById('titulo').innerText = "IV - O Imperador"
            document.getElementById('texto').innerText = "O Imperador, sugere que você está prestes a alcançar seus objetivos ou está no caminho certo. Pode indicar que este é um bom momento para iniciar um grande projeto, fazer orçamentos ou que novas oportunidades também podem surgir. "
            break
        case '5':
            document.getElementById('centro').innerHTML = `<img src = "./img/5-papa.jpg">`
            document.getElementById('titulo').innerText = "V - O Papa"
            document.getElementById('texto').innerText = "A carta do Papa remete à busca de conselhos sábios. A carta não indica que você deva tomar decisões importantes por conta própria. Pesquisa, estudo e aconselhamento, além de serem formas de fazer as coisas mais tradicionalmente, podem ser o caminho a seguir para resolver a situação em questão."
            break
        case '6':
            document.getElementById('centro').innerHTML = `<img src = "./img/6-enamorados.jpg">`
            document.getElementById('titulo').innerText = "VI - Os Enamorados"
            document.getElementById('texto').innerText = "A carta Os Enamorados tem a ver com uma importante decisão que deve ser tomada. Quando a situação envolve trabalho ou amor, ela sugere que você siga sua intuição. Se o seu coração está mandando você seguir um caminho, confie em seus instintos."
            break
        case '7':
            document.getElementById('centro').innerHTML = `<img src = "./img/7-carro.jpg">`
            document.getElementById('titulo').innerText = "VII - O Carro"
            document.getElementById('texto').innerText = "Esta carta significa que você deve tomar as rédeas do seu destino e estar preparado para aproveitar as oportunidades que aparecem. Porém, não tente dar um passo maior que a perna, você só deve assumir uma responsabilidade se souber que cumprirá."
            break
        case '8':
            document.getElementById('centro').innerHTML = `<img src = "./img/8-forca.jpg">`
            document.getElementById('titulo').innerText = "VIII - A Força"
            document.getElementById('texto').innerText = "A Força representa as melhores características do signo de Leão, como coragem, determinação, resiliência e força, boas chaves para o sucesso. Porém, indica que para realizar seus objetivos, você também precisará de autocontrole para domar seus próprios leões interiores."
            break
        case '9':
            document.getElementById('centro').innerHTML = `<img src = "./img/9-eremita.jpg">`
            document.getElementById('titulo').innerText = "IX - O Eremita"
            document.getElementById('texto').innerText = "O Eremita  pode significar que precisamos refletir em relação à situação. Às vezes é preciso dar um tempo e se isolar para ponderar e analisar melhor uma questão."
            break
        case '10':
            document.getElementById('centro').innerHTML = `<img src = "./img/10-fortuna.jpg">`
            document.getElementById('titulo').innerText = "X - A Roda da Fortuna"
            document.getElementById('texto').innerText = "A Roda da Fortuna representa basicamente a colheita daquilo que plantamos. Apesar do seu significado otimista, não sugere prosperidade, sorte e fortuna do nada. Tudo isso está relacionado às ações que você tomou até o momento."
            break
        case '11':
            document.getElementById('centro').innerHTML = `<img src = "./img/11-justica.jpg">`
            document.getElementById('titulo').innerText = "XI - A Justiça"
            document.getElementById('texto').innerText = "Esta carta traz a mensagem de que a situação em questão tende a se resolver a seu favor, ou, pelo menos, da forma mais justa possível. Pode ser um assunto da lei, o resultado final de uma situação específica, questões de relacionamento ou outras situações."
            break
        case '12':
            document.getElementById('centro').innerHTML = `<img src = "./img/12-enforcado.jpg">`
            document.getElementById('titulo').innerText = "XII - O Enforcado"
            document.getElementById('texto').innerText = "O Enforcado quer dizer que você precisa se desapegar de algo e seguir em frente. Você pode estar se agarrando a algo que não traz satisfação na questão atual, como um amor não correspondido ou nocivo, um emprego que não te levará a lugar algum, uma promoção que não sai, etc."
            break
        case '13':
            document.getElementById('centro').innerHTML = `<img src = "./img/13-morte.jpg">`
            document.getElementById('titulo').innerText = "XIII - A Morte"
            document.getElementById('texto').innerText = "O significado básico da carta A Morte é de que algo pode estar prestes a mudar e possivelmente trará renascimento, melhorando a condição da situação em questão. Tem a ver com términos, mas também traz consigo a possibilidade de novos começos, mudanças e transformações."
            break
        case '14':
            document.getElementById('centro').innerHTML = `<img src = "./img/14-temperanca.jpg">`
            document.getElementById('titulo').innerText = "XIV - A Temperança"
            document.getElementById('texto').innerText = "Temperança é a característica da pessoa que consegue equilibrar suas próprias vontades. Significa basicamente equilíbrio e sugere harmonia para a situação em questão, também traz a mensagem de que pode ser um bom momento para ser cauteloso, pois é um arcano que muitas vezes sugere moderação."
            break
        case '15':
            document.getElementById('centro').innerHTML = `<img src = "./img/15-diabo.jpg">`
            document.getElementById('titulo').innerText = "XV - O Diabo"
            document.getElementById('texto').innerText = "A carta indica que existem lições que você tem que aprender e isso nem sempre é ruim, sugere que algo que está te segurando, mas você não sabe muito bem o que é. Você pode estar cometendo excessos, pode estar enfermo ou alguém pode estar te atrapalhando. A carta então traz uma mensagem clara: liberte-se!"
            break
        case '16':
            document.getElementById('centro').innerHTML = `<img src = "./img/16-torre.jpg">`
            document.getElementById('titulo').innerText = "XVI - A Torre"
            document.getElementById('texto').innerText = "A carta A Torre tem a ver com mudanças abruptas. Algo pode mudar em relação à situação questionada. Pense em uma estrutura ou fundação que entra em colapso. Um relacionamento, um emprego, uma amizade e em alguns casos, até mesmo estruturas físicas."
            break
        case '17':
            document.getElementById('centro').innerHTML = `<img src = "./img/17-estrela.jpg">`
            document.getElementById('titulo').innerText = "XVII - A Estrela"
            document.getElementById('texto').innerText = "A Estrela quando aparece, indica um momento em que as coisas começam a dar certo. Sugere que conflitos podem ser apaziguados, problemas de saúde curados, dívidas quitadas, separações que viram reuniões, situações que se tornam positivas, enfim, indica paz, prosperidade e harmonia em sua resposta."
            break
        case '18':
            document.getElementById('centro').innerHTML = `<img src = "./img/18-lua.jpg">`
            document.getElementById('titulo').innerText = "XVIII - A Lua"
            document.getElementById('texto').innerText = "A Lua significa que está na hora de você seguir a sua intuição. Indica segredos, mistérios e ilusões. Se você tem que tomar uma decisão e não tem certeza sobre que caminho tomar, escute seu coração."
            break
        case '19':
            document.getElementById('centro').innerHTML = `<img src = "./img/19-sol.jpg">`
            document.getElementById('titulo').innerText = "XIX - O Sol"
            document.getElementById('texto').innerText = "O Sol significa que boas energias estão em jogo. A carta sugere otimismo e abundância, indicando que o sucesso parece ser inevitável. O Sol traz energia para realizar, nos enche de confiança e ilumina nosso caminho."
            break
        case '20':
            document.getElementById('centro').innerHTML = `<img src = "./img/20-julgamento.jpg">`
            document.getElementById('titulo').innerText = "XX - O Julgamento"
            document.getElementById('texto').innerText = "O Julgamento significa que um novo ciclo se inicia. Todo o seu desempenho ou os pormenores da questão serão avaliados e recompensas surgirão. Você terá uma mente mais clara e obterá as respostas que precisa."
            break
        case '21':
            document.getElementById('centro').innerHTML = `<img src = "./img/21-mundo.jpg">`
            document.getElementById('titulo').innerText = "XXI - O Mundo"
            document.getElementById('texto').innerText = "O Mundo indica basicamente sucesso, onde você finalmente colhe os frutos de seus esforços. Esse Arcano Maior anuncia um novo começo e indica que a mudança é inevitável. As mudanças que ocorrem ou ocorrerão tendem a ser positivas, sugerindo resposta positiva."
            break
    }

}

