# User Management System

A simple React application for managing user records with a clean, responsive UI built with Tailwind CSS.
This application is hosted on [Vercel](https://vercel.com) for easy access.

## Features

- ✅ Add new users with name and email information
- 📋 Display users in an alphabetically sorted list
- 🗑️ Delete users from the list
- ✨ Responsive design with Tailwind CSS
- 🔔 Success and error notifications for user feedback

## Live Demo

Visit the live application at: [https://user-management-system.vercel.app](https://user-management-system.vercel.app) (replace with your actual Vercel deployment URL)

## Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd user-list
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. The application should now be running at `http://localhost:5173`

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and responsive design
- **Vercel** - Deployment and hosting platform

## Project Structure

# React + TypeScript + Vite

```markdown
user-list/
├── src/
│ ├── components/
│ │ ├── UserForm.tsx # Form to add new users
│ │ └── UserList.tsx # Component to display users
│ ├── App.tsx # Main application component
│ ├── types.ts # TypeScript type definitions
│ └── ...
├── public/
└── ...
```

## How to use

- Fill in the "Name" and "Email" fields in the form.
- Click "Add user" to add the user to the list.
- The user will appear in the list below, sorted alphabetically by name.
- To delete a user, click the "Delete" button next to their entry.

## Deployment

This project is deployed on Vercel's hosting platform, providing:

- Automatic deployments from your Git repository
- Preview deployments for pull requests
- Custom domain support
- Global CDN for fast loading

To deploy your own version:

1. Fork this repository
2. Create a Vercel account if you don't have one
3. Import your forked repository to Vercel
4. Configure your deployment settings
5. Deploy!

## Future improvements

- User data persistence with local storage or a backend service
- User editing functionality
- Form validation for email format
- Search and filter capabilities for the user list
- Pagination for large user lists
- User avatars or profile pictures

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

Created by Alejandro Perez Duran
