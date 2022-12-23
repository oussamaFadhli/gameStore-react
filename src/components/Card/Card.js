import './Card.css'

const Card = (props) => {
  return (
    <>
      <div className="section-wrapper">
            <div className="section-header">
                <h4>Most Popular</h4>
            </div>
            <div className="most-popular-items">
                <div className="most-popular-item">
                    <div className="card-wrapper">
                        <img className="most-popular-item-image" src={props.image} alt="fortnite poste"/>
                        <div className="most-popular-item-content">
                            <h4 className="most-popular-item-title">{props.title}<br/>
                            <span>{props.category}</span></h4>
                            <ul>
                                <li><span>{props.rates}</span></li>
                                <li><span>{props.downloads}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>

  )
}

export default Card