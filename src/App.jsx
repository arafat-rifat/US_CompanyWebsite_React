import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/LayOut/RootLayout";
import About from "./pages/About";
import CareerPage from "./pages/CareerPage";
import AboutLayout from "./components/LayOut/AboutLayout";
import CareerLayout from "./components/LayOut/CareerLayout";
import TermsAndConditions from "./pages/TermsAndConditions";
import TermsAndConditionLayout from "./components/LayOut/TermsAndConditionLayout";
import Project from "./pages/Project";
import ProjectLayout from "./components/LayOut/ProjectLayout";
import SubmittedFormsPage from "./pages/SubmittedFormsPage"; // Import the new page
import ContactLayout from "./components/LayOut/ContactLayout";
import ContactUsFrom from "./pages/ContactUsFrom";
import CaseStudyLayout from "./components/LayOut/CaseStudyLayout";
import CaseStudy from "./pages/CaseStudy";
import ServicesLayout from "./components/LayOut/ServicesLayout";
import Services from "./pages/Services";
import PrivacyAndPolicyLayout from "./components/LayOut/PrivacyAndPolicyLayout";
import PrivacyAndPolicyPage from "./pages/PrivacyAndPolicyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout
        title1="We empower clients with reliable tech solutions, including web development and IT consulting,"
        title2="focusing on quality and client satisfaction for successful digital transformation."
      />
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <AboutLayout
        title1="We're really good at making awesome mobile apps,
          websites, logos, and ads."
        title2="We help businesses get better
         and bigger by creating cool stuff that people love and
         solving tricky problems"
        title="/Mission & Vision"
        src="/src/assets/missionAndVision.png"
      />
    ),
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/services",
    element: (
      <ServicesLayout
        title1="We’re a team that works hard on exciting projects and builds strong relationships"
        title2="that last long after the work is done."
      />
    ),
    children: [
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/career",
    element: (
      <CareerLayout
        title1="We are an equal opportunity employer. All qualified applicants will be considered regardless of personal characteristics."
        title2={
          <>
            <a
              href="https://bluetelecast-web-dev.vercel.app/static/pdf/BluetelecastEqualEmploymentOpportunity.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about our policy
            </a>
          </>
        }
      />
    ),
    children: [
      {
        path: "/career",
        element: <CareerPage />,
      },
    ],
  },
  {
    path: "/terms-and-conditions",
    element: (
      <TermsAndConditionLayout
        title1="Join 500+ companies using Bluetelecast to improve"
        title2="their tech and let’s work together!"
      />
    ),
    children: [
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/privacy-and-policy",
    element: (
      <PrivacyAndPolicyLayout
        title1="Join the Bluetelecast community. Together, we improve technology and succeed."
        title2="Let’s boost your journey!"
      />
    ),
    children: [
      {
        path: "/privacy-and-policy",
        element: <PrivacyAndPolicyPage />,
      },
    ],
  },
  {
    path: "/project",
    element: (
      <ProjectLayout
        title1="Our Projects showcases our work in software, web development, IT consulting, and custom design."
        title2="Explore to see how we bring ideas to life."
      />
    ),
    children: [
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
  {
    path: "/submitted-forms",
    element: <RootLayout />, // Use a layout if needed, or a different one
    children: [
      {
        path: "/submitted-forms",
        element: <SubmittedFormsPage />,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <ContactLayout
        title1="We’re just a message away! Reach out"
        title2="and let’s explore how we can assist you."
      />
    ), // Use a layout if needed, or a different one
    children: [
      {
        path: "/contact",
        element: <ContactUsFrom />,
      },
    ],
  },

  {
    path: "/caseStudy",
    element: <Navigate to="/caseStudy/1" />, // Redirect to default projectId (1 in this case)
  },

  {
    path: "/caseStudy/:projectId", // Daynamic Route
    element: (
      <CaseStudyLayout
        title1="Our Cases highlights how we’ve helped clients with software,web,"
        title2="IT consulting, and custom design. Check out real projects to see what we can do."
      />
    ),
    children: [
      {
        path: "/caseStudy/:projectId",
        element: <CaseStudy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
