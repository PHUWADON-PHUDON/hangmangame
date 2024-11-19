import { useEffect,useRef } from "react";

export default function Console(props) {
    const {category,hidevalue,getLetter,checkwin,nextandlose} = props;
    const refp = useRef(null);
    const refp2 = useRef(null);
    const refp3 = useRef(null);

    //!click btn letter

    const clickBtn = (event) => {
        getLetter(event.target.innerHTML);
        event.target.style.color = "red";
        event.target.style.pointerEvents = "none";
    }

    //!

    //!reset style btn letter when game over

    useEffect(() => {
        if (hidevalue != "") {
            for (const e of refp.current.children) {
                e.style.color = "#000";
                e.style.pointerEvents = "auto";
            }
            for (const e of refp2.current.children) {
                e.style.color = "#000";
                e.style.pointerEvents = "auto";
            }
            for (const e of refp3.current.children) {
                e.style.color = "#000";
                e.style.pointerEvents = "auto";
            }
        }
    },[nextandlose]);

    //!

    useEffect(() => {
        for (let i = 0 ; i < hidevalue.length ; i++) {
            for (let j = 0 ; j < refp.current.children.length ; j++) {
                if (hidevalue[i].toLowerCase() == refp.current.children[j].innerHTML.toLowerCase()) {
                    refp.current.children[j].style.color = "red";
                    refp.current.children[j].style.pointerEvents = "none";
                }
            }
            for (let j = 0 ; j < refp2.current.children.length ; j++) {
                if (hidevalue[i].toLowerCase() == refp2.current.children[j].innerHTML.toLowerCase()) {
                    refp2.current.children[j].style.color = "red";
                    refp2.current.children[j].style.pointerEvents = "none";
                }
            }
            for (let j = 0 ; j < refp3.current.children.length ; j++) {
                if (hidevalue[i].toLowerCase() == refp3.current.children[j].innerHTML.toLowerCase()) {
                    refp3.current.children[j].style.color = "red";
                    refp3.current.children[j].style.pointerEvents = "none";
                }
            }
        }
    },[hidevalue]);

    return(
        <section className="console">
            <div className="showinput">
                <h2>{category}</h2>
                <div className="showletter">
                {hidevalue.map((e, key) => (
                    <span key={key}>{e}</span>
                ))}
                </div>
            </div>

            <div className="letterbox">
                <div ref={refp}>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >q</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >w</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >e</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >r</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >t</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >y</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >u</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >i</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >o</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >p</p>
                </div>
                <div ref={refp2}>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >a</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >s</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >d</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >f</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >g</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >h</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >j</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >k</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >l</p>
                </div>
                <div ref={refp3}>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >z</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >x</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >c</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >v</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >b</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >n</p>
                    <p onClick={(e) => clickBtn(e)} style={checkwin == true || checkwin == false ? {pointerEvents:"none"}:{}} >m</p>
                </div>
            </div>
        </section>
    );
}