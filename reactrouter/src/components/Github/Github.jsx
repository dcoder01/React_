import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/dcoder01')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         });
    // }, []);


    const data=useLoaderData()
    return (
        <div className="container min-vh-100 d-flex flex-column ">
            <div className="row align-items-center justify-content-center">
                <div className="text-center bg-dark-subtle">
                    <h3 className="mb-4 p-4 ">Public Repos: {data.public_repos}</h3>
                    <img 
                        src={data?.avatar_url} 
                        className="rounded-circle mb-4" 
                        style={{ width: "200px", height: "auto" }} 
                        alt="profile" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Github;


export const githubinfoloader= async()=>{
    const response= await fetch('https://api.github.com/users/dcoder01');
    return response.json();
}