import Headings from '../../components/Headings'
import AddWork from '../../components/market/AddWork'

import arrow from '/images/market/projects/arrow.svg'

import '../styles/market/projects.css'

const Projects = () => {
    return (
        <section className="market-projects">
            <section className='market-projects-heading'>
                <h2>65 проектов по дизайну</h2>

                <section className='market-price'>
                    <section className='price-description'>
                        <Headings body='Минимальная цена'/>
                        <p>—</p>
                        <Headings body='Максимальная цена'/>
                    </section>

                    <button className='price-switch'>
                        <p>По возрастанию цены</p>
                        <img src={ arrow } alt="" />
                    </button>
                </section>
            </section>

            <section className='market-projects-body'>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
                <AddWork clientName='Екатерина Иванова' projects={3} clientRating={4} clientPrice={50000} clientTime='4 часа 20 минут' clientOffers={50}/>
            </section>

            <section className='button-download-items'>
                <button className='button-download'>Загрузить ещё</button>
            </section>
        </section>
    )
}

export default Projects