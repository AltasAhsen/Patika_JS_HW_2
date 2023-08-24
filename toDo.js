let load = () => {
    window.localStorage.clear()
    window.localStorage.setItem(document.getElementById("0").innerHTML,"0")
    window.localStorage.setItem(document.getElementById("1").innerHTML,"1")
}
let ciz = (e) => {
    e.style.textDecoration == "line-through" ? e.style.textDecoration ="none" : e.style.textDecoration = "line-through"
}

let sil = (e) => {
    e.parentElement.remove()
    window.localStorage.removeItem(e.parentElement.childNodes[0].innerHTML)
    console.log(localStorage)
    
}
let ekle = () => {
    if(document.getElementById("input").value.trim() == ""){
    //  Bootstrap 5 - Add And Initialize Toast On Page Load
    //  https://www.youtube.com/watch?v=fbXHOVp_L_4
        let myalert = document.querySelector(".toast")
        let bsalert = new bootstrap.Toast(myalert)
        bsalert.show()


    }else{

        let x = document.getElementById("input").value;
        let lis = document.createElement("li");
        lis.className = "row border-top li"
    
        let p = document.createElement("p")
        p.innerHTML=x;
        p.className = "btn col-11 mb-0 p"
        p.onclick = () => {ciz(p)};
        window.localStorage.setItem(p.innerHTML,localStorage.length);
        console.log(localStorage)
    
        let btn = document.createElement("button")
        btn.className = "btn col-1 bttn";
        btn.innerHTML = "X"
        btn.onclick = () => {sil(btn)}
    
        lis.appendChild(p)
        lis.appendChild(btn)
        document.body.childNodes[3].childNodes[3].appendChild(lis)
    }


}