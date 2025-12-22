import '../styles/main/work.css'

const AddWork = (props: {src: string, headingBody: string, cardBody: string }) => {
    return (
        <div className="work-card">
            <section className='work-heading'>
                <img src={props.src} alt="" />
                <h3>{props.headingBody}</h3>
            </section>

            <p className='work-body'>{props.cardBody}</p>
            <button className='view-button'>Посмотреть</button>
        </div>
    )
}

export default AddWork