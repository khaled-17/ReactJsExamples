import react, { useState } from 'react';
import axios from 'axios';
const style = {

    backgroundColor: 'black',
    color: "white"

}

function FetchDataComp(URL) {

    const [data, setData] = useState(null);

    const URLelbehery = 'https://elbehery.onrender.com/'
    const URLbed = 'https://bend.egysnakes.com/api/v2/test'

    const fetchDataBTN = async (URL) => {
        console.log('response--from --');
        console.log(URL);


        try {
            const response = await axios.get(URL);
            setData(response.data);
            console.log('response----');
            console.log(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Next.js Axios Exampl</h1>
            <p>https://bend.egysnakes.com/api/v2/test</p>
            <button style={style} onClick={() => fetchDataBTN(URLelbehery)}>URLelbehery</button>
            <button style={style} onClick={() => fetchDataBTN(URLbed)}>URLbed</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );


}

export default FetchDataComp;
