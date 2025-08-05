$(document).ready(function(){
    $("#add-note").click(function(){
        var newText = prompt("Enter your note:");
        if (newText){
            var noteId='note-' +$('note').length;
            var noteHtml = `
            <div id="$(noteId) class="note">
              <div class="note-text">${newText}</div>
              <div class="note-controls">
                 <button class="get-note">Get Note</button>
                 <button class="set-note">Set Note</button>
                 <button class="highlight-note">Highlight Note</button>
                 <button class="important-note">Important Note</button>
                 <button class="toggle-visibility">Hide</button>
                 <button class="delete-note">Delete</button>
                 </div>
                </div>
            
            `;
            $("#notes-container").append(noteHtml);
        }
    })
})