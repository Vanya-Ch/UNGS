document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.burger').addEventListener('click', (e)=>{
        e.target.classList.toggle('active')
        if(e.target.getAttribute('class') === 'burger active'){
            document.querySelector('.navigation').style.display = 'flex';
        }else{
            document.querySelector('.navigation').style.display = 'none';
        }
    })
})