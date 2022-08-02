let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
showSlides();

function showSlides(){
    $('.product').onclick = () =>{
        $('.menu-container').classList.toggle('active') 
    }
    
    $('.menu-container').onclick = () =>{
        $('.menu-container').classList.toggle('active') 
    }

    $('.menu-container').onclick = () =>{
        $('.menu-icon').classList.toggle('active') 
    }

    $('.search-icon').onclick = () =>{
        $('.search-form').classList.toggle('active')
    }
    
    $('.cart-icon').onclick = () =>{
        $(' .cart-form').classList.toggle('active')
    }
    
    $('.menu-icon').onclick = () =>{
        $('.navigaton-center .list').classList.toggle('active')
    }
    
    $('.close-btn').onclick = () =>{
        $('.navigaton-center .list').classList.toggle('active')
    }
    
}
