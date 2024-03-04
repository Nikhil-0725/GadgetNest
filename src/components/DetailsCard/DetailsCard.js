import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/ProductServices";


let DetailsCard = () => {

    const { id } = useParams();

    const [prod, setProd] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((result) => {
                setProd(result.data);
            })
            .catch((err) => {
                setErr(err.message);
            })

    }, [])

    return (
        <div style={{paddingTop:"100px"}}>
            {
                err &&
                <h1>{err}</h1>
            }

            {
                prod &&

                <div className={style.detailsCard}>

                    {/* left container */}

                    <div className={style.left}>
                        <img src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={style.previewImg} />
                    </div>

                    {/* right container */}
                    <div className={style.right}>
                        <h1 className={style.heading}>{prod.productName}</h1>
                        <h2 className={style.heading2}>{prod.productBrand}</h2>
                        <h3 className={style.value}>Price: Rs<span className={style.Rs}> {prod.price}</span></h3>
                        <h2 className={style.desc}>Description</h2>
                        <p className={style.para}>{prod.description}</p>
                        <h2 className={style.prev}>Product Preview</h2>
                        <div className={style.smallImg}>
                            <img src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={`${style.imgSmall} ${style.active}`} />
                            <img src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={style.imgSmall} />
                            <img src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={style.imgSmall} />
                            <img src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={style.imgSmall} />
                        </div>
                        <div className={style.btn}>
                            <button type="button" className={style.cartBtn}>Add to Cart</button>
                            <button type="button" className={style.orderBtn}>Buy Now</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailsCard;