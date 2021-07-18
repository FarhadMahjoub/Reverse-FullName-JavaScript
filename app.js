const btn = document.getElementById("btn");
const input = document.getElementById("input");
const p = document.getElementById("p");



btn.addEventListener('click', function() {
    //console.log(input.value);
    if(input.value === "")
    {
        alert('Enter FullName');
    }
    else
    {
        let FullName = input.value;
    let split = FullName.split(" ");
    let rev = split.reverse().toString();
    let rep = rev.replace(',' , ' ');
    p.innerHTML = rep;
    }
})