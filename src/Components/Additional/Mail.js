import React, { Component } from 'react';
import './css/Mail.css';
import onClickOutside from "react-onclickoutside";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BottomScrollListener from 'react-bottom-scroll-listener'
import moment from 'moment'
import db from '../../db';
//Functions for different colors for every sender
function djb2(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}

function hashStringToColor(str) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            mails: {},
            loggedIn: false
        };
    }
    updateMail = () => {
        db.mails
            .orderBy('date')
            .reverse()
            .toArray()
            .then((mails) => {
                this.setState(
                    {
                        mails: mails,
                        loggedIn: true,
                        numberOfUnread: mails.filter(mail => mail.labelIds.indexOf("UNREAD") != -1).length

                    }
                );
            });
    }
    componentDidMount() {
        if (localStorage.getItem("gmail_auth") == 1 && localStorage.getItem("tokenGoogle")) {
            this.updateMail();
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
    markReadUnread = (id,unread) => { 
        window.chrome.runtime.sendMessage({ component: "gmail", type: unread ? 'mark_read' : 'mark_unread', id: id})
    }
    handleMailRead = (evt) => {
        evt.persist();
       //Mark as read in local database and send request
        db.mails.get(evt.target.id, (mail) => {
            if (evt.target.getAttribute("unread") == "true") {
                this.markReadUnread(evt.target.id, true); 
                mail.labelIds.splice(mail.labelIds.indexOf("UNREAD"), 1);
            }
            else {
                this.markReadUnread(evt.target.id, false); 
                mail.labelIds.push("UNREAD")
            }
            db.mails.update(evt.target.id, { labelIds: mail.labelIds }).then(() => {
                this.updateMail();
            })
        })


    }
    handleMarkAllRead = () => {
        for (let mail of this.state.mails) {
            if (mail.labelIds.indexOf("UNREAD") != -1) {
                this.markReadUnread(mail.id, true)
                mail.labelIds.splice(mail.labelIds.indexOf("UNREAD"), 1);
                db.mails.update(mail.id, { labelIds: mail.labelIds })

            }
        }
        this.updateMail();

    }
    onBottomScroll = () => {

    }
    render() {
        return (
            <div className="mailWrapper">
                <p id="mailinboxp" onClick={this.handleClickOpen}>Mail inbox
                {(this.state.loggedIn && this.state.mails && this.state.numberOfUnread !== 0) &&
                        <span className="CircleRedIcon">{this.state.numberOfUnread > 9 ? "9+" : this.state.numberOfUnread}</span>
                    }
                </p>
                <TransitionGroup>
                    {!this.state.isHidden &&
                        <CSSTransition
                            classNames="articlesGroupAnim"
                            timeout={{ exit: 300 }}
                        >
                            <div id="mailinbox">
                                <BottomScrollListener onBottom={this.onBottomScroll} />
                                {!this.state.loggedIn &&

                                    <p id="noMailsBanner">Currently integration with Gmail is disabled, to enable it go
to <a href="#/setup">setup page.</a>
                                    </p>
                                }
                                {this.state.loggedIn &&
                                    <div>
                                        <div onClick={this.handleMarkAllRead} className="mailMainTitle">Recent Mail<i title="Mark all as read" className="material-icons markAllasReadButton">clear_all</i></div>

                                        {this.state.mails.map((mail) =>

                                            <div id={mail.id} key={mail.id} className="someMail">
                                                <div className="mailFromLogo" style={{ backgroundColor: hashStringToColor(mail.from) }}>
                                                    {mail.from.replace("\"", "").substring(0, 1).toUpperCase()}
                                                </div>
                                                <a href={`https://mail.google.com/mail/u/0/#inbox/${mail.id}`} id={mail.id} target="_blank" className={mail.labelIds.indexOf("UNREAD") != -1 ? "mailTitle mailBold" : "mailTitle"}>{mail.title /* `${mail.title.length > 80 ? mail.title.substring(0, 100) : mail.title}...`*/}</a>
                                                <span className="mailFrom">{mail.from.replace(/\"/g, "").replace(/<[^>]*>/, "")}</span>
                                                <i id={mail.id} unread={mail.labelIds.indexOf("UNREAD") != -1 ? "true" : "false"} onClick={this.handleMailRead} className="material-icons archiveMailIcon">{mail.labelIds.indexOf("UNREAD") != -1 ? "drafts" : "markunread"}</i>
                                            </div>

                                        )}
                                    </div>}

                            </div >
                        </CSSTransition>}
                </TransitionGroup>
            </div>
        );
    }
}

export default onClickOutside(Mail);

