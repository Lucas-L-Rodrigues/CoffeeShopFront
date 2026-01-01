import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Header () {
    return (
        <nav>
            <div style={{marginLeft: 'auto', display: 'flex', gap: '15px'}}>
                <Link to='/'>☕</Link>
                <Link to='/cart'>Carrinho</Link>
            </div>

            <div style={{marginLeft: '20px'}}>
                <SearchBar />
            </div>

            <Link to='/login'>Login</Link>
        </nav>
    )
}