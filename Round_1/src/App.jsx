import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model";

function App() {
    return (
        <main className="bg-black">
            <Navbar></Navbar>
            <Hero></Hero>
            <Highlights></Highlights>
            <Model />
        </main>

    )
}

export default App