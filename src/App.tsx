import "./App.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import HomePage from "./components/Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./components/Pages/FindJobsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FindTalentPage from "./components/Pages/FindTalentPage";
import TalentProfilePage from "./components/Pages/TalentProfile";
import PostJobPage from "./components/Pages/PostJobPage";
import "@mantine/tiptap/styles.css";
import JobDescPage from "./components/Pages/JobDescPage";
import ApplyJobPage from "./components/Pages/ApplyJobPage";
import CompanyPage from "./components/Pages/CompanyPage";
import PostedJobPage from "./components/Pages/PostedJobPage";
import SignUpPage from "./components/Pages/SignUpPage";

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins,sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,

    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="xs" mx="md" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalentPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
