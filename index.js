let homeScoreEl= document.querySelector(".home-score");
let guestScoreEl= document.querySelector(".guest-score");
let homeCount=0;
let guestCount=0;

function homePlusOne(){
    
    homeCount+=1;
    updateHomeScore();
}

function homePlusTwo(){
    homeCount+=2;
    updateHomeScore();
}

function homePlusThree(){
    
    homeCount+=3;
    updateHomeScore();
}

function updateHomeScore(){
    homeScoreEl.textContent=homeCount;
    
}

function guestPlusOne(){
    
    guestCount+=1;
    updateGuestScore();
}

function guestPlusTwo(){
    guestCount+=2;
    updateGuestScore();
}

function guestPlusThree(){
    
    guestCount+=3;
    updateGuestScore();
}

function updateGuestScore(){
    guestScoreEl.textContent=guestCount;
    
}