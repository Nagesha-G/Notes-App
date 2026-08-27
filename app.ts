import { Note } from "./types";


// ==========================================
// APPLICATION STATE
// ==========================================

let notes: Note[] = [];

let editingNoteId: number | null = null;


// ==========================================
// DOM ELEMENTS
// ==========================================

const searchInput =
    document.getElementById("searchInput") as HTMLInputElement;

const newNoteButton =
    document.getElementById("newNoteButton") as HTMLButtonElement;

const editor =
    document.getElementById("editor") as HTMLElement;

const titleInput =
    document.getElementById("titleInput") as HTMLInputElement;

const contentInput =
    document.getElementById("contentInput") as HTMLTextAreaElement;

const saveButton =
    document.getElementById("saveButton") as HTMLButtonElement;

const cancelButton =
    document.getElementById("cancelButton") as HTMLButtonElement;

const notesContainer =
    document.getElementById("notesContainer") as HTMLElement;

const emptyMessage =
    document.getElementById("emptyMessage") as HTMLElement;


// ==========================================
// LOCAL STORAGE
// ==========================================

function loadNotes(): void {

    const savedNotes =
        localStorage.getItem("notes");

    if (savedNotes) {

        notes = JSON.parse(savedNotes) as Note[];

    }

    renderNotes();
}


function saveNotes(): void {

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}


// ==========================================
// EDITOR
// ==========================================

function openEditor(): void {

    editor.classList.remove("hidden");

    titleInput.focus();
}


function closeEditor(): void {

    editor.classList.add("hidden");

    titleInput.value = "";

    contentInput.value = "";

    editingNoteId = null;

    saveButton.textContent = "Save Note";
}


// ==========================================
// CREATE NOTE
// ==========================================

function createNote(): void {

    const title =
        titleInput.value.trim();

    const content =
        contentInput.value.trim();


    if (!title || !content) {

        alert(
            "Please enter both title and content."
        );

        return;
    }


    const newNote: Note = {

        id: Date.now(),

        title: title,

        content: content,

        updatedAt:
            new Date().toLocaleString()
    };


    notes.unshift(newNote);

    saveNotes();

    renderNotes();

    closeEditor();
}


// ==========================================
// UPDATE NOTE
// ==========================================

function updateNote(): void {

    if (editingNoteId === null) {

        return;
    }


    const title =
        titleInput.value.trim();

    const content =
        contentInput.value.trim();


    if (!title || !content) {

        alert(
            "Please enter both title and content."
        );

        return;
    }


    const noteIndex =
        notes.findIndex(
            note =>
                note.id === editingNoteId
        );


    if (noteIndex === -1) {

        return;
    }


    notes[noteIndex] = {

        ...notes[noteIndex],

        title: title,

        content: content,

        updatedAt:
            new Date().toLocaleString()
    };


    saveNotes();

    renderNotes();

    closeEditor();
}


// ==========================================
// EDIT NOTE
// ==========================================

function editNote(id: number): void {

    const note =
        notes.find(
            note => note.id === id
        );


    if (!note) {

        return;
    }


    editingNoteId = id;

    titleInput.value =
        note.title;

    contentInput.value =
        note.content;

    saveButton.textContent =
        "Update Note";

    openEditor();
}


// ==========================================
// DELETE NOTE
// ==========================================

function deleteNote(id: number): void {

    const confirmed =
        confirm(
            "Are you sure you want to delete this note?"
        );


    if (!confirmed) {

        return;
    }


    notes =
        notes.filter(
            note => note.id !== id
        );


    saveNotes();

    renderNotes();
}


// ==========================================
// SEARCH
// ==========================================

function searchNotes(
    searchTerm: string
): Note[] {

    const term =
        searchTerm
            .toLowerCase()
            .trim();


    if (!term) {

        return notes;
    }


    return notes.filter(
        note =>

            note.title
                .toLowerCase()
                .includes(term)

            ||

            note.content
                .toLowerCase()
                .includes(term)
    );
}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(
    text: string
): string {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ==========================================
// RENDER NOTES
// ==========================================

function renderNotes(): void {

    const filteredNotes =
        searchNotes(
            searchInput.value
        );


    notesContainer.innerHTML = "";


    if (filteredNotes.length === 0) {

        emptyMessage.style.display =
            "block";


        if (searchInput.value.trim()) {

            emptyMessage.textContent =
                "No notes found.";

        } else {

            emptyMessage.textContent =
                "No notes yet. Create your first note.";
        }


        return;
    }


    emptyMessage.style.display =
        "none";


    filteredNotes.forEach(
        (note: Note) => {

            const noteCard =
                document.createElement(
                    "article"
                );


            noteCard.className =
                "note-card";


            noteCard.innerHTML = `

                <h3>
                    ${escapeHTML(note.title)}
                </h3>

                <p>
                    ${escapeHTML(note.content)}
                </p>

                <div class="note-date">
                    Updated:
                    ${escapeHTML(note.updatedAt)}
                </div>

                <div class="note-actions">

                    <button
                        class="edit-btn"
                        data-action="edit"
                        data-id="${note.id}"
                    >
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-btn"
                        data-action="delete"
                        data-id="${note.id}"
                    >
                        🗑️ Delete
                    </button>

                </div>
            `;


            notesContainer.appendChild(
                noteCard
            );
        }
    );
}


// ==========================================
// NEW NOTE BUTTON
// ==========================================

newNoteButton.addEventListener(
    "click",
    () => {

        editingNoteId = null;

        titleInput.value = "";

        contentInput.value = "";

        saveButton.textContent =
            "Save Note";

        openEditor();
    }
);


// ==========================================
// SAVE BUTTON
// ==========================================

saveButton.addEventListener(
    "click",
    () => {

        if (editingNoteId === null) {

            createNote();

        } else {

            updateNote();

        }
    }
);


// ==========================================
// CANCEL BUTTON
// ==========================================

cancelButton.addEventListener(
    "click",
    () => {

        closeEditor();
    }
);


// ==========================================
// SEARCH INPUT
// ==========================================

searchInput.addEventListener(
    "input",
    () => {

        renderNotes();
    }
);


// ==========================================
// EDIT / DELETE EVENTS
// ==========================================

notesContainer.addEventListener(
    "click",
    (event: MouseEvent) => {

        const target =
            event.target as HTMLElement;


        const button =
            target.closest("button")
            as HTMLButtonElement | null;


        if (!button) {

            return;
        }


        const action =
            button.dataset.action;


        const id =
            Number(button.dataset.id);


        if (action === "edit") {

            editNote(id);
        }


        if (action === "delete") {

            deleteNote(id);
        }
    }
);


// ==========================================
// START APPLICATION
// ==========================================

loadNotes();
