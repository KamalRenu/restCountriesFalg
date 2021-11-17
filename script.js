var board = document.createElement("div");
board.style.width = "1000";
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";
board.style.backgroundColor = "#ffdea6";
fetch("https://restcountries.com/v3.1/all")
.then(function(data){
    return data.json();
})
.then(function(dataObj){
    console.log(dataObj);
    dataObj.forEach(element => {
        var box = document.createElement("div");
        box.style.height = "200px";
        box.style.width = "200px";
        box.style.border = "1px solid black";
        board.appendChild(box)

        var box1 = document.createElement("div");
        box1.style.width = "50px";
        box.appendChild(box1)

        var pic = document.createElement("img");
        pic.style.width = "200px";
        pic.setAttribute("src",element.flags.png)
        box1.appendChild(pic)

        var box2 = document.createElement("p");
        box2.innerText = "name:"+element.name.common;
        box.appendChild(box2)

        var box3 = document.createElement("p");
        box3.innerText = "code:"+element.altSpellings[0];
        box.appendChild(box3)
    });
    document.body.appendChild(board);
})
.catch(function(err){
    console.log(err);
})