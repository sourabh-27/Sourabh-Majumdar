var id = document.querySelectorAll("#smooth");
// console.log("id", id);
id.forEach(x => {
    // console.log(x);
    var educationSection = x.innerHTML;
    var z = educationSection.toLowerCase();
    // z.slice(4);
    // console.log(z);
    // console.log(typeof(z));
    if(z == "home"){
        return;
    }
    var y = document.getElementById(z);
    // console.log("Adding event listener to", x);
    x.addEventListener('click', function(event){
            // console.log("event", event);
            event.preventDefault();
            // alert("I am going in!");
            // console.log(educationY);
            var interval = setInterval(function(){
                    educationY = y.getBoundingClientRect();
                    // console.log(window.pageYOffset);
                    if(educationY.top <= 0){
                        // alert("exceeded");
                        clearInterval(interval);
                        return;
                    }
                    window.scrollBy(0, 50);
                }, 15);
            // console.log("exited the interval");
        });
});


//skill section-animation
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(coordinates.top <= window.innerHeight && !animationDone){
        animationDone = true;
        console.log("Skills Section Visible");
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 3);
    }
}
