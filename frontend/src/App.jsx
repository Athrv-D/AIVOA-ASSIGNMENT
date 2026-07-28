import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import UploadPanel from "./components/UploadPanel";
import ResultsSection from "./components/ResultSection";
import "./styles/dashboard.css";

export default function App() {

    const complaint = useSelector(
        state => state.complaint.data
    );

    return (

        <div className="app">

            <Navbar />

            <UploadPanel />

            {

                complaint &&

                <div className="dashboard-grid">

                    <ResultsSection />

                </div>

            }

        </div>

    );

}