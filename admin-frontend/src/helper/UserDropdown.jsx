import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import './UserDropdown.css';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const UserDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);


     const navigate = useNavigate();
    


    const handleSignOut = () => {
    toast.success('Logged out successfully! Redirecting to login...')
    setTimeout(() => {
      localStorage.removeItem('admin-token');
      navigate('/admin/login');
    }, 2000);


  };

  const [adminName, setAdminName] = useState("Admin User");
  const [adminEmail, setAdminEmail] = useState("Admin User");
    // Close dropdown on outside click
    useEffect(() => {
        const userName = localStorage.getItem("admin-user") ? JSON.parse(localStorage.getItem("admin-user")).name : "Admin User";
       const adminEmail = localStorage.getItem("admin-user") ? JSON.parse(localStorage.getItem("admin-user")).email : "ankit@admin.com";
        setAdminName(userName.toString()); // Debugging line  
        setAdminEmail(adminEmail.toString());
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    return (
        <div className="user-dropdown-container" ref={dropdownRef}>
            <button className="avatar-btn" onClick={() => setOpen(!open)}>

                <div className="user-avatar">
                    <User size={20} />
                </div>
                <div className="user-info">
                    <span className="user-name">{adminName}</span>
                    <span className="user-role">Administrator</span>
                </div>

            </button>

            {open && (
                <div className="dropdown-menu">
                    <div className="dropdown-header">
                        <p className="name">{adminName}</p>
                        <p className="email">{adminEmail}</p>
                    </div>
                    <div className="dropdown-item">
                        <User size={16} style={{ marginRight: 8 }} /> Profile
                    </div>
                    <div className="dropdown-item" onClick={()=> navigate("/settings")}>
                        <Settings size={16} style={{ marginRight: 8 }} /> Settings
                    </div>
                    <hr />
                    <div className="dropdown-item logout" onClick={handleSignOut}>
                        <LogOut size={16} style={{ marginRight: 8 }} /> Log out
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
