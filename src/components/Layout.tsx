import { Link, Outlet } from "react-router-dom";

export function Layout() {
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