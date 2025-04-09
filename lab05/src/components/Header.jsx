import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="container-fluid bg-white px-4 shadow-sm py-2">
            <div className="row align-items-center">
                <div className="col-2 fw-bold fs-5" style={{ color: "#F44B87" }}>
                    Dashboard
                </div>
                <div className="col-7 position-relative">
                    <input
                        type="text"
                        className="form-control rounded-pill bg-light border-0 ps-4"
                        placeholder="Search..."
                    />
                    <img
                        src="../imgs/Search.png"
                        alt="Search"
                        className="position-absolute"
                        style={{ top: '50%', right: '20px', transform: 'translateY(-50%)', height: '20px' }}
                    />
                </div>

                {/* Right: Icons */}
                <div className="col-3 d-flex justify-content-end align-items-center gap-3">
                    <img src="../imgs/Bell 1.png" alt="Notification" height="20" />
                    <img src="../imgs/Question 1.png" alt="Help" height="20" />
                    <img src="../imgs/Avatar 313.png" alt="Avatar" className="rounded-circle" width="32" height="32" />
                </div>
            </div>
        </div>
    );
};

export default Header;
