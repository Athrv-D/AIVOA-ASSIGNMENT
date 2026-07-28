import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComplaint, setLoading, setError } from "../redux/complaintSlice";

import { FaCloudUploadAlt, FaFilePdf, FaCheckCircle } from "react-icons/fa";
import api from "../services/api";
import "../styles/upload.css";

export default function UploadPanel() {

    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    const loading = useSelector(
        state => state.complaint.loading
    );

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        try {

            dispatch(setLoading(true));
            setSuccess(false);

            const uploadData = new FormData();
            uploadData.append("file", file);

            const response = await api.post(
                "/complaints/upload",
                uploadData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            dispatch(setComplaint(response.data));

            setSuccess(true);

        } catch (err) {

            console.error(err);

            dispatch(setError("Failed to analyze complaint."));

            alert("Failed to analyze complaint.");

        }

    };

    return (

        <form
            className="upload-panel"
            onSubmit={handleSubmit}
        >

            <div className="upload-header">

                <FaCloudUploadAlt className="upload-icon" />

                <div>

                    <h2>Upload Complaint Document</h2>

                    <p>
                        Upload a pharmaceutical complaint PDF for AI analysis.
                    </p>

                </div>

            </div>

            <label className="upload-box">

                <input
                    type="file"
                    accept=".pdf"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <FaFilePdf className="pdf-icon" />

                <h3>Drag & Drop PDF</h3>

                <p>or click to browse</p>

                {file && (

                    <div className="selected-file">

                        {file.name}

                    </div>

                )}

            </label>

            <button
                className="upload-btn"
                disabled={loading}
                type="submit"
            >

                {
                    loading
                        ? "Analyzing Complaint..."
                        : "Analyze Complaint"
                }

            </button>

            {

                success && (

                    <div className="success-banner">

                        <FaCheckCircle />

                        <span>

                            Complaint analyzed successfully.

                        </span>

                    </div>

                )

            }

        </form>

    );

}