import axios from "axios";
import React, { useEffect, useState } from "react";
import JsxComponent from "./JsxComponent";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import EditIcon from "./images/edit-svgrepo-com.svg";
import './reactForms.css';
import { Link, NavLink, Outlet } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        background: 'green',
        color: '#fff'
    }
}))

const ReactForms = (props) => {

    const classes = useStyles();

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [checkboxStatus, setCheckboxStatus] = useState(false);
    const [data, setData] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [displayFlagOne, setDisplayFlagOne] = useState(false);
    const [displayFlagTwo, setDisplayFlagTwo] = useState(false);

    const [pageFlag, setPageFlag] = useState(0);

    const [userValues, setUserValues] = useState({});
    const [resultArray, setResultArray] = useState([]);

    const [postData, setPostData] = useState([]);
    const [searchData, setSearchData] = useState('');


    const formSubmit = (e) => {

        setPageFlag(pageFlag + 1);
        setResultArray([...resultArray, userValues]);
        // resultArray.push(userValues);



        // e.preventDefault();
        // let response = await fetch('https://api.instantwebtools.net/v1/airlines');
        // response.then((re) => console.log(re))
        // console.log(response)
        // console.log('data', response);
        // console.log("Name", userName, "Age", age);
    }

    console.log("resultArray", resultArray);

    const setInputName = (e) => {
        setUserValues({ ...userValues, [e.target.name]: e.target.value });
        setUserName(e.target.value);
    }

    const setInputAge = (e) => {
        setAge(e.target.value);
    }

    const checkboxHandler = () => {
        setCheckboxStatus(!checkboxStatus);
    }

    const loadAirLines = () => {
        let response;
        response = axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
        response.then((res) => setData(res.data));
        // console.log('data', response);
    }

    const loadPosts = () => {
        let response = [];
        response = axios.get('https://jsonplaceholder.typicode.com/posts/')
        response.then((res) => {
            if (res.data) {
                setSearchData(res.data);
                setPostData(res.data);
                props.loadData(res.data);
            }
        });
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const displayDiv = (key) => {
        if (key === 1) {
            setDisplayFlag(true);
            setDisplayFlagOne(false);
            setDisplayFlagTwo(false);
        } else if (key === 2) {
            setDisplayFlag(false);
            setDisplayFlagOne(true);
            setDisplayFlagTwo(false);
        } else {
            setDisplayFlag(false);
            setDisplayFlagOne(false);
            setDisplayFlagTwo(true);
        }
    }

    const setFocus = (key) => {
        document.getElementsByName(key)[0].focus();
    }

    const sampleObj = [
        {
            type: "text",
            label: 'Enter your First Name',
            name: "firstName"
        },
        {
            type: "text",
            label: 'Enter your Last Name',
            name: "lastName"
        },
        {
            type: "number",
            label: 'Enter your Age',
            name: "age"
        },
        {
            type: "number",
            label: 'Enter your Phone number',
            name: "phNumber"
        }
    ];

    const prevPage = () => {
        setPageFlag(pageFlag - 1);
    }

    const searchById = (e) => {
        if (e.target.value !== '') {
            let resultData = searchData.filter((re) => re['id'] === Number(e.target.value));
            setPostData(resultData);
        } else {
            setPostData(searchData);
        }
    }

    return (
        <>


            <div style={{ padding: 10 }}>
                <input placeholder="Search" name='searchValue' onChange={searchById} style={{
                    marginLeft: 10, width: 220,
                    height: 30,
                    borderRadius: 3, marginRight: 10
                }}></input></div>

            <div style={{ display: 'flex', flexWrap: 'wrap', padding: 20, columnGap: 20, height: 'calc(100vh - 160px)', overflow: 'auto' }}>
                {postData.map((data) => <div className='individualBox' style={{ width: 180, height: 100, boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", padding: '10px 20px', margin: '10px auto' }}>
                    <div style={{ display: 'flex', fontSize: 14 }}><div>ID :</div>&nbsp;&nbsp;<div>{data.id}</div></div>
                    <div style={{ display: 'flex', fontSize: 14 }}><div>Title :</div>&nbsp;&nbsp;<div style={{ overflow: 'auto', height: 80 }}>{data.title}</div></div>
                </div>)}
            </div>

            {/* {pageFlag === 0 && <div>
                {
                    sampleObj.map((re) =>
                        <div>
                            <label>{re.label} : <input type={re.type} name={re.name} onChange={(e) => setInputName(e)} /></label>
                            {re.label !== 'Enter your Last Name' && <img src={EditIcon} alt="" onClick={() => setFocus(re.name)} style={{ cursor: 'pointer' }}></img>}
                        </div>
                    )
                }
                <label><input type="checkbox" checked={checkboxStatus} onChange={checkboxHandler} /> Remember Me</label>
                <button onClick={formSubmit}>Submit</button>
            </div>} */}

            {/* {
                pageFlag === 1 && <div>

                    <button onClick={prevPage}>Back</button>

                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Age</th>
                        </tr>
                        {
                            resultArray?.map((re) => <tr>
                                <td>{re.firstName}</td>
                                <td>{re.age}</td>
                            </tr>
                            )
                        }
                    </table>

                </div>
            } */}


            {/* <div>
                    <label>Enter your First Name : <input type="text" name="name" value={userName} onChange={(e) => setInputName(e)} /></label>
                    <img src={EditIcon} alt="" onClick={setFocus} style={{ cursor: 'pointer' }}></img>
                </div> */}
            {/* <div>
                    <label>Enter your age : <input type="number" style={{
                        fontSize: 14,

                    }} name="age" value={age} onChange={(e) => setInputAge(e)} /></label>
                </div> */}

            {/* <div>Conditional Rendering</div>

            {displayFlag ? <JsxComponent flag={displayFlag} /> : null}
            {displayFlagOne && <div>B</div>}
            {displayFlagTwo && <div>C</div>} */}

            {/* <button onClick={()=>displayDiv(1)}>Show A</button>
            <button onClick={()=>displayDiv(2)}>Show B</button>
            <button onClick={()=>displayDiv(3)}>Show C</button> */}

            {/* <Button variant="text" onClick={()=>displayDiv(1)} style={{ background: 'red',color:'#fff' }}>Show A</Button>
            <Button onClick={()=>displayDiv(2)} className={classes.root}>Show B</Button>
            <Button variant="text" onClick={()=>displayDiv(3)}>Show C</Button>

            <div>
            { array.map((re)=> <button>{`Button_${re}`}</button>) }
            </div> */}

            {/* <div>
                <table>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
                {data.map((v) => <tr>
                    <td>{v.name}</td>
                    <td>{v.city}</td>
                </tr>)}
                </table>
            </div> */}

        </>
    )
}

export default ReactForms;