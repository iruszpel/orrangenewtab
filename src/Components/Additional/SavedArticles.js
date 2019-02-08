import React, { Component } from 'react';
import './css/SavedArticles.css';
import onClickOutside from "react-onclickoutside";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class SavedArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            response: {},
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("tokenPocket") != undefined) {
            this.setState({
                loggedIn: true
            })
            fetch(`${process.env.REACT_APP_API_URL}/api/pocket`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ "access_token": localStorage.getItem("tokenPocket"), "type": "getitems" })
                })
                .then(response => response.json()).then(res => {
                    this.setState({
                        response: res
                    })
                })
                .catch(res => { console.log(res) })
        }

    }
    handleClickOpen = () => {
        this.setState({
            isHidden: false
        })
    }
    handleClickOutside = evt => {
        this.setState({
            isHidden: true
        })
    };
    handleArticleArchive = (evt) => {
        evt.persist();
        fetch(`${process.env.REACT_APP_API_URL}/api/pocket`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ "type": "archiveItem", "access_token": localStorage.getItem("tokenPocket"), "item_id": evt.target.id })
            })
            .then(response => response.json()).then(res => {

            })
            .catch(res => { console.log(res) })
        let tempState = this.state.response;
        delete tempState.list[evt.target.id];
        this.setState({
            response: tempState
        })
    }
    render() {
        return (
            <div className="savedArticlesWrapper">
                <p id="savedArticlesText" onClick={this.handleClickOpen}>Saved articles
                {(this.state.response.list && Object.keys(this.state.response.list).length !== 0) &&
                        <span className="CircleRedIcon" id="articleIcon">{Object.keys(this.state.response.list).length > 9 ? "9+" : Object.keys(this.state.response.list).length}</span>
                    }
                </p>
                <TransitionGroup>
                    {!this.state.isHidden &&
                        <CSSTransition
                            classNames="articlesGroupAnim"
                            timeout={{ exit: 300 }}
                        >
                            < div className="savedArticles" >
                                {!this.state.loggedIn &&
                                    <p id="noArticlesBanner">Currently integration with Pocket is disabled, to enable it
   go to <a href="setup.html">setup page.</a>
                                    </p>
                                }
                                {(this.state.response.list && Object.keys(this.state.response.list).length == 0) &&
                                    <p id="noAvailableArticlesBanner">There are currently no saved articles on your
                                       Pocket account.
     </p>
                                }
                                {this.state.loggedIn &&
                                <TransitionGroup>
                                    {Object.keys(this.state.response.list).map((key) =>
                                        <CSSTransition
                                            key={this.state.response.list[key].item_id}
                                            classNames="articleAnim"
                                            timeout={{ exit: 300 }}
                                        >
                                            <div id={this.state.response.list[key].item_id} key={this.state.response.list[key].item_id} className="someArticle">
                                                <div className="articleImageWrapper" style={{ backgroundImage: `url("${this.state.response.list[key].top_image_url}")` }}>
                                                    {/*<img src={} className="articleImage"></img>*/}
                                                </div>
                                                <a href={this.state.response.list[key].resolved_url} id={this.state.response.list[key].item_id} target="_blank" className="articleTitle">{`${this.state.response.list[key].resolved_title.length > 50 ? this.state.response.list[key].resolved_title.substring(0, 50): this.state.response.list[key].resolved_title }...`}</a>
                                                {/*<span className="articleDate">{moment(this.state.response.list[key].time_added).fromNow()}</span>*/}
                                                <i title="Move to archive" id={this.state.response.list[key].item_id} onClick={this.handleArticleArchive} className="material-icons archiveArticleIcon">archive</i>
                                            </div>
                                        </CSSTransition>

                                    )}
                                </TransitionGroup>
                                }
                            </div >
                        </CSSTransition>}
                </TransitionGroup>
            </div>
        );
    }
}

export default onClickOutside(SavedArticles);

