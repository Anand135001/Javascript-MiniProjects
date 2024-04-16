const selectField = document.querySelector('#selectField');
const  searchInput = document.querySelector('input');
const options = document.querySelectorAll('.options');
const list = document.querySelector('#list')
        
         
    selectField.onclick = function () {
        list.classList.toggle('hide');
    }
            
    for(const change of options) {
        change.onclick = function () {
        searchInput.value = change.textContent.trim();
        list.classList.add('hide');
        }
    }
            
    searchInput.addEventListener('input', function(){
        const SearchTerm = (searchInput.value.toLowerCase());
   
         options.forEach(function(item){
         let Text = item.textContent.toLowerCase().trim();
                
           if(Text.includes(SearchTerm)){
              item.style.display = 'block';
            }
            else{
               item.style.display = 'none';
            }

        });
    });