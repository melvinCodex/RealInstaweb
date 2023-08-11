const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const notificationCount = document.querySelector('.notification-count');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');

var root = document.querySelector(':root');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

let clickNot = 0;
let clickMes = 0;

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }
        clickMes++;
        if (clickMes % 2 == 0 && item.id == 'notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none';
            changeActiveItem();
        }
        })
})

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user =>{
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);



messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000);
    messagesNotification.querySelector('.notification-count')
    .style.display = 'none';
    notificationCount.style.display = 'none';
})


//theme customization

const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
theme.addEventListener('click', openThemeModel);


const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);

const removeActiveFont = () =>{
    fontSizes.forEach(font =>{
        font.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    let fontSize;
    size.addEventListener('click', () => {
        removeActiveFont();
        
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } 
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } 
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } 
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        } 
        size.classList.add('active');
    document.querySelector('html').style.fontSize = fontSize;
    })

})

const changeActiveColorCLass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color =>{
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorCLass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-l', lightColorLightness);
    root.style.setProperty('--white-color-l', whiteColorLightness);
    root.style.setProperty('--dark-color-l', darkColorLightness);
}
bg1.addEventListener('click', () =>{
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    changeBG();

})

bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '40%';
    lightColorLightness = '25%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBG();

})
bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBG();

})
