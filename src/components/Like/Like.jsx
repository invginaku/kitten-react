import React from 'react';

import './Like.css';

class Like extends React.Component {
    state  = {
        liked: false
    }

    handleClick = (state) => {
        this.setState({
            liked: !this.state.liked
        });
    }

    render () {
        const classLike = this.state.liked ? 'like like_active' : 'like';
    return(
        <button className={classLike} onClick={this.handleClick} />
    )
}
}

export default Like;
