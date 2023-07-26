var product = [{
    id: 1,
    img: 'https://d.line-scdn.net/lcp-prod-photo/20210522_6/1621682035977qsGrs_PNG/5C1A68YUZVRY8DFI6FT6IBFIPJZ7KW.png',
    name: 'YouTube Premium',
    price: 30,
    description: 'YouTube Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam architecto, repellendus dolore minima obcaecati?',
    type: 'Premium'
},{
    id: 2,
    img: 'https://media.threatpost.com/wp-content/uploads/sites/103/2021/04/19145523/Discord-Nitro-e1618858537976.png',
    name: 'Discord Nitro',
    price: 50,
    description:'Discord Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam architecto, repellendus dolore minima obcaecati?',
    type: 'Premium',
},{
    id:3,
    img: 'logo.jpg',
    name: 'SilentHub',
    price: 150,
    description:'Shoe Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam architecto, repellendus dolore minima obcaecati?',
    type: 'Script',
}];



$(document).ready(()=>{
    var html = ''; 
    for (let i = 0; i < product.length; i++){
        html += `<div class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                     <p style="font-size: 1.2vw;" >${product[i].name}</p>
                     <p style="font-size: 1.2vw;">${numberWithCommas(product[i].price) } THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function search(elem) {
    console.log(elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)
    var html = ''; 

    for (let i = 0; i < product.length; i++){
        if( product[i].name.includes(value)){
        html += `<div class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                     <p style="font-size: 1.2vw;" >${product[i].name}</p>
                     <p style="font-size: 1.2vw;">${numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }        
    }
    if(html == ''){
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-item").css('display', '')
}