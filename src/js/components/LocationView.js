import React, {Component} from 'react';
import Button from "./common/Button";
import Form from "./common/Form";
import TextInput from "./common/TextInput";

class LocationView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: null
        };

        this.onTextChanged = (event) => {
            this.setState({
                location: event.target.value
            });
        };

        this.startEvaluation = () => {
            this.props.onEvaluationStarted(this.state.location);
        };
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-4 offset-md-4 my-auto">
                        <Form className="form-inline">
                            <TextInput id="nameField"
                                       label="Locatie tablet"
                                       onChanged={this.onTextChanged}/>
                            <Button onPress={this.startEvaluation}>Start Evaluatie</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationView;
