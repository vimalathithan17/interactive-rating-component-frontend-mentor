
let light_grey=window.getComputedStyle(document.documentElement).getPropertyValue('--Light-Grey');
let orange=window.getComputedStyle(document.documentElement).getPropertyValue('--Orange');
let para_clr=window.getComputedStyle(document.documentElement).getPropertyValue('--Medium-Grey');
let user_rating=document.getElementById('user_rating');
let submit=document.getElementById('btn');
let state1=document.getElementById('s1');
let state2=document.getElementById('s2');
console.log(submit,'\n',state1,'\n',state2);
let a = document.getElementById("1");
let b = document.querySelectorAll(".rating__val");
let rating_value;
//event listeners for slecting and hover events
b.forEach((v) =>{v.addEventListener("click",(e)=>selected(e))});
b.forEach((v)=>{v.addEventListener('mouseover',e=>hoverin(e))});
b.forEach((v)=>{v.addEventListener('mouseout',e=>hoverout(e))});
function selected(e)
{
  rating_value=e.target.innerHTML;
    console.log(rating_value);
    console.log("e",e.target.innerHTML);
    for(let do_ of b)
    {
      if(do_.innerHTML===rating_value)
      {
        document.getElementById(`rat${rating_value}`).style.backgroundColor=light_grey;
    document.getElementById(`rat${rating_value}`).style.color='white';
      }
      else
      {
        document.getElementById(`rat${do_.innerHTML}`).style.backgroundColor='hsl(220, 22%, 24%)';
        document.getElementById(`rat${do_.innerHTML}`).style.color=para_clr;
      }
    }
}
function hoverin(e)
{
  document.getElementById(`rat${e.target.innerHTML}`).style.backgroundColor=orange;
  document.getElementById(`rat${e.target.innerHTML}`).style.color='white';
}
function hoverout(e)
{
  for(let do_ of b)
    {
      if(do_.innerHTML===rating_value)
      {
        document.getElementById(`rat${rating_value}`).style.backgroundColor=light_grey;
    document.getElementById(`rat${rating_value}`).style.color='white';
      }
      else
      {
        document.getElementById(`rat${do_.innerHTML}`).style.backgroundColor='hsl(220, 22%, 24%)';
        document.getElementById(`rat${do_.innerHTML}`).style.color=para_clr;
      }
    }
}

/* this can be done like this too
let rating=document.getElementsByClassName('rating__val');
for(let v of rating)
{
    v.addEventListener('click',e=>console.log(v.innerHTML))
};
*/
submit.addEventListener('click',e=>{
  state1.style.visibility='hidden';
state2.style.visibility='visible';
user_rating.innerText=rating_value;
})
