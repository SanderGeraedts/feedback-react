// framework imports
import React, {Component} from 'react';

// css
import '../../css/components/App.css';

// custom views
import LocationView from "./LocationView";
import FeedbackView from "./FeedbackView";

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            appStarted: false,
            locationId: null
        };

        this.onEvaluationStarted = (location) => {
            this.setState({
                appStarted: true
            });

            fetch("https://feedback-fontys-backend.herokuapp.com/locations", {
                headers: {"Content-Type": "application/json; charset=utf-8"},
                method: 'POST',
                body: JSON.stringify({
                    name: location
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        locationId: data.location._id
                    });
                });
        };

        this.onFeedbackSubmitted = (feedback) => {
            fetch("https://feedback-fontys-backend.herokuapp.com/feedback", {
                headers: {"Content-Type": "application/json; charset=utf-8"},
                method: 'POST',
                body: JSON.stringify({
                    location: this.state.locationId,
                    value: feedback
                })
            })
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.appStarted ? (
                        <FeedbackView
                            onFeedbackSubmitted={this.onFeedbackSubmitted}/>
                    ) : (
                        <LocationView
                            onEvaluationStarted={this.onEvaluationStarted}/>
                    )
                }
            </div>
        );
    }
}

export default App;
