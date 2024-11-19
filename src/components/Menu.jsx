export default function Menu(props) {
    const {countgems,setcountgems,checkwin} = props;

    //!click light icon

    const clickLight = () =>{
        setcountgems(prev => {
            if (prev >= 10) {
                return(prev - 10);
            }
            else return(prev);
        });
    }

    //!

    return(
        <section className="menu">
            <div className="boxmenu">
                <div>
                    <i className="fa-solid fa-gem"></i>
                    <p>{countgems}</p>
                </div>
                <div>
                    <i onClick={() => clickLight()} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} className="fa-solid fa-lightbulb"></i>
                    <p>10</p>
                </div>
            </div>
        </section>
    );
}