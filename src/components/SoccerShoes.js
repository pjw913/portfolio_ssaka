import { Link } from "react-router-dom";

function SoccerShoes(){
    const earth = {
        image:[
            {id:1, src:'/image/soccershoes1.png', alt:'천연 잔디용'},
            {id:2, src:'/image/soccershoes2.png', alt:'인조 잔디용'},
            {id:3, src:'/image/soccershoes3.png', alt:'풋살화'},
            {id:4, src:'/image/soccershoes4.png', alt:'하드그라운드'},
        ],
    }
    return(
        <section className="soccershoes">
            <h2>그라운드별 축구화 보기</h2> 
            <div className="soccershoes-div" >
                {
                    earth.image.map((img)=>(
                        
                        <Link to="/" key={img.id}>
                            <img src={img.src} alt={img.alt} />
                        </Link>
                        
                    ))
                }
            </div>
        </section>
    )
}

export default SoccerShoes;