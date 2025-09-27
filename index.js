

const questions = document.querySelectorAll('.faq-boxes .question')

questions.forEach(question => {
    question.addEventListener('click', ()=> {
        // Find next sibling answer element
        const answer = question.nextElementSibling;


        // Toggle Display
        if (answer.style.display === "none"){
            answer.style.display = "block"
        } else {
            answer.style.display = "none"
        }
    })
})  