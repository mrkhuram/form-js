import React from 'react'
import './style.css'

class Header extends React.Component {

    state = {
        form: true,
        keysArray: [
            {
                name: "Khuram",
                apiKey: "000292736",
                apiKeyId: "321IDkadfhuj990"
            }
        ],
        name: null,
        apiKeyId: null,
        apiKey: null

    }

    onChangeHandler = e => {
        let name = e.target.name
        let val = e.target.value

        this.setState({
            [name]: val
        })
    }

    clickToAdd = e => {
        e.preventDefault()
        let Obj = {
            name: this.state.name,
            apiKey: "6635524fffr",       // this.state.apiKey,
            apiKeyId: "8827254###oidiu"    //this.state.apiKeyId
        }
        this.setState({
            keysArray: [...this.state.keysArray, Obj],

        })
        if (this.state.form === true) {
            this.setState({
                form: false
            })
        }
    }
    generateRandomValue = e => {
        e.preventDefault()
        let Obj = {
            name: this.state.name,
            apiKey: "6635524fffr",       // this.state.apiKey,
            apiKeyId: "8827254###oidiu"    //this.state.apiKeyId
        }
        this.setState({
            apiKey: "6635524fffr",       // this.state.apiKey,
            apiKeyId: "8827254###oidiu"
        })
    }



    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">

                        <div className="header" >
                            <h3 className="api">Api Keys</h3>

                            <button className="buttonAdjustment" onClick={() => { this.setState({ form: !this.state.form }) }}>+ Create API Key</button>

                        </div>


                        <div className="create">
                            <div className="outerCreateApi" >
                                <h3 className="createApi"> Create API Keys</h3>
                            </div>
                            <div class="shadow">
                                {this.state.form ?
                                    <form>
                                        <div>
                                            <h6 className="name">Name</h6>
                                            
                                            <input className="namefield" type="text" name="name" onChange={this.onChangeHandler} />
                                        </div>
                                        <div>
                                            <h6 className="name">API KeyID</h6>
                                            
                                            <input className="namefield readable" type="text" readOnly name="apiKeyId" value={this.state.apiKeyId} click={this.onChangeHandler} />

                                            <button className="buttonAdjustment2" onClick={this.generateRandomValue} >Auto Customize</button>
                                        </div>
                                        <div>
                                            <h6 className="name">API Key</h6>
                                            
                                            <input className="namefield readable" readOnly type="text" name="apiKey" value={this.state.apiKey} onChange={this.onChangeHandler} />

                                            <button className="buttonAdjustment2" onClick={this.generateRandomValue}>Auto Customize</button>

                                        </div>

                                        <div className="name">

                                            <button className="createBtn" onClick={this.clickToAdd}>Create API</button>

                                        </div>

                                    </form>

                                    :
                                    null
                                }
                            </div>
                            <div class="end">

                                <th width="48%">First Name</th>
                                <th width="46%">API Key</th>
                                <th width="10%">Action</th>

                                <table >


                                    {this.state.keysArray.map((item, key) => {
                                        return <tr key={key}>
                                            <td width="50%" className="td-name">{item.name}
                                            <p className="td-key-id">API Key ID: {item.apiKeyId}</p>
                                            </td>
                                            <td width="40%">{item.apiKey}</td>
                                            <td width="30%">
                                                <img src={require("./gear.png")} alt="" className="gear-img"/>
                                                <select>
                                               <option value=""></option>
                                               <option value="">1</option>
                                            </select></td>
                                        </tr>
                                    })}



                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

export default Header