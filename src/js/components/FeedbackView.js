import React, {Component} from 'react';
import FeedbackSmiley from "./FeedbackSmiley";

// css
import '../../css/components/FeedbackView.css';

class FeedbackView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thankYouMessage: false
        };

        this.onFeedbackSubmitted = (feedback) => {
            this.props.onFeedbackSubmitted(feedback);

            this.setState({
                thankYouMessage: true
            });

            setTimeout(() => {
                this.setState({
                    thankYouMessage: false
                });
            }, 2000)
        }
    }

    render() {
        return (
            <div className="container-fluid h-100 position-relative">
                <h1 className="title">Wat vond u van Innovations Insight?</h1>
                <div className="row h-100">
                    <div className="col-md-4 my-auto">
                        <FeedbackSmiley value={-1}
                                        onFeedbackSubmitted={this.onFeedbackSubmitted}/>
                    </div>
                    <div className="col-md-4 my-auto">
                        <FeedbackSmiley value={0}
                                        onFeedbackSubmitted={this.onFeedbackSubmitted}/>
                    </div>
                    <div className="col-md-4 my-auto">
                        <FeedbackSmiley value={1}
                                        onFeedbackSubmitted={this.onFeedbackSubmitted}/>
                    </div>
                </div>
                <div
                    className={(this.state.thankYouMessage) ? 'thank-you visible' : 'thank-you'}>
                    Bedankt voor uw feedback.
                </div>
            </div>
        )
    }
}

export default FeedbackView;
