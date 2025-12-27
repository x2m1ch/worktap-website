import image from '/images/market/projects/image.png'
import starFill from '/images/market/projects/star-fill.svg'
import starNoneFill from '/images/market/projects/star-fill-none.svg'

import '../styles/market/work.css'

const AddWork = (props: {clientName: string, projects: number, clientRating: number, clientPrice: number, clientTime: string, clientOffers: number}) => {
    return (
        <article className="market-work-card">
            <section className='card-column-one'>
                <h3>Нужно сделать Дизайн сайта по тематике авто</h3>

                <section className='client-info'>
                    <img className='client-image' src={ image } alt="" />

                    <section className='client-info-body'>
                        <h4>{props.clientName}</h4>

                        <p>Размещено проектов на бирже: {props.projects}</p>

                        <section className='client-rating'>
                            <section className='client-rating-stars'>
                                <img src={ starFill } alt="" />
                                <img src={ starFill } alt="" />
                                <img src={ starFill } alt="" />
                                <img src={ starFill } alt="" />
                                <img src={ starNoneFill } alt="" />
                            </section>

                            <p className='client-rating-number'>{props.clientRating} отзывов</p>
                        </section>
                    </section>
                </section>
            </section>

            <section className='card-column-two'>
                <section className='card-market-price'>
                    <p className='market-price-number'>Бюджет: {props.clientPrice} тенге</p>
                    <p className='marker-price-time'>{props.clientTime} назад</p>
                </section>

                <p className='market-offers'>Предложений: {props.clientOffers}</p>
            </section>
        </article>
    )
}

export default AddWork