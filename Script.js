var choices=document.getElementById("textarea");
var tags=document.getElementById("tags");
textarea.focus();
choices.addEventListener("keyup",Getchoice);
function Getchoice(inp)
{
    
    var tagArray=inp.target.value.split(',').
    filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    tags.innerHTML='';
    tagArray.forEach(element => {
        const tag=document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML=element;
        tags.appendChild(tag);
        
    });
    if(inp.key==='Enter')
    {
        RandomSelect();
    }
    
}

function RandomSelect(){
    const time=30;
    const interval=setInterval(() => {
        var tagchoice=PickerTag();
        highlight(tagchoice);
       setTimeout(() => {
           unhighlight(tagchoice);
       }, 100);


    }, 100);
    setTimeout(() => {
        clearInterval(interval);
       setTimeout(() => {
        let tag=PickerTag();
        highlight(tag);
       }, 100);
    }, time*100);
}
function PickerTag()
{
    var taglist=document.querySelectorAll('.tag');
    return taglist[Math.floor(Math.random() *taglist.length)];
    
}
function highlight(x)
{
      x.classList.add('highlight');
}
function unhighlight(x)
{
    x.classList.remove('highlight');
}