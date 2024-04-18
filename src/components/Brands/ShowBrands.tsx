import CustomLoader from '@components/CustomLoader'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import trash from '../../..//images/delete.png'
import edit from '../../../images/edit.png'

import view from '../../../images/visibility.png'
import { deleteBrand, getBrands } from '@views/Brands/action'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const ShowBrands = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(false)
    const [allbrands, setAllBrands] = useState([])

    const setpath = () => {
        history.push('/create-brand')
    }

    const viewpath = (brand: any) => {
        history.push('/view-brand', {
            brand,
        })
        localStorage.setItem('brandData', JSON.stringify(brand))
    }

    const getAllBrands = () => {
        getBrands(setAllBrands, setLoading)
    }

    const updateHandler = (item: any) => {
        history.push('/create-brand', {
            item,
        })
        localStorage.setItem('updateData', JSON.stringify(item))
    }

    const deleteHandler = (id: any) => {
        deleteBrand(id, getAllBrands)
    }

    useEffect(() => {
        getAllBrands()
    }, [])

    return (
        <>
            <div className=" create-btn-container  f j-e  ">
                <button
                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                    onClick={setpath}
                >
                    Create
                </button>
            </div>

            <table className="table-container  custom-table-container   ">
                <thead className="table-head">
                    <tr>
                        <th align="left" className="custom-x-padding-left">
                            Brands Name In English
                        </th>
                        <th align="center">Brands Name In Arabic</th>
                        <th align="right" style={{ paddingRight: '38px' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                {isLoading ? (
                    <CustomLoader />
                ) : (
                    <tbody>
                        {allbrands?.length > 0 ? (
                            allbrands.map((brand: any) => {
                                if (brand.name !== 'Animal Feeds Brand') {
                                    return (
                                        <tr key={brand?._id}>
                                            <td>{brand.name}</td>
                                            <td align="center">
                                                {brand.name_ar}
                                            </td>

                                            <td align="right">
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        viewpath(brand)
                                                    }
                                                >
                                                    <img
                                                        src={view}
                                                        alt="View"
                                                    />
                                                </button>
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        updateHandler(brand)
                                                    }
                                                >
                                                    <img
                                                        src={edit}
                                                        alt="Edit"
                                                    />
                                                </button>
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        deleteHandler(
                                                            brand?._id
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={trash}
                                                        alt="Delete"
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        ) : (
                            <div>
                                <NoDataFound />
                            </div>
                        )}
                    </tbody>
                )}
            </table>
        </>
    )
}

export default ShowBrands
