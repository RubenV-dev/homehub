import React, {useState} from 'react';

let memeApiCall = (setMemeArray) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors'
    };
      
    fetch('https://meme-api.herokuapp.com/gimme/5', requestOptions)
        .then(response => response.json())
        .then(result => setMemeArray(result.memes))
        .catch(error => console.log('error', error))
}

let memeUrltoList = (memeObjArray) => {
    let memeList = memeObjArray.map((obj, i) => {
        return (<img key={i} src={obj.url} alt="meme.jpg" height="200px" width="200px"></img>)
    })

    return memeList
}

let MemeCard = () => {
    let [memeArray, setMemeArray] = useState({})
    let subCard = !!memeArray.length ? memeUrltoList(memeArray) : 
    <p>"dont have anything"</p>

    return (
        <div className="meme-card">
            <h1>Meme Card</h1>
            <button onClick={() => memeApiCall(setMemeArray)}>Call Meme Api</button>
            <div className="meme-container">
                {subCard}
            </div>
        </div>
    )
}

export default MemeCard