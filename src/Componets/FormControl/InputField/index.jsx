// import React from 'react';
// import PropTypes from 'prop-types';
// import { Controller } from 'react-hook-form';
// import { TextField } from '@material-ui/core';
// InputField.propTypes = {
//     form: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,

//     label: PropTypes.string,
//     disabled: PropTypes.bool
// };

// function InputField(props) {
//     const {form, name, label, disabled} = props;
//     const {errors} = form;
//     const hasError = errors[name];
//     return (
//         <Controller
//             name={name}
//             control={form.control}
//             label={label}
//             disabled={disabled}
//             error={!!hasError}
//             helperText={errors[name]?.message}
//             variant="outlined"
//             margin='normal'
//             as={TextField}
//         />
//     );
// }

// export default InputField;



import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    name: PropTypes.object.isRequired,
    form : PropTypes.string.isRequired,
    label: PropTypes.string,
        disabled: PropTypes.bool
    
};

function InputField(props) {
    const {name, form, label, disabled} = props;
    const {errors} = form;
    const hasError = errors[name];
    return (
        <Controller 
            name={name}
            control={form.control}
            label={label}
            disabled={disabled}
            as={TextField}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
            variant="outlined"
            margin='normal'
         />
    );
}

export default InputField;