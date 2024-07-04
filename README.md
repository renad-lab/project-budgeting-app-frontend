# Project Budgeting App Frontend

This project is a frontend application for managing and visualizing financial transactions. It is built with React and various libraries to provide an interactive user interface for tracking transactions, displaying charts, and more.

## Features

- Display a list of transactions with details such as date, description, amount, etc.
- View detailed information about individual transactions.
- Add, edit, and delete transactions.
- Visualize transaction data using charts.
- Styled using Material-UI components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/renad-lab/project-budgeting-app-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd project-budgeting-app-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Install Material-UI:

   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Visit the home page to see the list of transactions and charts.
- Click on any transaction to view its details, edit, or delete it.
- Add new transactions through the provided form.

## Project Structure

- `src/Components/Home/Home.jsx`: The home page of the application, displaying transactions and charts.
- `src/Components/TransactionsTable/TransactionsTable.jsx`: Component for displaying the table of transactions.
- `src/Components/TransactionChart/TransactionChart.jsx`: Component for displaying transaction charts.
- `src/Components/Show/Show.jsx`: Component for displaying detailed information about a transaction.

## Deployment

The project is deployed on Netlify. You can access it [here](https://tangerine-bonbon-e696bb.netlify.app/transactions).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [React Table](https://react-table.tanstack.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

---

### Screenshots

#### Home Page

![Home Page](./screenshots/home.png)

#### Transactions Table

![Transactions Table](./screenshots/transactions-table.png)

#### Transaction Details

![Transaction Details](./screenshots/transaction-details.png)
