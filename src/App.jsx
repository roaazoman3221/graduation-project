    import './App.css'
    import { HashRouter, Routes, Route } from "react-router-dom";

    import NavBar from './pages/NavBar/NavBar'
    import Hero from './pages/Hero/Hero'
    import AboutMe from './pages/AboutMe/AboutMe'
    import Education from './pages/Education/Education'
    import TryMe from './pages/TryMe/TryMe'
    import WorkSpace from './pages/WorkSpace/WorkSpace'
    import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
    import Contact from "./pages/Contact/Contact"
    import Footer from "./pages/Footer/Footer"
    import ScrollTop from './pages/ScrollTop/ScrollTop'

    const App = () => {
    return (

        <HashRouter>

        <NavBar />

        <Routes>

            <Route
            path="/"
            element={
                <>
                <Hero />
                <AboutMe />
                <Education />
                <TryMe />
                <WorkSpace />
                <Contact />
                </>
            }
            />

            <Route
            path="/project/:id"
            element={<ProjectDetails />}
            />

        </Routes>

        <Footer />
        <ScrollTop />

        </HashRouter>

    )
    }

    export default App