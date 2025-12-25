import creditCard from '/images/main/help-business/credit-card.svg'
import clock from '/images/main/help-business/clock.svg'
import money from '/images/main/help-business/money.svg'

import BusinessLines from '../../components/main/BusinessLines'

import '../styles/help-business.css'

const HelpBussiness = () => {
    return (
        <section className="help-business">
            <h2>Как WorkTap помогает бизнесу?</h2>

            <BusinessLines src={ creditCard } body='Оплачивайте с р/с или карты компании'/>
            <BusinessLines src={ clock } body='Экономьте до 87% бюджета на фрилансе'/>
            <BusinessLines src={ money } body='Экономьте до 75% времени на решении фриланс задач'/>

            <h2>WorkTap — быстро, просто и безопасно!</h2>

            <button className='button-ready'>Начать</button>
        </section>
    )
}

export default HelpBussiness