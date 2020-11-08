var singleSignup = document.getElementById("single-signup"); 
var groupSignup = document.getElementById("group-signup"); 
var single = document.getElementById("singleBtn");
var group  = document.getElementById("groupBtn");
var group1 = document.getElementById('group1Btn');
var close1 = document.getElementById("closeBtn1");
var close2 = document.getElementById("closeBtn2");
single.onclick = function(){
    singleSignup.style.display = "block";
}
group.onclick = function(){
    groupSignup.style.display = "block";
}
group1.onclick = function(){
    groupSignup.style.display = "block";
}
close1.onclick = function() {
    singleSignup.style.display = "none";
}
close2.onclick = function() {
    groupSignup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == singleSignup || event.target == groupSignup ) {
        singleSignup.style.display = "none";
        groupSignup.style.display = "none";
    }
}