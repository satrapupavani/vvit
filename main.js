fetch("data.json")
.then((res)=>{
    return res.json();
}).then((data)=>{
    display(data.basics);
})
var bodyelement=document.querySelector("#root");
function display(info)
{
    //card view
    let webcard=document.createElement("div");
    webcard.classList.add("card");
    //heading view
    let heading=document.createElement("h1");
    heading.textContent=info.name;
    webcard.append(heading);
    bodyelement.append(webcard);
    //horizintal line
    let line=document.createElement("hr");
    line.color="red";
    webcard.append(line);
    //role
    let detail1=document.createElement("h1");
    detail1.textContent=info.role;
    webcard.append(detail1);
    bodyelement.append(webcard);
    //mobile
    let detail2=document.createElement("h2");
    detail2.textContent=info.mobile;
    webcard.append(detail2);
    bodyelement.append(webcard);
    //email
    let email=document.createElement("a");//anchor tag
    //adding link to mail
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    webcard.append(email);
    bodyelement.append(webcard);

    webcard.append(document.createElement("br"));
    webcard.append(document.createElement("br"));
    //link to mobile
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    webcard.append(mobile);
    bodyelement.append(webcard);
    webcard.append(document.createElement("br"));
    webcard.append(document.createElement("br"));
    //adding button
    let button =document.createElement("a");
    button.textContent="view profile";
    button.classList.add("btn");
    webcard.append(button);
   
}