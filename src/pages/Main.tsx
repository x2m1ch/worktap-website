import Header from "../components/Header"
import Hero from "../modules/main/Hero"
import Workers from "../modules/main/Workers"
import Freelancers from "../modules/main/Freelancers"
import Tasks from "../modules/main/Tasks"
import Footer from "../components/Footer"

const Main = () => {
    return (
        <>
            <Header />
            <Hero />
            <Workers />
            <Freelancers />
            <Tasks />
            <Footer />
        </>
    )
}

export default Main