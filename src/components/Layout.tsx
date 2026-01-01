import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Layout() {
    
    //const [term, setTerm] = useState('')
    //const navigate = useNavigate()

    return (
        <div>
            <nav style={{padding: '20px', background: '#B7B7B7'}} >
                <Link to="/">Home</Link>
            </nav>
            <main style={{padding: '20px'}}>
                <Outlet />
            </main>
        </div>
    )
}