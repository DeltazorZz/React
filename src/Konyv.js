import './Konyv.css';


function Konyv(props){
    function kosarba(){
        console.log(props.konyvObj);
        props.kosarkezelesfv(props.konyvObj);
    }

    return(
        <div className="konyv">
            <h3>Cím: {props.konyvObj.cim} </h3>
            <p>Szerző: {props.konyvObj.szerzo} </p>
            <p>Ár: {props.konyvObj.ar}</p>
            <button onClick={kosarba}></button>
        </div>
    );
}
export default Konyv;