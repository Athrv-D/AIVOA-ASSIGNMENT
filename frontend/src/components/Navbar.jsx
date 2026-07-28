import { FaRobot } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-left">

                <div className="logo">

                    <FaRobot className="logo-icon" />

                </div>

                <div>

                    <h2>AI Complaint Management</h2>

                    <p>
                        Pharmaceutical Quality Management System
                    </p>

                </div>

            </div>

            <div className="navbar-right">

                <div className="status-box">

                    <MdOutlineHealthAndSafety className="status-icon" />

                    <div>

                        <span className="status-label">
                            System Status
                        </span>

                        <span className="status-value">
                            AI Ready
                        </span>

                    </div>

                </div>

            </div>

        </nav>
    );
}