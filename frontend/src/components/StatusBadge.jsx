import "../styles/complaint.css";

export default function StatusBadge({ status }){

    return(

        <span className="status-badge">

            {status || "Pending Triage"}

        </span>

    )

}