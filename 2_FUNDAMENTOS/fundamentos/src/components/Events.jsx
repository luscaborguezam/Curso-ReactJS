const Events = () => {

    const handlerClick = (e) => {
        console.log("Evento onClick")
    }

    return(
        <div>
            <div>
                <button onClick={handlerClick}>OnCLick</button>
            </div>
        </div>
    )
}

export default Events