const menu = document.querySelector(".menu-icon");
const item = document.querySelector(".menu-items");
const product = document.querySelector(".col-2 img");
const singleproduct = document.querySelectorAll(".small-img-col img");
const header = document.querySelectorAll(".login-header h3");
const footer = document.querySelector(".login-footer");
const underline = document.querySelector("hr");

function toggle()
{
    item.style.maxHeight = "0px";
    menu.addEventListener("click",()=>
    {
        if(item.style.maxHeight == "0px")
        {
            item.style.maxHeight = "200px";
        }
        else{
            item.style.maxHeight = "0px";
        }
    
    })
}
toggle();

function smalldisplay()
{
  singleproduct.forEach((data)=>
  {
    data.addEventListener("click",(e)=>
    {
       product.src = e.target.src;
    })
  })
}
smalldisplay();

function lol()
{
  header.forEach((data)=>
  {
    data.addEventListener("click" ,(e)=>
    {
        console.log(e.target.innerText);
      
        if(e.target.innerText === "Login")
        {
            footer.style.transform = "translateX(0px)";
            underline.style.left = "16%";
            underline.style.width="60px";
        }
        else if(e.target.innerText === "Register")
        {
            footer.style.transform = "translateX(-300px)";
            underline.style.left = "55%";
            underline.style.width="90px";
           
        }
    })
  })
}
lol();