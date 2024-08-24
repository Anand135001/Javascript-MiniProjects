const notesContainer = document.querySelector('.notes-container');

// Generate Uniqe Id for saving notes in local storage  
function GenerateUniqeId(){
    return Date.now() + '-'+ Math.floor(Math.random() * 10000);
}

// =============== Display Saved note ================= 
function displayNote(){
    
    notesContainer.innerHTML = ''; // Clear previous notes

    for(let i = 0; i < localStorage.length; i++){
       const noteId = localStorage.key(i);
       const noteContent = localStorage.getItem(noteId);

       // Create main div for each note
       const mainDiv = document.createElement('div');
       mainDiv.classList.add('main-container');
      
       // Create toolbar
       const toolBar = document.createElement('div');
       toolBar.classList.add('toolBar');
      
       // Save and Delete buttons
       const saveBtn = document.createElement('button');
       saveBtn.textContent = 'Save';
       saveBtn.classList.add('saveBtn');

       const deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Delete';
       deleteBtn.classList.add('deleteBtn');

       // Textarea for note content
       const textarea = document.createElement('textarea');
       textarea.value = noteContent;

       // Append buttons to toolbar and toolbar, textarea to main div
       toolBar.appendChild(saveBtn);
       toolBar.appendChild(deleteBtn);
       mainDiv.appendChild(toolBar);
       mainDiv.appendChild(textarea);

      // Append the main div to the notes container
      notesContainer.appendChild(mainDiv);


      // ======= Save button functionality =====
       saveBtn.addEventListener('click', function(){
           const updatedContent = textarea.value;
           if(updatedContent){
              localStorage.setItem(noteId, updatedContent);
              alert('Note updated!');
            } else {
              alert('Please enter some text');
            }
        });

        // ========= Delete button functionality =========
        deleteBtn.addEventListener('click', function(){
            if(confirm('Are you sure you want to delete this note')){
              localStorage.removeItem(noteId);
              mainDiv.remove();
            }
        });
    }
}


// ================= Create New Note ====================

function createNote(){

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-container');

    const toolBar = document.createElement('div');
    toolBar.classList.add('toolBar');
    
    const saveBtn = document.createElement('button');  
    saveBtn.textContent = 'Save';
    saveBtn.classList.add('saveBtn');
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('deleteBtn');
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Enter your note here";
  
    toolBar.appendChild(saveBtn);
    toolBar.appendChild(deleteBtn);
    
    mainDiv.appendChild(toolBar);
    mainDiv.appendChild(textarea);

    // == Append main div into note container ==  
    notesContainer.appendChild(mainDiv); 

    // ========= Save button functionlity ========
    saveBtn.addEventListener('click', function(){
        const noteContent = textarea.value.trim();            
        if(noteContent){
            const noteId = GenerateUniqeId(); //function call
            localStorage.setItem(noteId, noteContent);
            displayNote();   // function call
            alert('Saved!');
        }
        else{
            alert('Please enter some text');
        }
    });

    // ========== Delete button fucntionality =========
    deleteBtn.addEventListener('click', function(){
        if(confirm('Are you Sure you want remove this note')){
          mainDiv.remove();
        }
    });
}

window.onload = displayNote;