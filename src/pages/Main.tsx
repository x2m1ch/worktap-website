import Header from "../components/Header"
import Hero from "../modules/main/Hero"
import Workers from "../modules/main/Workers"
import Freelancers from "../modules/main/Freelancers"
import Tasks from "../modules/main/Tasks"
import HelpBussiness from "../modules/main/HelpBusiness"
import Footer from "../components/Footer"

const Main = () => {
    return (
        <>
            <title>Главная</title>

            <Header />
            <Hero />
            <Workers />
            <Freelancers />
            <Tasks />
            <HelpBussiness />
            <Footer />
        </>
    )
}

export default Main