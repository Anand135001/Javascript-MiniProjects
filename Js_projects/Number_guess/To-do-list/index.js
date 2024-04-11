const search_input = document.querySelector("#search-input");
const Notes_list = document.querySelector("#Notes-List");

// ============= Add_Note ============
function AddNote(){
    if( search_input.value === ""){
          alert(" Can't able to add empty note! ");
    }
    else{
          let li = document.createElement("li");
          li.innerHTML = search_input.value;
          Notes_list.appendChild(li);
          // ======= delete button =======
          let span = document.createElement('span');
          span.innerHTML = '\u00d7';
          li.appendChild(span);
        }
          search_input.value = '';
          Store_Data();
}

// ========= event listener ===========
Notes_list.addEventListener('click', function(e) {
   
    if( e.target.tagName === 'LI' ){
        e.target.classList.toggle('tick');
        Store_Data();
    }
    else if(e.target.tagName === 'SPAN'){
         e.target.parentElement.remove();
         Store_Data();
    }

}, false);

// ============ Data storage ============== 
function Store_Data(){
    localStorage.setItem('data', Notes_list.innerHTML);
}
function get_Data(){
    Notes_list.innerHTML = localStorage.getItem('data');
}
get_Data();
