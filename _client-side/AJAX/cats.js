let reqContainer = document.getElementById("request-info");
let btn = document.getElementById("btn");


 // xhttp.onreadystatechange = function () {
            // if (this.readyState == 4 && this.status == 200) {
btn.addEventListener("click", function () {
    let findRequest = new XMLHttpRequest();
    findRequest.open('GET', 'https://api.myjson.com/bins/14zcaw');
    findRequest.onload = function () {
        let arrayData = JSON.parse(findRequest.responseText);
        for (let i = 0; i <= arrayData.length; arrayData++) {
             document.getElementById("request-info").innerHTML +=   `${arrayData[i].name}:  ${arrayData[i].title} of ${arrayData[i].dept} dept`;
        console.log(arrayData[i]);

        }
        // renderHTML(arrayData);
    };
    findRequest.send();
    // arrayData = this.responseText;
    return d = this.responseText;
});
//    document.getElementById("name").innerHTML = char.name;
//                 document.getElementById("height").innerHTML = char.height;
             
// function renderHTML(d) {
//     reqContainer.innerHTML= d.name;
//     reqContainer.insertAdjacentHTML('afterend',  d );
// }

// const theInfo = [
//     {
//         "name": "Meowsalot",
//         "dept": "benco",
//         "title": "staff"
//     },
//     {
//         "name": "Purrs",
//         "dept": "benco",
//         "title": "deptHead"

//     },
//     {
//         "name": "Casper",
//         "dept": "academic",
//         "title": "faculty"
//     },
//     {
//         "name": "Winslow",
//         "dept": "academic",
//         "title": "deptHead"

//     },
//     {
//         "name": "Kit",
//         "dept": "corporate",
//         "title": "Supervisor"
//     },
//     {
//         "name": "Kat",
//         "dept": "benco",
//         "title": "Supervisor"

//     }
// ]
