import React, { Component } from 'react';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyric: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>
                    Lyric Create
                </h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="addLyric" >Add a Lyric</label>
                    <input 
                        value={this.state.lyric} 
                        onChange={(e) => { 
                            this.setState({ lyric: e.target.value }); 
                        }}
                    />
                </form>
            </div>
        );
    }
}

export default LyricCreate;
