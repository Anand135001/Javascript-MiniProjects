let Items = document.querySelectorAll('.item');
let left = document.querySelector('.Drag');
let right = document.querySelector('.Drop');
// console.log(Items);
// console.log(left);
// console.log(right);


Items.forEach(function(Item_value){
    Item_value.addEventListener('dragstart', function (e){
        let select = e.target;
        // console.log(select);
        right.addEventListener('dragover', function(e){               
            e.preventDefault();
        });
        right.addEventListener('drop', function(e){                    
            right.appendChild(select);
            select = null;
            // console.log(select);
        })

        left.addEventListener('dragover', function(e){               
            e.preventDefault();
        });
        left.addEventListener('drop', function(e){               
            left.appendChild(select);
            select = mill;
        //  console.log(select);

        });
    });
});

