import React from 'react';

import './Main.css';

import Cards from '../Cards/Cards';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.url = 'https://www.reddit.com/r/';
    }

    state = {
        mainSubreddit: 'cats',
        files: [],
        after: null,
        before: null,
        page: 1
    };

    componentDidMount() {
        this.mainPage(this.state.mainSubreddit);
    }

    nextPage = () => {
        fetch(this.url + this.state.mainSubreddit + ".json?count=" + (this.state.page * 25) + "&after=" + this.state.after)
            .then(res => res.json())
            .then((data) => {
                this.setState(() => ({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before,
                    page: this.state.page + 1
                }));
                window.scrollTo(0, 0);
            })
            .catch(console.log)
    }

    prevPage = () => {
        fetch(this.url + this.state.mainSubreddit  + ".json?count=" + (((this.state.page - 1) * 25) - 1) + "&before=" + this.state.before)
            .then(res => res.json())
            .then((data) => {
                window.scrollTo(0, 0);
                let newState = {
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                }
                if (this.state.page > 1) {
                    newState.page = this.state.page - 1
                }
                this.setState(newState)
            })
            .catch(console.log)
    }

    mainPage(sub) {
        fetch(this.url + sub  + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                });
            })
            .catch(console.log)
    }

    render () {
        let contentJSX;
        if (this.state.files.length > 0) {
            let pagingJSX;
            const buttonNext = <button className="btn main__btn" type="submit" onClick={this.nextPage}>След.</button>;
            const buttonPrev = <button className="btn main__btn" type="submit" onClick={this.prevPage}>Пред.</button>;
            if (this.state.after === null && this.state.before !== null) {
                pagingJSX = <div>{buttonPrev}</div>;
            } else if (this.state.before === null && this.state.after !== null) {
                pagingJSX = <div>{buttonNext}</div>;
            } else if (this.state.before !== null && this.state.after !== null) {
                pagingJSX = <>{buttonPrev} <span className="main__text">Страница {this.state.page}</span> {buttonNext}</>;
            } else {
                pagingJSX = <div>Постов не найдено</div>;
            }
            contentJSX = <section className="main"><Cards files={this.state.files}/><div className="main__menu">{pagingJSX}</div></section>;
        } else {
            contentJSX = <div className="main__loading">Загрузка...</div>;
        }

        return (
            <>
                {contentJSX}
            </>
        );
    }

}

export default Main;
