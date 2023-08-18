$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/categories",
        success: function(response){
            console.log(response.data)
            let html_data =""
            response.data.forEach((data) => {
                html_data +=`<li>
                <a href="#">
                    <img
                        class="rest"
                        src="${data.image}"
                        alt="Image"
                    />
                    <span>${data.name}</span>
                </a>
            </li>`
            });      
            $("ul").html(html_data)  
        },
        error:function(){

        }
    })
})
$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/",
        success:function(response){
          
           
           
            let html_data=""
            response.data.forEach((user)=>{
                html_data +=`<div class="item">
                <a href="#">
                    <div class="top">
                        <img src="${user.image}" alt="Image" />
                    </div>
                    <div class="middle"><h3>${user.name}</h3></div>
                    <div class="bottom">
                        <img src="${user.image}" alt="Image" />
                        <span>${user.name}</span>
                    </div>
                </a>
            </div>`
            })
            $("div.items").html(html_data)
        },
        error:function(){

        }
    })
})