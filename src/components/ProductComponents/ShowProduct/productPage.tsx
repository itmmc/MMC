import React, { useState, useEffect } from 'react'
import './productPage.css'
import { deleteProduct, getBrand, getProducts } from '../actions'
import { useHistory } from 'react-router-dom'
import trash from '../../../../images/delete.png'
import edit from '../../../../images/edit.png'
import Toast from '@components/ToastComponent/Toast'
import view from '.././../../../images/visibility.png'
import CustomLoader from '@components/CustomLoader'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const ProductPage = () => {
    const history = useHistory()

    const [filters, setFilters] = useState({
        type: 'All',
        brand: '',
    })
    const [brands, setBrands] = useState([])

    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])
    const [productLoading, setProductLoading] = useState(false)
    const [brandLoading, setBrandLoading] = useState(false)
    const [alertMessage, setAlertMessage] = useState({
        message: '',
        status: '',
    })

    useEffect(() => {
        getProducts(setProducts, setProductLoading)
        getBrand(() => {}, setBrands, setBrandLoading)
        localStorage.removeItem('updateData')
    }, [])

    useEffect(() => {
        let filterd: any = []
        if (filters.brand && filters.type) {
            filterd = products.filter(
                (prod: any) =>
                    filters.brand === prod.brand.name &&
                    filters.type === prod.type
            )
        } else if (!filters.brand && filters.type) {
            filterd = products.filter((prod: any) => filters.type === prod.type)
        } else if (filters.brand && !filters.type) {
            filterd = products.filter(
                (prod: any) => filters.brand === prod.brand.name
            )
        }
        setfilteredProducts(filters.type === 'All' ? products : filterd)
    }, [filters, products])

    const refreshCat = () => {
        getProducts(setProducts, setProductLoading)
    }

    const deleteHandler = (id: string) => {
        const isConfirmed = window.confirm(
            'Are you sure you want to delete Product?'
        )
        if (isConfirmed) {
            deleteProduct(id, setAlertMessage, setProductLoading, refreshCat)
        }
    }
    const updateHandler = (item: any) => {
        history.push('/createproduct', {
            item,
        })
        localStorage.setItem('updateData', JSON.stringify(item))
    }
    const closeToast = () => {
        setAlertMessage((alertMessage) => ({
            ...alertMessage,
            message: '',
            status: '',
        }))
    }
    const filterChangeHandler = (e: any) => {
        const { name, value } = e.target
        setFilters((filters) => ({
            ...filters,
            [name]: value,
        }))

        if (name === 'type') {
            setFilters((filters) => ({
                ...filters,
                brand: '',
            }))
        }
    }

    const setpath = () => {
        history.push('/createproduct')
    }

    const viewdata = (id: any) => {
        history.push(`/productdetail?id=${id}`)
    }

    return (
        <>
            <div className="categories-header-container  ">
                <div className="Brand-section">
                    <div className=" custom-form-set f  w-100">
                        <div className="custom-input-set f s-b  a-c _eleY  custom-bg-dropdown  ">
                            <select
                                name="type"
                                placeholder="Select Your Brand"
                                value={filters.type}
                                onChange={filterChangeHandler}
                                className="custom-select-btn  custom-bg-dropdown "
                                required
                            >
                                <option value="" disabled>
                                    Select Your Brand
                                </option>
                                <option value="All">All</option>
                                <option value="Flour Brands">
                                    Flour Brand
                                </option>
                                <option value="Animal Feeds Brand">
                                    Animal Feed Brands
                                </option>
                            </select>
                        </div>

                        {filters.type === 'Flour Brands' && (
                            <>
                                {' '}
                                <div className=" custom-input-set  f s-b a-c custom-bg-dropdown   ">
                                    <select
                                        name="brand"
                                        placeholder="Select Your Brand"
                                        value={filters.brand}
                                        onChange={filterChangeHandler}
                                        className="custom-select-btn  custom-bg-dropdown "
                                    >
                                        <option value="" disabled selected>
                                            Select Your Brand
                                        </option>
                                        {brands.length > 0 &&
                                            brands.map((b: any) => (
                                                <option value={b.name}>
                                                    {b.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <button
                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                    onClick={setpath}
                >
                    Create
                </button>
            </div>
            <table className="table-container   custom-table-container  ">
                <thead className="table-head">
                    <tr>
                        <th align="left" className="custom-x-padding-left">
                            Brand
                        </th>
                        <th align="left">Name</th>
                        <th align="left"></th>
                        <th align="left">Weight</th>
                        <th align="right" style={{ paddingRight: '38px' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                {productLoading ? (
                    <CustomLoader />
                ) : (
                    <tbody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item: any) => (
                                <tr key={item._id}>
                                    <td>{item?.brand?.name}</td>
                                    <td>{item?.name_en}</td>
                                    <td>{item?.name_ar}</td>
                                    <td>{item.weight}</td>
                                    <td>
                                        <button
                                            className="update-button"
                                            onClick={() => viewdata(item._id)}
                                        >
                                            <img src={view} alt="View"></img>
                                        </button>
                                        <button
                                            className="update-button"
                                            onClick={() => updateHandler(item)}
                                        >
                                            <img src={edit} alt="Edit"></img>
                                        </button>
                                        <button
                                            className="update-button"
                                            onClick={() =>
                                                deleteHandler(item._id)
                                            }
                                        >
                                            <img src={trash} alt="Delete"></img>
                                        </button>
                                    </td>
                                </tr>
                            ))
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

export default ProductPage
