import PropTypes from "prop-types";
import "components/wheather/_card.css";


const Card = ({weekWeather}) => {

    const firstDay = weekWeather[0];
    console.log(firstDay);
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-lg-8 grid-margin stretch-card">
                        <div className="card card-weather">
                            <div className="card-body">
                                <div className="weather-date-location">
                                    <h3>{firstDay.dayName}</h3>
                                    <p className="text-gray"><span className="weather-date">{firstDay.date}</span> <span
                                        className="weather-location">Rabat, Maroc</span></p>
                                </div>
                                <div className="weather-data d-flex">
                                    <div className="mr-auto">
                                        <h4 className="display-3">{firstDay.temperature} <span className="symbol">°</span>C</h4>
                                        <p> {firstDay.atmosphere} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex weakly-weather">
                                    {weekWeather.map((data) => (
                                        <div className="weakly-weather-item" key={data.dayName}>
                                            <p className="mb-0"> {data.dayName} </p> <i className="mdi mdi-weather-cloudy"></i>
                                            <p className="mb-0"> {data.temperature}° </p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



Card.propTypes= {
    weekWeather: PropTypes.arrayOf(PropTypes.shape({
        dayName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
    }))
}

export default  Card;
