import style from "./Product.module.css"

export default function Product(){
    return (
        <div className={style.product}>
            <img src="" alt="" />
            <h4>name</h4>
            <p>Ref :referance</p>
            <p>
                <del>200 Dh</del>,<strong>119 Dh</strong>
            </p>

        </div>
    )
}