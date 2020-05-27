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
