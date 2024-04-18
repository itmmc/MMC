import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const ViewBrand = () => {
    const history = useHistory()
    const [formState, setFormState] = useState<any>({
        id: '',
        name: '',
        name_ar: '',
        image: '',
    })

    const setpath = () => {
        history.push('/brands-list')
    }

    useEffect(() => {
        const brandData = localStorage.getItem('brandData')
        if (brandData) {
            const parsedData = JSON.parse(brandData)
            setFormState((formState: any) => ({
                ...formState,
                brandId: parsedData?._id,
                name: parsedData?.name,
                name_ar: parsedData?.name_ar,
                image: parsedData?.image,
            }))
        }
    }, [])

    return (
        <>
            <div
                className=""
                style={{
                    background: '#faf4ea',
                    paddingTop: '1.7rem',
                    paddingBottom: '1.7rem',
                }}
            >
                <AdminHeader heading={'View Brand'} />
            </div>

            <div className="brand-view-main-container">
                <div className=" f ">
                    <button
                        className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                        onClick={setpath}
                    >
                        Go Back
                    </button>
                </div>

                <div className="brands-main-wrapper">
                    <div>
                        {' '}
                        <h1>{formState?.name}</h1>
                        <h1>{formState?.name_ar}</h1>
                    </div>

                    <div className="Brand-image-section">
                        <div className="p_col_cover  brand-image-bg">
                            <div className="cover  load_bg  image-container ">
                                <img
                                    src={`data:image/jpeg;base64,${formState?.image}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBrand
