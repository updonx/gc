import { Link } from "react-router-dom";

function Trendingcard(props) {
    console.log(props);
    // console.log(props.id);
    return (
        <>
            <Link to={`/card3?songid=${props.id}`}>
                <div className="trndingcard_container">
                    <div className="img">
                        <div className="img123">
                            <img src={props.img} height={200} width={200} alt="" />
                        </div>
                    </div>
                    <div className="heading">
                        <p>{props.title}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Trendingcard;
