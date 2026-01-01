import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    function handleSearch (e: React.FormEvent) {
        e.preventDefault()
        if (term.trim()) {
            navigate('/search?q=${term}')
        }
    }

    return (
        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center',}}>
            <input
                type="text"
                placeholder="Buscar na loja"
                value={term}
                onChange={e => setTerm(e.target.value)}
                style={{padding: '5px', borderRadius: '4px', border: '1px solid #000000'}}
            />
            <button type="submit" style={{marginLeft: '5px'}}>🔎</button>
        </form>
    )
}