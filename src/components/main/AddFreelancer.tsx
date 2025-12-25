import starFill from '/images/main/freelancer/star-fill.svg'
import starNotFill from '/images/main/freelancer/star-fill-none.svg'

import '../styles/main/freelancers.css'

const AddFreelancer = (props: {src: string, name: string, work: string, projects: string}) => {
    return (
        <article>
            <section className='addFreelancer'>
                <section className='addFreelancer-body'>
                    <img className='freelancer-image' src={props.src} alt="" />

                    <section className='freelancer-info'>
                        <h3 className='freelancer-name'>{props.name}</h3>
                        <h3 className='freelancer-work'>{props.work}</h3>
                        <p className='freelancer-projects'>Выполнено проектов: {props.projects}</p>
                        <div className='freelancer-rating'>
                            <img src={ starFill } alt="" />
                            <img src={ starFill } alt="" />
                            <img src={ starFill } alt="" />
                            <img src={ starFill } alt="" />
                            <img src={ starNotFill } alt="" />
                        </div>
                    </section>
                </section>

                <button className='button-message-freelancer'>Написать</button>
            </section>
        </article>
    )
}

export default AddFreelancer