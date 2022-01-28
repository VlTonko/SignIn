import React, {Component} from 'react';
import Input from '../common/input/InputField';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handlerSubmitForm = event => {
        event.preventDefault();
        console.log("submit");
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmitForm}>
                <div className="fields">
                    <div className="input-wrapper">
                        <Input
                            label={"Login"}
                            type={'text'}
                            name={'login'}
                            inputName ={this.name}
                            value={''}
                            placeholder={'Enter your login'}
                            autocomplete="off"

                            onChange={this.props.handleChange}
                        />
                        <Input
                            label={"Password"}
                            type={'password'}
                            name={'password'}
                            value={''}
                            placeholder={'Enter your password'}
                            autocomplete="off"

                            onChange={this.props.handleChange}
                        />
                    </div>
                </div>
            </form>
        );
    }
}


export default SingUp;