import React, {Component} from 'react';

// css
import '../../css/components/FeedbackSmiley.css';

class FeedbackSmiley extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false
        };

        this.onFeedbackSubmitted = () => {
            this.props.onFeedbackSubmitted(this.props.value);

            this.setState({
                pressed: true
            });

            setTimeout(() => {
                console.log("interval set");

                this.setState({
                    pressed: false
                })
            }, 1000);
        }
    }


    render() {
        switch (this.props.value) {
            case 1: {
                if (this.state.pressed) {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-smile happy pressed'}/>);
                } else {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-smile'}/>);
                }
            }
            case 0: {
                if (this.state.pressed) {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-meh neutral pressed'}/>);
                } else {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-meh'}/>);
                }
            }
            case -1: {
                if (this.state.pressed) {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-frown sad pressed'}/>);
                } else {
                    return (<i onClick={this.onFeedbackSubmitted}
                               className={'far fa-frown'}/>);
                }
            }
            default: {
                return (<p>Value is required.</p>)
            }
        }
    }
}


export default FeedbackSmiley;
