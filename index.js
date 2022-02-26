let btn=document.getElementById("btn")
let text= document.getElementById("text")
let textarea = document.getElementById("txtarea")
let block = document.querySelector("#block")
const todoContainer=document.querySelector(".todoContainer")
let data=[]
let titleText="";
let todoText="";
let a ;
 let date ;
 let Time;
 setInterval(()=>{
     a = new Date();
      document.getElementById('date').innerHTML = "Date:-"+date;
     date =a.getDate() +"-"+ a.getMonth() + "-" + a.getFullYear();
     Time =  a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
   document.getElementById('time').innerHTML = "Time:-"+Time;   
    },1000) 


text.addEventListener("input",(e)=>{
    titleText=e.target.value
})

textarea.addEventListener("input",(e)=>{

    todoText=e.target.value

})
const addNewList= ()=>
{
     const content = document.createElement('div');
     content.classList.add('content');
     const htmlData=`  <h2>${titleText}</h2>
     <p>${todoText}.</p>
     <button class="del">Delete</button>`
     data.push('htmlData');
    content.insertAdjacentHTML("afterbegin",htmlData);
    console.log(content);
    const delbutton = content.querySelector('.del');
    delbutton.addEventListener('click',()=>
    {
        content.remove();
    })
        todoContainer.appendChild(content);
}

btn.addEventListener("click",()=> addNewList() );


