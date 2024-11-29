import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features } from "./pages/Features";
import { SplashScreen } from "./pages/SplashScreen";
import { Welcome } from "./pages/Welcome";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { Login } from "./pages/auth/Login";
import { Verify } from "./pages/auth/Verify";
import { Role } from "./pages/onboarding/Role";
import { Gender } from "./pages/onboarding/Gender";
import { DateOfBirth } from "./pages/onboarding/DateOfBirth";
import { Address } from "./pages/onboarding/Address";
import { Measurements } from "./pages/onboarding/Measurements";
import { Dashboard } from './pages/app/Dashboard';
import { JobRequests } from './pages/app/JobRequests';
import { JobRequestDetails } from "./pages/app/JobRequestDetails";
import { MyJobs } from './pages/app/MyJobs';
import { Account } from './pages/app/Account';
import { SetWorkRates } from './pages/app/SetWorkRates';
import { WithdrawalBank } from './pages/app/WithdrawalBank';
import { CompletedJobDetails } from './pages/app/CompletedJobDetails';
import { UpcomingJobDetails } from "./pages/app/UpcomingJobDetails";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/features" element={<Features />} />
          <Route path="/app/welcome" element={<Welcome />} />
          <Route path="/auth/create" element={<CreateAccount />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/onboarding/role" element={<Role />} />
          <Route path="/onboarding/gender" element={<Gender />} />
          <Route path="/onboarding/dob" element={<DateOfBirth />} />
          <Route path="/onboarding/address" element={<Address />} />
          <Route path="/onboarding/measurements" element={<Measurements />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/job-requests" element={<JobRequests />} />
          <Route path="/app/job-requests/:id" element={<JobRequestDetails />} />
          <Route path="/app/my-jobs" element={<MyJobs />} />
          <Route path="/app/account" element={<Account />} />
          <Route path="/app/rates" element={<SetWorkRates />} />
          <Route path="/app/bank" element={<WithdrawalBank />} />
          <Route path="/app/jobs/:id/completed" element={<CompletedJobDetails />} />
          <Route path="/app/jobs/:id/upcoming" element={<UpcomingJobDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
