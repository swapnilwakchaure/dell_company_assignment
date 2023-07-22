import { useState } from "react";

const Home = () => {

    const [seleted, setSelected] = useState('');

    const handleChange = (e) => {
        console.log('gender: ',e.target.value);
        setSelected(e.target.value);
    }

    return (
        <div>
            <h1>Home page</h1>

            <select value={seleted} onChange={handleChange}>
                <option value="all">Select value</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </div>
    )
}

export default Home;