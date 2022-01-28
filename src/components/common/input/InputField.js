import React from 'react';
import InputLabel from './Label';

class InputField extends React.Component {
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }
    render() {
        console.log(this.props);
        return (
            <div className="input-wrapper">
                {this.props.label && <InputLabel htmlFor={this.props.name} lable={this.props.label}></InputLabel>}
                <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    autoComplete="off"
                    onBlur={this.props.onBlur}
                    onKeyDown={this.propsonKeyDown}
                    onChange={this.handleChange}
                />
                {/* {icon && <Icon>{icon}</Icon>} */}
                {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
            </div>
        );
    }
}

export default InputField;

// const InputField = ({ labelInfo, id, type, name, value, classNameInput, placeholder, onBlur, onKeyDown, icons, error, onChange }) => (
//     <div className="input-wrapper">
//         <InputLabel labelInfo={labelInfo}/>
//         <input
//         id={id}
//         type={type}
//         name={name}
//         value={value}
//         className={classNameInput}
//         placeholder={placeholder}
//         autocomplete='off'
//         onBlur={onBlur?.bind(null, value)}
//         onKeyDown={onKeyDown?.bind(null, value)}
//         icons={icons}
//         onChange={onChange} />
//         <ErrorMessage>{ error }</ErrorMessage>
//     </div>
// );
