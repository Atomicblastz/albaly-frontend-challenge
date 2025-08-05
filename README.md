# Albaly Insights Dashboard Coding Challenge
---

## Setup Instructions

### 1. Clone the Repository
 
- Run git clone https://github.com/...
  
- cd to your local directory

### 2. Install Dependencies

- Run "npm install" or "yarn install"

### 3. Start the Development Server

- Run "npm run dev"

## Project Description
The Albaly Insights Dashboard is a modern and user-friendly analytics dashboard built for developers and businesses. It's designed to help teams quickly understand their product sales performances, trends in current sales, customer drop-off in a monthly basis, and conversion funnel rate through clear, interactive visuals and clean UI components.

For usability and attention to details, I implemented a TrendBadge.tsx component that represents performance changes using color-coded arrows and background tags which there are 3 total different colors; green for positive, red for negative, and yellow for tiny or slight shifts. Additionally, this component is reusable so I can make this as a central and universal component and reuse it at any other components or pages.
Furthermore, if no profile image is present, the app shows a placeholder avatar using the initials character of the user's name with a randomly assigned background color, similar to what services like Google or Youtube. For examples; A man named Soin Yin, if he hasn't uploaded his profile image yet, the system would bring his first character from his first name and last name and put together to become "SY" (Soin Yin).
Most of the components are designed to be reusable and easy to extend, making the project ideal as a foundation for more complex dashboards or admin panels.

## Features
- Fully responsive layout
  
- Interactive data visualizations using Recharts
   
- Modular and reusable components

- Conditional color logic for trends and performance

- Avatar fallback system mimicking Google and Youtube initial

- Imported icons and additional stylings from Lucide React and TailwindCSS

## Project Assumptions
I made a few assumptions to stay focus on the scope and the implementation clean:

1. All data like KPI status, charts, activities window, etc. is being mocked up through the route API responses in frontend. No real backend or database connection is implemented for this version.

2. The dashboard is designed for display purposes only and doesn't include authentication or multi-user support. So I assume that only one single user can interact with the dashboard.

3. I have implemented the UI and layout according to the requirements so not only I designed for desktop but it is also mobile-friendly too, but the main design and spacing choices are optimized for desktop and tablet screen sizes.

4. I've also noticed that many UI components are lightweight by using Tailwind CSS and avoided any heavy UI libraries, so this application might prioritize on performance and readability.

## Author
Developed by Atomicblastz
📫 Reach me at: badgest03@gmail.com or via GitHub Issues
