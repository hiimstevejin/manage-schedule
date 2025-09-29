# Manage Schedule
## An open-source scheduling application built with Next.js that simplifies booking meetings and appointments by integrating directly with your Google Calendar. Create custom events, share a link, and let others book a time that works for them.

## Live Demo: https://manage-schedule.vercel.app/

# ✨ Core Features
### 📅 Create Custom Events: Define event details like name, duration, and description. Set your availability for each event type.

### 🔗 Shareable Booking Links: Generate a unique link for each event type to share with anyone you want to meet with.

### 🤝 Seamless Booking for Invitees: Users visiting your link can see your available time slots and book a meeting in just a few clicks.

### 🔄 Real-Time Google Calendar Integration: Once a time slot is booked, the event is automatically created in your Google Calendar, complete with event details and attendee information. This ensures your availability is always up-to-date and prevents double bookings.

### 😎 Clean & Simple UI: A modern, intuitive interface for both the event creator and the person booking the meeting.

# 🚀 Tech Stack
Framework: Next.js

Language: TypeScript

Authentication: Clerk

Database/ORM: Drizzle ORM with PostgreSQL

Styling: Tailwind CSS & shadcn/ui

API: Google Calendar API

Deployment: Vercel

# 🛠️ Getting Started: Running Locally
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (v18.x or later recommended)

npm or yarn

Installation & Setup
Clone the repository:

git clone
cd <your-repo-name>

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root of the project by copying the example file.

cp .env.example .env

Next, populate the .env file with your credentials. You will need to create a Google Cloud project to get Google Calendar API keys and configure your authentication provider (e.g., Clerk).

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

# 🔑 Environment Variables
You will need to provide the following variables in your .env file for the application to work correctly.

# Database (e.g., from Vercel Postgres or Supabase)
POSTGRES_URL="..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISABLE_KEY="..."
CLERK_SECRET_KEY="..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Google Calendar API
# See [https://developers.google.com/workspace/guides/create-credentials](https://developers.google.com/workspace/guides/create-credentials)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GOOGLE_REDIRECT_URI="http://localhost:3000/api/google/callback"

# Public URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

Note: For production, ensure GOOGLE_REDIRECT_URI and NEXT_PUBLIC_BASE_URL are updated to your production domain.

# 🚀 Deployment
This project is optimized for deployment on Vercel.

Push your code to a GitHub repository.

Click the "Deploy with Vercel" button at the top of this README or import your repository directly in the Vercel dashboard.

Add the required environment variables in the Vercel project settings.

Vercel will automatically build and deploy your application.

# 🤝 Contributing
Contributions are welcome! If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.
