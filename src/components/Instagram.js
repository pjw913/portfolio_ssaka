import { Link } from "react-router-dom";

function Instagram(){
    const Instagram = {
        images:[
            {id:1, src:'/image/instagram1.jpg', alt:'NIKE SOCCERSHOES SERIES'},
            {id:2, src:'/image/instagram2.jpg', alt:'STYLE YOUR BARCA'},
            {id:3, src:'/image/instagram3.jpg', alt:'YAMAL & PEDRI'},
            {id:4, src:'/image/instagram4.jpg', alt:'LAMINE YAMAL'},
            {id:5, src:'/image/instagram5.jpg', alt:'SKETCHERS WITH HARRY KANE'},
            {id:6, src:'/image/instagram6.jpg', alt:'NIKE NEW MERCURIAL'},
            {id:7, src:'/image/instagram7.jpg', alt:'KOREA JERSEY'},
            {id:8, src:'/image/instagram8.jpg', alt:'FC BARCELONA'},
            {id:9, src:'/image/instagram9.jpg', alt:'MIZUNO THE RED'},
            {id:10, src:'/image/instagram10.jpg', alt:'HYPERVENOM'},
        ]
    }
    return(
        <section className="instagram">
            <h2>Instagram</h2>
            <h3>@ssaka.com_official</h3>
            <div>
                {
                    Instagram.images.map((img, idx)=>(
                        <div key={idx}>
                        <Link to="/" key={img.id}>
                            <img src={img.src} alt={img.alt} />
                        </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Instagram;