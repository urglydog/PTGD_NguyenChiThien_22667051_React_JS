import '../Statistic/Statistic.css'
function Statistic({ label, img, data, percent, className }) {
    return (
        <>
            <div className={`statistic ${className}`}>
                <span className="label">{label}</span>
                <h3 className="data">{data}</h3>
                <div className="percent">
                    <span className="percent_icon">{percent}% </span>
                    <p className="">period of change</p>
                </div>
                <img className="img" src={img} alt="" />
            </div>
        </>
    )
}

export default Statistic;