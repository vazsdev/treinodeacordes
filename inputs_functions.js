//Javascript

    function certo() {
        window.location.href = 'index2.html'
    }
    function errado() {
        window.location.href = 'erro.html'
    }

    function certo_1() {
        window.location.href = 'index3.html'
    }
    function certo_2() {
        window.location.href = 'finalindex.html'
    }

    function dicas_1() {
        var div1 = document.querySelector('div#dica1')
        div1.style.color = 'blue'
        div1.style.background = 'gray'
        div1.style.cssText = `font: oblique 15pt arial; background: gray; margin-top: 5px; margin-left: auto`
        div1.align = 'center'
        div1.innerHTML = `Esse acorde tem um som lá longe.`
    }
    function dicas_2() {
        var div1 = document.querySelector('div#dica2')
        div1.style.color = 'blue'
        div1.style.background = 'gray'
        div1.style.cssText = `font: oblique 15pt arial; background: gray; margin-top: 5px; margin-left: auto`
        div1.align = 'center'
        div1.innerHTML = `Esse acorde me lembra da luz do Sol.`
    }
    function dicas_3() {
        var div1 = document.querySelector('div#dica3')
        div1.style.color = 'blue'
        div1.style.background = 'gray'
        div1.style.cssText = `font: oblique 15pt arial; background: gray; margin-top: 5px; margin-left: auto`
        div1.align = 'center'
        div1.innerHTML = `Esse acorde parece ser 7 vezes maior que os outros.`
    }