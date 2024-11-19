export default function Win(props) {
    const {checkwin,countani,setnextandlose} = props;

    //!click btn next level and btn restart when game over

    const nextAndLose = (status) => {
        setnextandlose(prev => status);
    }

    //!

    return(
        <>
            {checkwin == true ? 
                <section className="win addscalebox">
                    <div className="boxwin">
                        <h1>Win</h1>
                        <button onClick={() => nextAndLose(true)}>Next Level</button>
                    </div>
                </section>
                :""
            }
            {countani == 7 ? 
                <section className="win addscalebox">
                    <div className="boxwin">
                        <h1>lose</h1>
                        <button onClick={() => nextAndLose(false)}>Restart</button>
                    </div>
                </section>
                :""
            }
        </>
    );
}