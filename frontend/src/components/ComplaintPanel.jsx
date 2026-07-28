import { useSelector } from "react-redux";
import DisplayField from "./DisplayField";
import StatusBadge from "./StatusBadge";
import "../styles/complaint.css";

export default function ComplaintPanel() {

    const complaint = useSelector(
        state => state.complaint.data
    );

    if (!complaint) return null;

    return (

        <div className="complaint-panel">

            <div className="panel-header">

                <h2>Log Customer Complaint</h2>

                <StatusBadge
                    status={complaint.status ==="Open" ? "Registered" :complaint.status ||"Registered"}
                />

            </div>

            <div className="field-grid">

                <DisplayField
                    label="Customer Name"
                    value={complaint.customer_name || "N/A"}
                />

                <DisplayField
                    label="Customer Email"
                    value={complaint.customer_email || complaint.email || "N/A"}
                />

                <DisplayField
                    label="Product Name"
                    value={complaint.product_name || "N/A"}
                />

                <DisplayField
                    label="Batch Number"
                    value={complaint.batch_number || "N/A"}
                />

                <DisplayField
                    label="Complaint Type"
                    value={complaint.complaint_type || "N/A"}
                />

                <DisplayField
                    label="Severity"
                    value={complaint.severity || "N/A"}
                />

            </div>

            <DisplayField
                fullWidth
                label="Complaint Description"
                value={complaint.description || "No description available."}
            />

            <button
                className="convert-btn"
                disabled
            >
                ✓ Logged Successfully
            </button>

        </div>

    );

}