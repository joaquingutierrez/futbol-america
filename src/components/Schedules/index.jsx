import "./style.css"

const Schedules = ({schedule}) => {

    return (
        <div className="SchedulesContainer">
            <div>
                <h3>DAY 1</h3>
                <p>Airport</p>
                <p>Check In Hotel</p>
                <p>Lunch</p>
                <p>{schedule === "Brazil" ? "Training" : "Free" }</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 2</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Game" : "Training" }</p>
                <p>Lunch</p>
                <p>{schedule === "Brazil" ? "Walking Tour" : "Training" }</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 3</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Training" : "Game" }</p>
                <p>Lunch</p>
                <p>{schedule === "Brazil" ? "Training" : "Walking Tour" }</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 4</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Game" : "Training" }</p>
                <p>Lunch</p>
                <p>{schedule === "Brazil" ? "Tour Corcovado" : "Museum" }</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 5</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Training" : "Game" }</p>
                <p>Lunch</p>
                <p>Training</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 6</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Game" : "Training" }</p>
                <p>Lunch</p>
                <p>Pool</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 7</h3>
                <p>Breakfast</p>
                <p>{schedule === "Brazil" ? "Beach Training" : "Game" }</p>
                <p>Lunch</p>
                <p>1st Division Game</p>
                <p>Dinner</p>
            </div>
            <div>
                <h3>DAY 8</h3>
                <p>Breakfast</p>
                <p>Check Out Hotel</p>
                <p>Lunch</p>
                <p>{schedule === "Brazil" ? "Tour Rio de Janeiro" : "Tour Buenos Aires" }</p>
                <p>Airport</p>
            </div>
        </div>
    )
}

export default Schedules