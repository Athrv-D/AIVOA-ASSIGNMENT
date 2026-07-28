import "../styles/complaint.css";

export default function DisplayField({

    label,

    value,

    fullWidth

}){

    return(

        <div className={`display-field ${fullWidth ? "full-width" : ""}`}>

            <span className="field-label">

                {label}

            </span>

            <p className="field-value">

                {value || "-"}

            </p>

        </div>

    )

}