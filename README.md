Inventory Management App

A modern, responsive inventory management dashboard built with React + TypeScript + Redux Toolkit + Vite.
Designed to track products, view statistics, and manage stock efficiently with a clean UI.

Features

Real-time inventory statistics

Product listing with edit functionality

Mock API integration for development

Modular SCSS styling

Fast build using Vite

State management with Redux Toolkit

API mocking with MSW (Mock Service Worker)

Tech Stack

React + TypeScript

Redux Toolkit

Vite

SCSS

Material UI (theme)

MSW (Mock Service Worker)

Project Structure
src/
 ├── api/            
 ├── components/     
 ├── mocks/          
 ├── scss/           
 ├── store/          
 ├── theme.ts        
 └── main.tsx        

Setup & Run Locally
Clone repo
git clone https://github.com/Technical-06/Inventory-app.git
cd Inventory-app

Install dependencies
npm install

Start dev server
npm run dev


App will run at:

http://localhost:5173

Mock API

The app uses MSW for simulating backend responses:

src/mocks/

Great for frontend development without real backend.

Environment Variables

Create a .env file if required:

VITE_API_URL=your_api_url