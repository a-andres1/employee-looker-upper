import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import API from '../utils/API';

function Main() {
    // const [number, setNumber] = useState(0);
    const [searchTerm, setSearch] = useState("");
    const [filterMain, setMain] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(function(){
        dataGet()
    }, [])
    

    const dataGet = () => {
        API.searchUsers()
            .then(res => {
                setEmployees(res.data.results)
                setMain(res.data.results)
            })

    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value)
        const filterArr = filterMain.filter(query => query.name.first.toLowerCase().includes(searchTerm.toLowerCase()))
        setEmployees(filterArr)
    }

    return (
        <>
            <Header />
            <Searchbar functionThatHandlesTheChange={handleChange} />
            <h1>{searchTerm}</h1>
            <Table employees={employees} />
        </>
    )
}

export default Main;