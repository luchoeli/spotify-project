import React from 'react';

class Album extends React.Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }


    render() {
        return (

            <div>
                
                <input placeholder={ 'ingresa el artista' } />

                <hr />
        
                <p>LOGO DEL ALBUM [X]</p>
                <h1> {this.props.name} </h1>
                <h3> {this.props.banda} - {this.props.anio} </h3>
                <p> NAVIGATION SIDE </p>

                <hr />

                <p> ACA VA EL SONGS-CONTAINER </p>

            </div>

        )
    }
}

export default Album;