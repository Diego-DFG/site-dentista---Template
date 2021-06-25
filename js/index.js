(function() {

    const btnBars = document.querySelector('.bars');
    const btnTimes = document.querySelector('.times');
    const navegacao = document.querySelector('.navegacao');
    const botaoToggle = document.querySelector('.btn__toggle');
    const navegacaoLista = document.querySelector('.navegacao__lista');
    

    var clicked = false;

    botaoToggle.addEventListener('click', (e)=> {

            e.preventDefault();

            btnTimes.style.color='rgba(0, 0, 0, 0.3)';
            btnBars.style.color='rgba(0, 0, 0, 0.3)';

            if(clicked) {

                    navegacaoLista.classList.remove('navegacao__lista-toggle');
                    navegacaoLista.style.transition='all 2s';
                    navegacao.classList.remove('navegacao-toggle');
                    navegacao.style.transition='all .5s';
                    btnTimes.style.display='none';
                    btnBars.style.display='flex';
                    clicked = false;
                
            } else {

                    navegacaoLista.classList.add('navegacao__lista-toggle');
                    navegacao.classList.add('navegacao-toggle');
                    navegacaoLista.style.transition='all 2s';
                    navegacao.style.transition='all .5s';
                    btnTimes.style.display='flex';
                    btnBars.style.display='none';
                    clicked = true;
            }

    });

})();