var products = [
    {
        id: "product_1",
        image: "imagess/w_ethnic",
        title: "stylish ethnic wear",
        price: 400
    }
];
var addcart = (event) => {
    var btn = event.target;
    var id = btn.getAttribute("id");
    var tagId = "product_" + id;
    products.forEach((item, index) => {
        if (item.id == tagId) {
            var divTag = document.createElement("div");
            divTag.setAttribute("class", "cart-list");
            var li1 = document.createElement("li");
            var imgTag = document.createElement("img");
            imgTag.setAttribute("src", item.image);
            imgTag.style.width = "80px";
            imgTag.style.height = "80px";


            li1.append(imgTag);
            divTag.append(li1);
            var li2 = document.createElement("li");
            li2.innerHTML = item.title;
            divTag.append(li2);
            var li3 = document.createElement("li");
            li3.innerHTML = item.price;
            divTag.append(li3);
            document.querySelector(".cartcontainer").append(divTag);



        }

    })
    
};
var cart_toggle=()=>{
    var body=document.querySelector("body");
    body.classList.toggle("showover");
};
