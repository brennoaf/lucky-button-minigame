var primaryButton = document.getElementById('button-primary')
var atualHighscore = 0;
var atualScore = 0;
var atualScoreDisplay = document.getElementById('atual-score-counter');
var atualHighscoreDisplay = document.getElementById('atual-highscore-counter');
var LuckyChance = document.getElementById('lucky-chance');
var percentShower = document.getElementById('percent-shower');
var atualChance = 51;
var atualScoreChance = 47;

var mainBody = document.getElementById('main-body');
var menuOptions = document.getElementsByClassName('asset-button');
var popupCloseBtn = document.getElementById('popup-close');
var popupOpenBtn = document.getElementById('button-config');
var toDarkThemeBtn = document.getElementById('button-darker');
var confPopupCont = document.getElementById('config-popup-cont');
var colorInput = document.getElementById('color-input');

function scoreCounter(){
    randomInt = parseInt(Math.random() * atualChance);
    console.log(randomInt);

    if(randomInt < atualScoreChance){
        atualScore = atualScore + 1;
        atualScoreDisplay.innerHTML = atualScore;

        switch(true){
            case(0 <= atualScore && atualScore < 4):{
                atualScoreChance = 47;
            }break;

            case(4 <= atualScore && atualScore < 7):{
                atualScoreChance = 44;
            }break;

            case(7 <= atualScore && atualScore < 12):{
                atualScoreChance = 41;
            }break;

            case(12 <= atualScore && atualScore < 16):{
                atualScoreChance = 39;
            }break;

            case(16 <= atualScore && atualScore < 21):{
                atualScoreChance = 36;
            }break;

            case(21 <= atualScore && atualScore < 25):{
                atualScoreChance = 32;
            }break;

            case(25 <= atualScore && atualScore < 29):{
                atualScoreChance = 29;
            }break;
        }

        if(atualScore > atualHighscore){
            atualHighscore = atualScore;
            atualHighscoreDisplay.innerHTML = atualHighscore;
        }
    }else{
        atualScore = 0;
        atualScoreDisplay.innerHTML = atualScore;
        atualScoreChance = 47;
    }
    LuckyChance.innerHTML = parseInt((atualScoreChance / atualChance) * 100) + '%';
    percentShower.style.transition = '1s';
    primaryButton.style.transition = '1s';
    primaryButton.style.filter = 'grayscale(' + ((atualScoreChance / atualChance)) + ')'
    percentShower.style.filter = 'grayscale(' + ((atualScoreChance / atualChance)) + ')'
    
}

popupOpenBtn.addEventListener("click", () => {
    confPopupCont.style.transition = '1s';
    confPopupCont.classList.add('open');
})

popupCloseBtn.addEventListener("click", () => {
    confPopupCont.classList.remove('open');
})

function changeColor(){
    console.log(colorInput.value)
    primaryButton.style.transition = '1s';
    percentShower.style.transition = '1s';
    primaryButton.style.background = colorInput.value;
    percentShower.style.background = colorInput.value;

    for (obj in menuOptions) {
        menuOptions[obj].style.background = colorInput.value;
        menuOptions[obj].style.transition= '1s';
    }

}

function toDarkTheme(){
    toDarkThemeBtn.style.transition = '1s';
    toDarkThemeBtn.innerHTML = '☀️';

    mainBody.style.transition = '1s';
    mainBody.style.background = 'rgb(0, 7, 11)';
    mainBody.style.color = 'rgb(242, 247, 255)';

    percentShower.style.transition = '1s';
    percentShower.style.color = 'rgb(0, 7, 11)';

    toDarkThemeBtn.setAttribute('onClick', 'toLightTheme()');
}

function toLightTheme(){
    toDarkThemeBtn.style.transition = '1s';
    toDarkThemeBtn.innerHTML = '🌙';

    mainBody.style.transition = '1s';
    mainBody.style.background = 'rgb(242, 247, 255)';
    mainBody.style.color = 'rgb(0, 7, 11)';

    percentShower.style.transition = '1s';
    percentShower.style.color = 'rgb(242, 247, 255)';

    toDarkThemeBtn.setAttribute('onClick', 'toDarkTheme()');
}

//        if(atualScore < 30){
//            if(atualScore % 3 == 0){
//                atualScoreChance = atualScoreChance - 4;
//            }
//        } // otimizar
