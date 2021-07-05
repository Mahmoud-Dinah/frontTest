import React, { Component } from 'react'

export class CrudUpdateForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateItem}>
                    <input onChange={this.props.updateDescState} type="text" value={this.props.description}/>
                    <input type="submit" value="Update Data" />
                </form>
            </div>
        )
    }
}

export default CrudUpdateForm
