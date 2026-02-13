
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { lazy,Suspense } from "react";
const Dash = lazy(() => import("./pages/Dashboard"));
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
      </Suspense>
    </>
  );
}
