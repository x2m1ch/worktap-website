import Headings from '../../components/Headings'

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
                
            </section>
        </section>
    )
}

export default Projects