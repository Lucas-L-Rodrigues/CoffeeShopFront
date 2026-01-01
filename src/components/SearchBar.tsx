import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    function handleSearch (e: React.FormEvent) {
        e.preventDefault()
        if (term.trim()) {
            navigate(`/search?q=${term}`)
        }
    }

    return (
        <form onSubmit={handleSearch} style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '1000px'}}>
            <input
                type="text"
                placeholder="Buscar na loja"
                value={term}
                onChange={e => setTerm(e.target.value)}
                style={{
                    boxSizing: 'border-box',
                    height: '5px',
                    padding: '12px 50px 12px 20px', 
                    width: '100%',
                    borderRadius: '30px', 
                    border: '1px solid #000000'}}
            />
            <button type="submit" style={{
                marginLeft: '5px',
                position: 'absolute',
                right: '2px',
                top: '50%', 
                width: '23px',
                height: '23px',
                borderRadius: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                color: 'white',
                cursor: 'pointer'
                }}>🔎</button>
        </form>
    )
}