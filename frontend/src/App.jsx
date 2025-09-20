
//-----------------------------------------------------------------MAIN FILE-----------------------


// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Toaster, toast } from "react-hot-toast";

import "./App.css";
import Discription from "./components/Discription";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Analyzer from "./components/Analyzer";
import MultiReportingPage from "./features/multi-reporting/MultiReportingPage";
import ChatBot from "./components/ChatBot";
import ChatBox from "./components/ChatBox";
import BotLayout from "./components/BotLayout";
import Pricing from "./pages/Pricing";
import Diagnoscan from "./components/Diagnoscan";
import AnalyticsPage from "./pages/Analytics/index.jsx";
import Contact from "./components/Contact.jsx";
import adminVideo from "././assets/admin.mp4";
import BlurNavbar from "./components/BlurNavbar.jsx";
import AllInOne from "./components/AllInOne.jsx";
import IntelligentClauseAnalysis from "./components/IntelligentClauseAnalysis.jsx";
import Benefits from "./components/Benefits.jsx";
import SchemeForm from "./components/SchemeForm.jsx";

import HoverToSpeech from "./components/HoverToSpeech";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// ---- Admin Guard using sessionStorage ----
function AdminGuard({ children }) {
  const ok = sessionStorage.getItem("adminLoggedIn") === "1";
  return ok ? children : <Navigate to="/admin/login" replace />;
}

// ---- Simple Admin Login page using toast & inline form ----
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show loading toast, then validate creds
    const id = toast.loading("Checking credentials...");
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        sessionStorage.setItem("adminLoggedIn", "1");
        toast.success("Logged in as admin", { id });
        navigate("/admin", { replace: true });
      } else {
        toast.error("Invalid admin credentials", { id });
      }
    }, 600);
  };

 return (
    <div className="relative min-h-[70vh] w-full flex items-center justify-center px-4 py-30">
      {/* Background video */}
      <video
        className="fixed inset-0 w-screen h-screen object-cover -z-9"
        src={adminVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Optional dark overlay to improve contrast */}
      <div className="fixed inset-0 bg-black/30 -z-10" />

      {/* Content wrapper for layout shadow if desired */}
      <div
        className="w-full flex items-center justify-center"
        
      >
        {/* Glassmorphic form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl p-6 space-y-4 border-2 border-white bg-white/10 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Admin Login
          </h2>

          <div className="space-y-1">
            <label className="block mb-1 font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl px-4 py-2 border border-white bg-white/10 text-blue-900 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            />
          </div>

          <div className="space-y-1">
            <label className="block mb-1 font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl px-4 py-2 border border-white bg-white/10 text-blue-900 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 px-4 py-2 rounded-xl font-semibold cursor-pointer text-white bg-black/80 hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-white/30"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (

    <ClerkProvider publishableKey={clerkPubKey}>
      <>
      {/** */}
      <HoverToSpeech/>
      <HoverToSpeech />
        <Toaster />
        <Navbar />
        <Routes >
          {/* Public Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Discription />
                <Services />
                <AllInOne/>
                <IntelligentClauseAnalysis/>
                <Benefits/>
                
              </>
            }
          />

          {/* Public Tools */}
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/multi-reporting" element={<MultiReportingPage />} />

          {/* Bot routes with sidebar layout */}
          <Route
            path="/insureIQ"
            element={
              <BotLayout>
                <ChatBot />
              </BotLayout>
            }
          />
          <Route
            path="/mediGuide"
            element={
              <BotLayout>
                <ChatBox />
              </BotLayout>
            }
          />
          <Route
            path="/diagnoScan"
            element={
              <BotLayout>
                <Diagnoscan />
                
              </BotLayout>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schemagovt" element={<SchemeForm/>}/>
          {/* Pricing protected by Clerk */}
          <Route
            path="/pricing"
            element={
              <>
                <SignedIn>
                  <Pricing />
                </SignedIn>
                <SignedOut>
                  <div className="flex flex-col items-center justify-center h-[60vh]">
                    <SignInButton mode="modal">
                      <button className="p-3 bg-[#f5f5f5] text-black rounded">
                        Please Login to view Pricing
                      </button>
                    </SignInButton>
                  </div>
                </SignedOut>
              </>
            }
          />

          {/* Admin area guarded by sessionStorage */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AnalyticsPage />
              </AdminGuard>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BlurNavbar/>
      </>
    </ClerkProvider>

  );
}

export default App;










































// import { useState } from 'react';
// import SchemeForm from './components/SchemeForm';
// import SchemeList from './components/SchemeList';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       {!isLoggedIn ? (
//         <form onSubmit={handleLogin}>
//           <h1>Admin Login</h1>
//           <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <>
//           <h1>Govt Scheme Admin Panel</h1>
//           <SchemeForm />
//           <hr />
//           <SchemeList />
//         </>
//       )}
//     </div>
//   );
// }
