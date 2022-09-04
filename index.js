var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var scrol;
console.log(navMenuAnchorTags);
for (let i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetID = this.innerText.toLowerCase();
        console.log(targetID);
        var targetSection = document.getElementById(targetID);
        console.log(targetSection);
        var targetCordi = targetSection.getBoundingClientRect();
        scrol = setInterval(scrollVertically, 10, targetSection);
    })
}
function scrollVertically(targetSection) {

    if (targetSection == contact) {

        var targetCordi = targetSection.getBoundingClientRect();
        if (targetCordi.top <= 200) {
            clearInterval(scrol);
            return;
        }
        window.scrollBy(0, 50);
    }
    else {
        var targetCordi = targetSection.getBoundingClientRect();
        if (targetCordi.top <= 0) {
            clearInterval(scrol);
            return;
        }
        window.scrollBy(0, 50);
    }
}

//skill bar autofill

var progressBars = document.querySelectorAll('.skill-progress>div');
var skillContainer = document.getElementById('skill-container');
var animationDone = false;
window.addEventListener('scroll', checkScroll);
function checkScroll() {
    var cordi = skillContainer.getBoundingClientRect();
    if (!animationDone && cordi.top < window.innerHeight) {
        console.log("visible");
        animationDone = true;
        fillBars();
    }
    else if (cordi.top > window.innerHeight) {
        animationDone = false;
        console.log("not-visible");
        initialiseBars();
    }

}

function initialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

function fillBars() {
    for (let bar of progressBars) {
        console.log(bar);
        let curr = 0;
        let tar = bar.getAttribute('data-bar-width');
        console.log(tar);
        let interval = setInterval(function () {
            if (curr > tar) {
                clearInterval(interval);
                return;
            }
            curr++;
            bar.style.width = curr + '%';
        }, 7);
    }
}

/*
var progressBars=document.querySelectorAll('.skill-progress>div');
//var skillContainer=document.getElementById('skill-container');
var animationDone=false;
window.addEventListener('scroll',checkScroll);
function checkScroll(){
    for(let bar of progressBars){
        let cordi= bar.getBoundingClientRect();
        if(!animationDone&&cordi.top<window.innerHeight){
            console.log("visible");
            animationDone=true;
            fillBar();
            
function fillBar(){
        console.log(bar);
        let curr=0;
        let tar=bar.getAttribute('data-bar-width');
        console.log(tar);
        let interval=setInterval(function(){
            if(curr>tar){
                clearInterval(interval);
                return;
            }
            curr++;
            bar.style.width=curr+'%';
        },7);
}
        }
        else if(cordi.top>window.innerHeight){
            animationDone=false;
            console.log("not-visible");
            initialiseBar();
            function initialiseBar(){
                    bar.style.width=0+'%';
                }
            }
        }
    }
}



var progressBars=document.querySelectorAll('.skill-progress>div');
function initialiseBar(bar){
  bar.style.width=0;
}
let animationDone=false;
function fillBar(bar){
  let final=bar.getAttribute('data-bar-width');
  let curr=0;
  let interval=setInterval(function(){
    if(curr>=final){
      clearInterval(interval);
      return;
    }
    curr++;
    bar.style.width=curr+'%';
  },100);
}
function checkscroll(){
    for(bar of progressBars){
        	
      let cordi=bar.getBoundingClientRect();
      if(!animationDone&&cordi.top<window.innerHeight){
        animationDone=true;
       console.log("visible");
        fillBar(bar);
      }
      else{
        console.log("not visible");
        initialiseBar(bar);
        animationDone=false;
      }
      
       ///// console.log(bar);
     // console.log(cordi);
    }
};
window.addEventListener('scroll',checkscroll);
*/