document.addEventListener('DOMContentLoaded', function() {
            const noteForm = document.getElementById('note-form');
            const noteList = document.getElementById('note-list');

            noteForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const titleInput = document.getElementById('title');
                const contentInput = document.getElementById('content');

                const title = titleInput.value;
                const content = contentInput.value;
                const timestamp = new Date().toLocaleString();

                saveNote(title, content, timestamp);

                const noteItem = createNoteItem(title, content, timestamp);
                noteList.appendChild(noteItem);

                titleInput.value = '';
                contentInput.value = '';
            });

            function saveNote(title, content, timestamp) {
                let notes = JSON.parse(localStorage.getItem('notes')) || [];

                notes.push({
                    title: title,
                    content: content,
                    timestamp: timestamp
                });

                localStorage.setItem('notes', JSON.stringify(notes));
            }

            function loadNotes() {
                let notes = JSON.parse(localStorage.getItem('notes')) || [];

                for (let i = 0; i < notes.length; i++) {
                    const note = notes[i];
                    const noteItem = createNoteItem(note.title, note.content, note.timestamp, i);
                    noteList.appendChild(noteItem);
                }
            }

            function createNoteItem(title, content, timestamp, index) {
                const li = document.createElement('li');
                const noteTitle = document.createElement('h3');
                const noteTimestamp = document.createElement('span');
                const noteContent = document.createElement('p');
                const deleteButton = document.createElement('button');
                const copyButton = document.createElement('button');

                noteTitle.textContent = title;
                noteTimestamp.textContent = timestamp;
                noteContent.textContent = content;
                deleteButton.textContent = 'Eliminar';
                copyButton.textContent = 'Copiar';

                deleteButton.addEventListener('click', function() {
                    deleteNoteFromLocalStorage(index);
                    li.remove();
                });

                copyButton.addEventListener('click', function() {
                    copyNoteContent(content);
                });

                li.appendChild(noteTitle);
                li.appendChild(noteTimestamp);
                li.appendChild(noteContent);
                li.appendChild(deleteButton);
                li.appendChild(copyButton);

                return li;
            }

            function deleteNoteFromLocalStorage(index) {
                let notes = JSON.parse(localStorage.getItem('notes')) || [];

                notes.splice(index, 1);

                localStorage.setItem('notes', JSON.stringify(notes));
            }

            function copyNoteContent(content) {
                const textarea = document.createElement('textarea');
                textarea.value = content;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('Contenido de la nota copiado al portapapeles.');
            }

            // Cargamos las notas guardadas al cargar la página
            loadNotes();
        });