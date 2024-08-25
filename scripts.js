document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const notesList = document.getElementById('notesList');
        
        const li = document.createElement('li');
        li.className = 'note-item';
        
        const span = document.createElement('span');
        span.textContent = noteText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            notesList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
        
        noteInput.value = '';
    }
});
