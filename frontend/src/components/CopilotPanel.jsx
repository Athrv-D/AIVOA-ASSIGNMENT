import { useSelector } from "react-redux";
import { FaRobot, FaExclamationTriangle, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import "../styles/copilot.css";

export default function CopilotPanel() {

    const complaint = useSelector(
        state => state.complaint.data
    );

    if (!complaint) return null;
    const risk = (complaint.ai_risk || "").toLowerCase();

const recommendations = {
    high: [
        "Quarantine affected product batch immediately.",
        "Escalate complaint to Quality Head.",
        "Initiate CAPA immediately.",
        "Notify Manufacturing Team."
    ],

    medium: [
        "Verify affected product batch.",
        "Investigate possible root cause.",
        "Forward complaint to QA Team.",
        "Monitor similar complaints."
    ],

    low: [
        "Record complaint in QMS.",
        "Monitor future complaint trends.",
        "No immediate CAPA required.",
        "Close complaint after verification."
    ]
};

    return (

        <div className="copilot-panel">

            <div className="copilot-header">

                <FaRobot className="copilot-icon"/>

                <div>
                    <h2>AI Copilot</h2>
                    <p>AI-powered complaint analysis</p>
                </div>

            </div>

 <div className="copilot-card">

    <h3>

        <FaClipboardCheck/>

        Complaint Summary

    </h3>

    <div className="summary-box">

        <p>

            {complaint.ai_summary || "No AI summary available."}

        </p>

    </div>

</div>

<div className="copilot-card">

    <h3>

        <FaExclamationTriangle/>

        Risk Assessment

    </h3>

    <div className="risk-section">

        <span
            className={`risk-badge ${(complaint.ai_risk || "").toLowerCase()}`}
        >
            {complaint.ai_risk || "Unknown"}
        </span>

        <div className="risk-info">

            <p>

                <strong>Priority:</strong>{" "}

                {complaint.ai_risk === "High"
                    ? "Immediate Attention"
                    : complaint.ai_risk === "Medium"
                    ? "Normal Priority"
                    : "Low Priority"}

            </p>

        </div>

    </div>

</div>

          <div className="copilot-card">

    <h3>

        <MdOutlineTipsAndUpdates/>

        Recommendation

    </h3>

    <ul>

        {(recommendations[risk] || recommendations.low).map((item, index) => (

            <li key={index}>
                {item}
            </li>

        ))}

    </ul>

</div>

        </div>

    );

}