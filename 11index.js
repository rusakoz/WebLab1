const model =[
    {type: 'title', value: [

            'Logo',

            'Пройти опрос',

            'Авторизация',
            'Админ панель',
            'Эксперт панель',
            'Выход'


        ]},
    {type: 'footer', value: [
        'Logo text',
            'Other',
            'Заголовок',
            'Что-то1',
            'Что-то2',
            'Что-то3',
            'Что-то4',
            'Контакты',
            'Демонстрационный сайт | создатель Руслан'
        ]},
    {type: 'columns', value: [
            '111111',
            '222222',
            '333333'
        ]}
]


const $site = document.querySelector('#site')

model.forEach(block =>{
    let html = ''

    if(block.type === 'title'){
        html = title(block)
    }
    else if(block.type === 'footer'){
        html = footer(block)
    }
    else if(block.type === 'columns'){
        html = columns(block)
    }

    $site.insertAdjacentHTML('beforeend', html)

})


function title(block){
    return `
        <div class="row">
            <div class="col-4">
                <h1>
                    <a href="/">${block.value[0]}</a>
                </h1>
            </div>
            <nav class="col-8"> 
                
                <ul> 
                    <li>
                        <a href="#">${block.value[1]}</a>
                    </li>
                    <li>
                        <a href="#">${block.value[2]}</a> 
                        <ul> 
                            <li><a href="#">${block.value[3]}</a></li>
                            <li><a href="#">${block.value[4]}</a></li>
                            <li><a href="#">${block.value[5]}</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
          
        </div>
        `
}

function footer(block){
    return `
            <div class="footer container-fluid">
                <div class="footer-content container">
                    <div class="row">
                        <div class="footer-section about col-md-4 col-12">
                            <h3 class="logo-text">
                                ${block.value[0]}
                            </h3>
                            <p>
                                ${block.value[1]}
                            </p>
                            <div class="contacts">
                                <span><i class="fas fa-phone"></i> &nbsp; 123-456-789</span>
                                <span><i class="fas fa-envelope"></i> &nbsp; mail@mail.ru</span>
                            </div>
                            <div class="socials">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
            
                        <div class="footer-section links contacts col-md-4 col-12">
                            <h3> ${block.value[2]}</h3>
                            <br>
                            <ul>
                                <a href="#">
                                    <li> ${block.value[3]}</li>
                                </a>
                                <a href="#">
                                    <li> ${block.value[4]}</li>
                                </a>
                                <a href="#">
                                    <li> ${block.value[5]}</li>
                                </a>
                                <a href="#">
                                    <li> ${block.value[6]}</li>
                                </a>
                            </ul>
                        </div>
            
                        <div class="footer-section three col-md-4 col-12">
                            <h3> ${block.value[7]}</h3>
            
                        </div>
            
                        <div class="footer-coopyrayt">
                            &copy; ${block.value[8]}
                        </div>
                    </div>
                </div>
            </div>
        `
}

/*
function columns(block){
    const html = block.value.map(item => `<div class="col-4">${item}</div>`)
    return `
        <div class="row">
            ${html.join(' ')}
        </div>
    `
}

*/
