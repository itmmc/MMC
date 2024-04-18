import React, { useState, useEffect } from 'react'
import './TermsandCondition.css'
import trash from '../../../images/delete.png'
import added from '../../../images/add.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import { toast } from 'react-toastify'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const CreateTermsandCondition = () => {
    const [inputs, setInputs] = useState<string[]>([''])
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const updateData = localStorage.getItem('updateData')
        if (updateData) {
            setInputs(JSON.parse(updateData))
        }
        localStorage.removeItem('updateData')
    }, [])

    const handleAddInput = () => {
        setInputs([...inputs, ''])
    }
    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = event.target
        const updatedInputs = [...inputs]
        updatedInputs[index] = value
        setInputs(updatedInputs)
    }

    const handleDeleteInput = (index: number) => {
        const updatedInputs = [...inputs]
        updatedInputs.splice(index, 1)
        setInputs(updatedInputs)
    }

    const handleSave = async () => {
        setIsLoading(true)
        await axios
            .post(`${baseUrl}/terms/updateTerms`, {
                terms: inputs,
            })
            .then((response: any) => {
                toast.success(`Data Save Successfully `, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
                setIsLoading(false)

                setTimeout(() => {
                    setpath()
                }, 2000)
                // setInputs([''])
            })
            .catch((error: any) => {
                toast.error(`Error in sending information    ${error}`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
                setIsLoading(false)
            })
    }

    const setpath = () => {
        // reloadPage('/#/termsandconditions')
        history.push('/termsandconditions')
    }

    return (
        <div className="Conditions-add-container">
            <div className="f j-e create-btn-container">
                {' '}
                <div
                    className="primary_bg custom-btn interactive_label f a-c j-c  "
                    aria-label="Contact"
                >
                    <strong className="_txt words" onClick={setpath}>
                        {' '}
                        Go Back
                    </strong>
                </div>
            </div>

            <table className="table-container">
                <thead className="table-head">
                    <tr>
                        <th align="center" className="w-70">
                            Add Conditions
                        </th>

                        <th
                            align="center"
                            className="w-30"
                            style={{ paddingRight: '38px' }}
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {inputs.map((value, index) => (
                        <tr key={index}>
                            <td className="input-field-table">
                                <input
                                    type="text"
                                    value={value}
                                    className="input-field-table-input"
                                    onChange={(event) =>
                                        handleChange(event, index)
                                    }
                                />
                            </td>

                            <td align="right" className="w-30">
                                {index > 0 && (
                                    <button
                                        className="update-button"
                                        onClick={() => handleDeleteInput(index)}
                                    >
                                        <img src={trash} alt="Delete" />
                                    </button>
                                )}

                                <button
                                    className="update-button"
                                    onClick={handleAddInput}
                                >
                                    <img src={added} alt="Add" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="  f j-e">
                <button
                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                    onClick={handleSave}
                    type="submit"
                    disabled={isLoading ? true : false}
                >
                    {isLoading ? <LoadingSpinner /> : 'Save'}
                </button>
            </div>
        </div>
    )
}

export default CreateTermsandCondition
