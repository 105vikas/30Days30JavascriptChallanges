let questionList=document.querySelectorAll('.questionList');

questionList.forEach(ques=>{
    ques.addEventListener('click',()=>{
        ques.classList.toggle('active')
    })
})