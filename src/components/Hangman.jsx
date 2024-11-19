export default function Hangman(props) {
    const {countani,countlevel} = props;

    return(
        <section className="hangman">
            <div className="hangmanbox">
                <h2>Level {countlevel}</h2>
                <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="386.495" x2="320" y2="386.495" stroke="black" strokeWidth="5"/>
                    <line opacity="0.9" x1="57.5" y1="390" x2="57.5" stroke="black" strokeWidth="5"/>
                    <line x1="40" y1="19.5" x2="220" y2="19.5" stroke="black" strokeWidth="5"/>
                    <line x1="62.2714" y1="311.044" x2="22.2714" y2="398.044" stroke="black" strokeWidth="5"/>
                    <line x1="97.7262" y1="398.045" x2="57.7285" y2="311.044" stroke="black" strokeWidth="5"/>

                    <line className={countani >= 1 ? "rope addani_rope":"rope"} x1="167.5" y1="22" x2="167.5" y2="61" stroke="black" strokeWidth="5"/>
                    <circle className={countani >= 2 ? "head addani_head":"head"} cx="168" cy="83" r="20.5" stroke="black" strokeWidth="5"/>
                    <line className={countani >= 3 ? "body addani_body":"body"} x1="166.926" y1="100.795" x2="168.233" y2="205.329" stroke="black" strokeWidth="5"/>
                    <line className={countani >= 4 ? "armright addani_armright":"armright"} x1="168.564" y1="115.832" x2="219.524" y2="155.032" stroke="black" strokeWidth="5"/>
                    <line className={countani >= 5 ? "armleft addani_armleft":"armleft"} x1="118.476" y1="155.033" x2="169.435" y2="115.832" stroke="black" strokeWidth="5"/>
                    <line className={countani >= 6 ? "legleft addani_legleft":"legleft"} x1="168.046" y1="199.776" x2="137.993" y2="272.95" stroke="black" strokeWidth="5"/>
                    <line className={countani >= 7 ? "legright addani_legright":"legright"} x1="198.703" y1="272.949" x2="168.647" y2="199.777" stroke="black" strokeWidth="5"/>
                </svg>
            </div>
        </section>
    );
}