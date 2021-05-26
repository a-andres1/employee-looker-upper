import React from 'react';
// import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import API from '../utils/API';
import Sort from '../components/Sort'

class Main extends React.Component {
    // const [number, setNumber] = useState(0);
    // const [searchTerm, setSearch] = useState("");
    // const [filterMain, setMain] = useState([])
    // const [employees, setEmployees] = useState([])
    state = {
        filterMain: [],
        employees: []
    }
    // useEffect(function(){
    //     dataGet()
    // }, [])
    
    componentDidMount(){
        this.dataGet();
    }

    dataGet = () => {
        API.searchUsers()
            .then(res => {
                this.setState({employees: res.data.results})
                this.setState({filterMain: res.data.results})
                // setMain(res.data.results)
            })

    }

    handleChange = (e) => {
        // console.log(e.target.value);
        // setSearch(e.target.value)
        const filterArr = this.state.filterMain.filter(query => query.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({employees: filterArr})
        // setEmployees(filterArr)
    }

    sort = (e) =>{
        // e.preventDefault();
        console.log(this.state.employees)
        var siftingSort = this.state.filterMain.sort((a,b) => {
            var firstComparator = a.name.last;
            var secondComparator = b.name.last;

            if(firstComparator < secondComparator){
                return -1
            }   
            if(firstComparator > secondComparator){
                return 1
            }

            return 0;
        })

        this.setState({employees: siftingSort});
        // setSortEmp(employees.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1));
    }

    render(){

        return (
            <>
            <Header />
            <Searchbar functionThatHandlesTheChange={this.handleChange} />
            
            <Sort fn={this.sort}/>
            <Table employees={this.state.employees} />
        </>
    )
    }
}

export default Main;