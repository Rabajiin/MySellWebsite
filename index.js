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
    price: 130,
    description:'Discord Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam architecto, repellendus dolore minima obcaecati?',
    type: 'Premium',
},{
    id:3,
    img: 'logo.jpg',
    name: 'Silent Hub',
    price: 150,
    description:'Shoe Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam architecto, repellendus dolore minima obcaecati?',
    type: 'Hub',
}];



$(document).ready(()=>{
    var html = ''; 
    for (let i = 0; i < product.length; i++){
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
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
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                     <p style="font-size: 1.2vw;" >${product[i].name}</p>
                     <p style="font-size: 1.2vw;">${numberWithCommas(product[i].price) }</p>
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
     $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src',product[index].img)
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB' )
    $("#mdd-desc").text(product[index].description)
}
function closeModal() {
    $(".modal").css('display', 'none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i =0; i < cart.length; i++) {
        if(productindex == cart[i].index) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1 
        };
        //console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart!'
    })
     $("#cartcount").css('display', 'flex').text(cart.length)
}
function openCart() {
    $('#modalCart').css('display','flex')
}