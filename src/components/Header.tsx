import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Header () {
    return (
        <nav style={{
            padding:'15px',
            background: '#D9D9D9',
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            borderBottom: '1px solid #000000'
        }}>
            <div style={{marginRight: 'auto', display: 'flex', gap: '15px'}}>
                <Link to='/'>☕</Link>
                <Link to='/Cart'>Carrinho</Link>
            </div>

            <div style={{justifyContent: 'center'}}>
                <SearchBar />
            </div>

            <Link to='/Login' style={{marginLeft: 'auto'}}>Login</Link>
        </nav>
    )
}