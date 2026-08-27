# 📝 TypeScript Notes App

A simple and responsive **Notes App built with TypeScript, HTML, and CSS**. The application allows users to create, edit, search, and delete notes while automatically saving them in the browser using **LocalStorage**.

This project is designed to demonstrate fundamental TypeScript concepts and basic frontend application development.

---

## 🚀 Features

* ➕ Create new notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 🔍 Search notes by title or content
* 💾 Automatically save notes using LocalStorage
* 📅 Display the last updated date
* 📱 Responsive design
* 🛡️ Basic HTML escaping for user-entered content

---

## 🛠️ Technologies Used

* **TypeScript** — Application logic and type safety
* **HTML5** — Application structure
* **CSS3** — Styling and responsive design
* **LocalStorage** — Persistent browser storage

---

## 📂 Project Structure

```text
typescript-notes-app/
│
├── index.html
├── style.css
├── package.json
├── tsconfig.json
│
├── src/
│   ├── app.ts
│   └── types.ts
│
└── dist/
    └── app.js
```

### File Description

| File            | Description                                   |
| --------------- | --------------------------------------------- |
| `index.html`    | Main HTML structure                           |
| `style.css`     | Application styling                           |
| `src/app.ts`    | Main TypeScript application logic             |
| `src/types.ts`  | TypeScript interfaces and types               |
| `package.json`  | Project configuration and scripts             |
| `tsconfig.json` | TypeScript compiler configuration             |
| `dist/app.js`   | Compiled JavaScript generated from TypeScript |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/typescript-notes-app.git
```

### 2. Open the project

```bash
cd typescript-notes-app
```

### 3. Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Compile the TypeScript code:

```bash
npm run build
```

This converts:

```text
src/app.ts
     ↓
dist/app.js
```

After compilation, open `index.html` in your browser.

---

## 🔄 Development Mode

To automatically compile TypeScript whenever you make changes:

```bash
npm run watch
```

The TypeScript compiler will watch the project and update `dist/app.js` automatically.

---

## 🧠 TypeScript Concepts Demonstrated

This project demonstrates several important TypeScript concepts:

```text
TypeScript
│
├── Interfaces
│
├── Type annotations
│
├── Union types
│
├── Arrays
│
├── Objects
│
├── Functions
│
├── DOM types
│
├── Type assertions
│
├── Event handling
│
├── Modules
│
└── LocalStorage
```

### Example Interface

```typescript
interface Note {
    id: number;
    title: string;
    content: string;
    updatedAt: string;
}
```

This ensures that every note follows the same structure.

---

## 💾 Data Storage

The application uses the browser's **LocalStorage**.

Example stored data:

```json
[
    {
        "id": 1720000000000,
        "title": "Learn TypeScript",
        "content": "Study interfaces and types.",
        "updatedAt": "8/27/2026, 7:30:00 PM"
    }
]
```

Because the data is stored locally, notes remain available after refreshing or reopening the browser on the same device/browser.

---

## 🔍 Search

The search functionality checks both:

* Note title
* Note content

For example:

```text
Search: TypeScript
```

can find:

```text
Learn TypeScript
TypeScript Functions
TypeScript Project Ideas
```

---

## 🎯 Project Objective

The objective of this project is to build a practical frontend application while learning how **TypeScript adds type safety and structure to JavaScript applications**.

The project also provides hands-on experience with:

* DOM manipulation
* Event listeners
* Browser storage
* CRUD operations
* Application state
* Modular TypeScript code

---

## 🔮 Future Improvements

Possible future features include:

* 🏷️ Note categories
* 🎨 Note colors
* ⭐ Favorite notes
* 📌 Pin notes
* 🌙 Dark mode
* 📅 Note reminders
* 🔐 User authentication
* ☁️ Cloud synchronization
* 📝 Markdown support
* 📎 File attachments
* 🔎 Advanced filtering
* 📱 Progressive Web App support

---

## 📸 Screenshots

Add screenshots of your application here after completing the project.

```text
screenshots/
├── dashboard.png
├── create-note.png
└── search.png
```

Example:

```markdown
![Notes App Dashboard](screenshots/dashboard.png)
```

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push your branch.
6. Create a Pull Request.

---

## 📄 License

This project is open source and available for educational and personal use.

---

## 👨‍💻 Author

**Nagesha G**

Built with ❤️ using **TypeScript, HTML, CSS, and LocalStorage**.

---

⭐ If you found this project useful, consider giving the repository a star!
