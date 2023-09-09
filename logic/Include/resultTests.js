




// Что это такое в душе не чаю, но пусть будет :)







let mainBlock = document.getElementById('ul1');
let block = document.getElementById('li1');
let block2 = document.getElementById('li2');
let block3 = document.getElementById('li3');
let block4 = document.getElementById('li4');
let block5 = document.getElementById('li5');
let block6 = document.getElementById('li6');




block.addEventListener('click', event =>{
    if(event.button === 0){
        // block.remove();
        // block2.remove();
        // block3.remove();
        // block4.remove();
        // block5.remove();
        // block6.remove();

        mainBlock.innerHTML = '<table class="table">\n' +
            '  <thead>\n' +
            '    <tr>\n' +
            '      <th scope="col" style="color: #ded5d5">#</th>\n' +
            '      <th scope="col" style="color: #ded5d5">First</th>\n' +
            '      <th scope="col" style="color: #ded5d5">Last</th>\n' +
            '      <th scope="col" style="color: #ded5d5">Handle</th>\n' +
            '    </tr>\n' +
            '  </thead>\n' +
            '  <tbody>\n' +
            '    <tr>\n' +
            '      <th scope="row">1</th>\n' +
            '      <td>Mark</td>\n' +
            '      <td>Otto</td>\n' +
            '      <td>@mdo</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '      <th scope="row">2</th>\n' +
            '      <td>Jacob</td>\n' +
            '      <td>Thornton</td>\n' +
            '      <td>@fat</td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '      <th scope="row">3</th>\n' +
            '      <td colspan="2">Larry the Bird</td>\n' +
            '      <td>@twitter</td>\n' +
            '    </tr>\n' +
            '  </tbody>\n' +
            '</table>';

    }
});

block2.addEventListener('click', event =>{
    if(event.button === 0){
        block.remove();
        block2.remove();
        block3.remove();
        block4.remove();
        block5.remove();
        block6.remove();
    }
});

block3.addEventListener('click', event =>{
    if(event.button === 0){
        block.remove();
        block2.remove();
        block3.remove();
        block4.remove();
        block5.remove();
        block6.remove();
    }
});

block4.addEventListener('click', event =>{
    if(event.button === 0){
        block.remove();
        block2.remove();
        block3.remove();
        block4.remove();
        block5.remove();
        block6.remove();
    }
});

block5.addEventListener('click', event =>{
    if(event.button === 0){
        block.remove();
        block2.remove();
        block3.remove();
        block4.remove();
        block5.remove();
        block6.remove();
    }
});

block6.addEventListener('click', event =>{
    if(event.button === 0){
        block.remove();
        block2.remove();
        block3.remove();
        block4.remove();
        block5.remove();
        block6.remove();
    }
});