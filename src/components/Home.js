import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div id="home_container">

                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>

                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>

                <input placeholder="Type the name of your favorite artist"></input>

                <br />

                <h2>Favorite Songs</h2>

                <br />

                <lu>
                    <li>Elemento hardcodeado 1</li>
                    <li>Elemento hardcodeado 2</li>
                    <li>Elemento hardcodeado 3</li>
                </lu>

            </div>
        )
    }
}

export default Home;












