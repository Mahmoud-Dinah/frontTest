import React, { Component } from 'react'

export class ApiData extends Component {
    render() {
        return (
          this.props.apiData.map((obj, idx) => {
            return (
                <div key={idx}>
                    <h2>{obj.title}</h2>
                    <h3>{obj.artist_name}</h3>
                    <img src = {obj.thumbnail} alt = " " />
                    <p>
                        {obj.description}
                    </p>
                <button onClick={e => this.props.favoriteItem(obj)}>Add to favorite</button>
                </div>
            )
          })
        );
    }
}

export default ApiData
