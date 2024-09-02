# Car Dealer Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

## Overview

The Car Dealer Application allows users to filter vehicles by type and model year, and then view a list of matching vehicles. The application leverages the [VPIC API](https://vpic.nhtsa.dot.gov/api/) to fetch vehicle data.

### Features

- **Filter Vehicles**: Users can select a vehicle type and a model year to filter available vehicles.
- **View Vehicle Models**: After filtering, users are presented with a list of vehicle models that match the selected criteria.
- **Responsive Design**: The application is built with a responsive design to ensure usability across different devices.
- **Error Handling**: Displays error messages if data fetching fails.
- **Built-in Routing**: Uses Next.js' file-based routing to manage navigation between pages.

### Architecture

- **Next.js**: The application is built with Next.js, a React framework that provides server-side rendering, static site generation, and other optimizations.
- **React**: Components are built using React, making the UI dynamic and responsive.
- **React Query**: Used for data fetching and caching to manage the state of asynchronous data.
- **Tailwind CSS**: Provides utility-first CSS for styling the application, making it easy to build responsive and modern UIs.
- **Environment Variables**: API URLs and other configurations are managed using environment variables stored in a `.env.local` file.

## Running the Application

To run the application in development mode, follow these steps:

1. **Clone the repository**:
   - `git clone https://github.com/LuisGHM/cardealerapp.git`
   - `cd cardealerapp`

2. **Install dependencies**:
   - `npm install`
   - or `yarn install`

3. **Create a `.env.local` file** in the root directory and add the necessary environment variables:
   - `NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles`

4. **Run the development server**:
   - `npm run dev`
   - or `yarn dev`

5. **Open the application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Building the Application

To create an optimized production build, follow these steps:

1. **Build the application**:
   - `npm run build`
   - or `yarn build`

2. **Start the production server**:
   - `npm run start`
   - or `yarn start`

3. **View the production build**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.