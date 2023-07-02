import { useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, OutlinedInput } from '@mui/material'
<<<<<<< HEAD
import ExpandTextDialog from 'ui-component/dialog/ExpandTextDialog'
=======
import EditPromptValuesDialog from 'ui-component/dialog/EditPromptValuesDialog'
>>>>>>> 9c27786 (dev environment node)

export const Input = ({ inputParam, value, onChange, disabled = false, showDialog, dialogProps, onDialogCancel, onDialogConfirm }) => {
    const [myValue, setMyValue] = useState(value ?? '')

    const getInputType = (type) => {
        switch (type) {
            case 'string':
                return 'text'
            case 'password':
                return 'password'
            case 'number':
                return 'number'
            default:
                return 'text'
        }
    }

    return (
        <>
            <FormControl sx={{ mt: 1, width: '100%' }} size='small'>
                <OutlinedInput
                    id={inputParam.name}
                    size='small'
                    disabled={disabled}
                    type={getInputType(inputParam.type)}
                    placeholder={inputParam.placeholder}
                    multiline={!!inputParam.rows}
                    rows={inputParam.rows ?? 1}
                    value={myValue}
                    name={inputParam.name}
                    onChange={(e) => {
                        setMyValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    inputProps={{
                        step: 0.1,
                        style: {
                            height: inputParam.rows ? '90px' : 'inherit'
                        }
                    }}
                />
            </FormControl>
            {showDialog && (
<<<<<<< HEAD
                <ExpandTextDialog
=======
                <EditPromptValuesDialog
>>>>>>> 9c27786 (dev environment node)
                    show={showDialog}
                    dialogProps={dialogProps}
                    onCancel={onDialogCancel}
                    onConfirm={(newValue, inputParamName) => {
                        setMyValue(newValue)
                        onDialogConfirm(newValue, inputParamName)
                    }}
<<<<<<< HEAD
                ></ExpandTextDialog>
=======
                ></EditPromptValuesDialog>
>>>>>>> 9c27786 (dev environment node)
            )}
        </>
    )
}

Input.propTypes = {
    inputParam: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showDialog: PropTypes.bool,
    dialogProps: PropTypes.object,
    onDialogCancel: PropTypes.func,
    onDialogConfirm: PropTypes.func
}
