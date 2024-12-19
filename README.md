

```markdown
# FAQs Application

This is a simple React-based application that allows users to add, display, and delete frequently asked questions (FAQs) along with their answers. It utilizes React Bootstrap for styling and local storage for data persistence. Users can add new questions and answers, view the list, and delete items either individually or all at once.

## Features
- Add new questions and answers.
- View the list of saved questions and answers.
- Delete individual questions and answers.
- Clear all saved questions and answers at once.
- Data is stored in the browser's local storage, so it persists across page reloads.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components as React components for styling.
- **LocalStorage**: Used to persist data in the browser.
- **React Toastify**: Used for displaying notifications when actions are performed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kerlos-alfy/Questions-And-Answers.git
   cd Questions-And-Answers
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to view the application.

## How to Use

- **Add a Question**: Enter the question in the first input field and the answer in the second input field, then click "اضافة".
- **Delete a Question**: Click the "مسح" button next to any question to remove it.
- **Clear All**: If there are any items saved in local storage, you can click "مسح الكل" to remove all questions and answers.

## File Structure

```
.
├── src/
│   ├── components/
│   │   ├── FormInput.js      # Component for adding new questions and answers
│   │   └── QAList.js         # Component for displaying and deleting questions
│   ├── data.js               # Sample data for questions
│   ├── App.js                # Main component that handles state and rendering
│   ├── App.css               # Custom styles
│   └── index.js              # Entry point for the app
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Bootstrap](https://react-bootstrap.github.io/) - For the UI components.
- [React Toastify](https://fkhadra.github.io/react-toastify/) - For notifications.
