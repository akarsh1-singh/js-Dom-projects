
const button1=document.querySelectorAll('.clr-buttons');
const body=document.querySelector("body");


button1.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'btn1')
        {
            body.style.backgroundColor='grey';
        }
        if(e.target.id === 'btn2')
        {
            body.style.backgroundColor='white';
        }
        if(e.target.id === 'btn3')
        {
            body.style.backgroundColor='yellow';
        }
        if(e.target.id === 'btn4')
        {
            body.style.backgroundColor='blue';
        }
    });

});