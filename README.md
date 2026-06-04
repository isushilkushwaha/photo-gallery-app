# Photo Gallery App

A simple React Photo Gallery application built using React, Vite, and Tailwind CSS. The app fetches photos from the Picsum Photos API, displays them in a responsive grid, allows users to search photos by author name, and mark photos as favourites.

Live demo:- https://photo-gallery-app-steel.vercel.app/

## Features

* Fetches 30 photos from Picsum Photos API
* Loading spinner while data is being fetched
* Error handling for failed API requests
* Responsive photo gallery grid

  * Desktop: 4 columns
  * Tablet: 2 columns
  * Mobile: 1 column
* Real-time search by author name
* Favourite photos functionality
* Favourites managed using `useReducer`
* Favourites persisted using `localStorage`
* Custom Hook (`useFetchPhotos`) for API calls
* Performance optimization using `useCallback` and `useMemo`

## Technologies Used

* React
* Vite
* Tailwind CSS
* JavaScript
* React Hooks

## Installation

1. Clone the repository

```bash
git clone <your-repository-url>
```

2. Navigate to the project folder

```bash
cd photo-gallery-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## API Used

Picsum Photos API:

https://picsum.photos/v2/list?limit=30

## Project Structure

```text
src/
├── components/
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── utils/
├── App.jsx
└── main.jsx
```

## Author

Sushil Kushwaha

Frontend Developer | React.js Developer
