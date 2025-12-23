import Header from "../components/Header"
import Hero from "../modules/main/Hero"
import Workers from "../modules/main/Workers"
import Freelancers from "../modules/main/Freelancers"
import Tasks from "../modules/main/Tasks"

const Main = () => {
    return (
        <>
            <Header />
            <Hero />
            <Workers />
            <Freelancers />
            <Tasks />
        </>
    )
}

export default Main