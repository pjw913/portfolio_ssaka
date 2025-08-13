import { Link } from "react-router-dom";

function Collection(){
    return(
        <section className="collection">
            <div>
            <Link to="/"><img src="/image/collection1.png" alt="국가대표 컬렉션" /></Link>
            <Link to="/"><img src="/image/collection2.png" alt="팀 컬렉션" /></Link>
            </div>
        </section>
    )
}

export default Collection;