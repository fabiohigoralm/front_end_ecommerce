import React, { Component } from 'react'
import Check from "../icon/vector_check.png"

export default class ButtonAdded extends Component {
    render() {
        return (
            <div>
                <div className="add-button color-ligth-green-bt text-color-black flex center align-center">
                <p>
                    <img className="img-check" src={Check} alt="Check"/>
                    ADICIONADO</p>
            </div>
            </div>
        )
    }
}
