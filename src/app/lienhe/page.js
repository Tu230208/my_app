"use client";
import { useEffect, useState } from "react";
import styles from "./lienhe.module.css";

export default function LienHe() {
    const [user, setUser] = useState([]);
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch("/api/user");
          const result = await response.json();
          if (response.ok) {
            console.log("User:", result.data);
            setUser(result.data);
          } else {
            console.error("Error fetching user:", result.error);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
  
  
      fetchUsers();
  
},[]);  

  return (
<div className={styles.lienhe}>
        <h1>lienhe</h1>
        {user.map((user) => (
        
        <div key={user._id}>
        <br></br>

        <p>
        <strong>Ten</strong> {user.name}
        </p>
        <br></br>
        <p>
        <strong>Diachi</strong> {user.address}
            </p>
        
        <br></br>
        
        </div>
      ))}
    </div>
  );
}