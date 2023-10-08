let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".nav-bar");
let social = document.querySelector(".social")

menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    social.classList.toggle("active")
})



$(document).ready(function() {

    var arrLang={

        'az':{

            '0':'Haqqımızda',
            '1':'Xidmətlərimiz',
            '2':'Partnyorlar',
            '3':'Əlaqə',
            '4':'Gömrük məntəqələrinə getmədən,bizimlə gömrük təmsilçiliyi xidmətlərinin göstərilməsinə dair xidməti müqavilə bağlıyıb, etibarnamə təqdim etməklə,vaxtınıza və pulunuza qənaət edərək idxal etdiyiniz malları bizim vasitəmizlə bir başa ünvanınızda təhvil təslim aktı əsasında təhvil ala bilərsiniz.',
              '5':'Daha etrafli'
        },


        'ru':{
            '0':'О нас',
            '1':'Новости',
            '2':'Партнеры',
            '3':'Новости',
            '4':'Не посещая таможни, Вы можете сэкономить свое время и деньги, заключив с нами договор оказания услуг по оказанию услуг таможенного представительства, а предоставив доверенность, Вы сможете принять через нас ввозимый товар на основании акт доставки на ваш адрес.',
            '5':'Подробности'
        },


    };



$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="ru"){
        $("#drop_yazı").html("ru");
    }
    else{
        $("#drop_yazı").html("Az");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);

  });

});


let accordion = document.getElementsByClassName("contentbBx");



for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

