import { Link } from "@mui/material"

function Card({image, alt, heading, paragraph}) {
    return (
        <div className="Card">
            <div className="icon">
                <img src={image} alt={alt}/>
            </div>
            <div className="card-content">
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="Link">
                <Link href="/">Learn More</Link>
            </div>
        </div>
    )
}

export default Card