'use client'
import { useState } from "react"

export default function Dashboard() {
    
    const [name, setName] = useState('')
    function click(data){
        setName(data)
    }

	return (
        <div>
            <h1>Hello, Dashboard Page!</h1>
            <h3>Hi {name}</h3>
            <button onClick={() => click("Swarup")}>Hello</button>
        </div>
	)
}
