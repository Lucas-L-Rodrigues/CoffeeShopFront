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
}