import React from "react";
import ListItem  from "./ListItem";

class ViewList extends React.Component {

    constructor(props) {
        super(props);

        this.state=
        {
            
        }      
    }

     


    render() {
                    return (
                        <div>
                                <div className="form-group">
                                    <label>Search your interest</label>
                                    <select id="select2-multiple" data-plugin="select2" defaultValue={['all']} className="form-control" multiple>
                                        <optgroup label="select your interest">
                                            <option value="all" >All</option>
                                            <option value="crypto" >Crypto</option>
                                            <option value="game">Games</option>
                                            <option value="sport">Sports</option>
                                            <option value="tech">Technology</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div class ="list-container row" style={{marginTop:'50px'}}> 
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                </div>
                        </div>
                         
                    )
    }
};


export default ViewList;
