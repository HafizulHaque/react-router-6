import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";

// layouts 
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayouts from "./layouts/CareersLayout";

// components 
import About from "./components/About";
import Home from "./components/Home";
import Contact, { contactAction } from "./components/Contact";
import Faq from "./components/Faq";
import Page404 from "./components/Page404";
import Careers, { careersLoader } from "./components/Careers";
import CareerDetails, { careerDetailsLoader } from "./components/CareerDetails";
import CareersError from "./components/CareersError";
import CareerError from "./components/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>
      <Route 
        path="careers" 
        element={<CareersLayouts/>}
        errorElement={<CareersError/>}>
        <Route 
          index 
          element={<Careers/>} 
          loader={careersLoader}/>
        <Route
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
          errorElement={<CareerError/>}/>
      </Route>
      <Route path="*" element={<Page404/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
