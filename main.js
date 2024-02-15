var typed = new  Typed('.text', {
    strings: ['web developer and designer.', 'designer.','developer'],    loop :true,
    typeSpeed : 100,
    backspeed :80,
    backDelay: 1500 ,
});
const sr =ScrollReveal({
    distance:'35px',
    duration:2400,
    reset:true,
});
sr.reveal('.header-left,#serv1',{delay:210 , origin:'left'});
sr.reveal('.header-right,#serv2,#pro2,#pro4,#pro6',{delay:210 , origin:'left'});
sr.reveal('.serv2 ,input,.about-right,.about-left,textarea,#skill6,',{delay:210 , origin:'bottom'});
sr.reveal('#skill1,#skill2,#pro1,#pro3,#pro5',{delay:210 , origin:'left'});
sr.reveal('#skill4,#skill5',{delay:210 , origin:'left'});
document.querySelector('.buttons .a2').onmouseover=function(){
    document.querySelector('.a2 span').style.display='block'
    document.querySelector('.a2').style.color='#12F7FF'
}
document.querySelector('.a2').onmouseout=function(){
    document.querySelector('.a2 span').style.display='none'
    document.querySelector('.a2').style.color='black'

}
document.querySelector('.buttons .a3').onmouseover=function(){
    document.querySelector('.a3 span').style.display='block'
    document.querySelector('.a3').style.color='black'
}
document.querySelector('.a3').onmouseout=function(){
    document.querySelector('.a3 span').style.display='none'
    document.querySelector('.a3').style.color='#12F7FF'
}
document.querySelector('#nav-right-menu').onclick=function(){
    document.querySelector('ol').style.display='flex'
    document.querySelector('#nav-right-menu').style.display='none'
    document.querySelector('#nav-right-close').style.display='block'
}
document.querySelector('#nav-right-close').onclick=function(){
    document.querySelector('ol').style.display='none'
    document.querySelector('#nav-right-menu').style.display='block'
    document.querySelector('#nav-right-close').style.display='none'
}
document.querySelector('.settings1').onclick=function(){
    document.querySelector('.color1').style.display='flex'
}
document.querySelector('.row').onclick=function(){
    document.querySelector('.color1').style.display='none'
}
document.querySelector('.settings2').onclick=function(){
    document.querySelector('.color2').style.display='flex'
}
document.querySelector('.row2').onclick=function(){
    document.querySelector('.color2').style.display='none'
}
document.querySelector('#black').onclick=function(){
    document.querySelector('header').style.backgroundImage='none';
    document.querySelector('header').style.backgroundColor='black';
    document.querySelector('.services').style.backgroundImage='none';
    document.querySelector('.services').style.backgroundColor='black';
    document.querySelector('.projects').style.backgroundImage='none';
    document.querySelector('.projects').style.backgroundColor='black';
}
document.querySelector('#origenal').onclick=function(){
    document.querySelector('header').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';    ;
    document.querySelector('.services').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';
    document.querySelector('.projects').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';
}
document.querySelector('#black2').onclick=function(){
    document.querySelector('header').style.backgroundImage='none';
    document.querySelector('header').style.backgroundColor='black';
    document.querySelector('.services').style.backgroundImage='none';
    document.querySelector('.services').style.backgroundColor='black';
    document.querySelector('.projects').style.backgroundImage='none';
    document.querySelector('.projects').style.backgroundColor='black';
}
document.querySelector('#origenal2').onclick=function(){
    document.querySelector('header').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';    ;
    document.querySelector('.services').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';
    document.querySelector('.projects').style.backgroundImage='linear-gradient(to right, #282c7e, #623c96, #954eab, #c761bd, #f976cc)';
}