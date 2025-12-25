import '../styles/main/business-line.css'

const BusinessLines = (props: {src: string, body: string}) => {
    return (
        <div className="business-line">
            <img src={props.src} alt="" />
            <p>{props.body}</p>
        </div>
    )
}

export default BusinessLines