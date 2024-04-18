import React, { useState, useEffect } from 'react'
import './CategoriesPage.css'
import { deleteCategory, getBrand, getCategories } from '../actions'
import { useHistory } from 'react-router-dom'
import trash from '../../../../images/delete.png'
import edit from '../../../../images/edit.png'
import Toast from '@components/ToastComponent/Toast'
import CustomLoader from '@components/CustomLoader'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const data = [
    {
        category: 'House Hold',
        brandName: 'Flour Brands',
        subbrand: 'Qamhati',
    },
    {
        category: 'Professional',
        brandName: 'Flour Brands',
        subbrand: 'qamhati',
    },
    {
        category: 'Bakries and Industrial',
        brandName: 'Flour Brands',
        subbrand: 'Modern Mills',
    },

    {
        category: 'Child Specilist',
        brandName: 'Flour Brands',
        subbrand: 'Modern Mills',
    },

    {
        category: 'Office Holding',
        brandName: 'Flour Brands',
        subbrand: 'Qoot and Root',
    },
    {
        category: 'Poultry',
        brandName: 'Animal Feeds Brand',
    },
    {
        category: 'Live Stock',
        brandName: 'Animal Feeds Brand',
    },
    {
        category: 'Brans',
        brandName: 'Animal Feeds Brand',
    },
]

const CategoriesPage = () => {
    const history = useHistory()

    const [filters, setFilters] = useState({
        type: 'All',
        brand: '',
    })
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [filteredCategories, setfilteredCategories] = useState([])
    const [categoryLoading, setCategoryLoading] = useState(false)
    const [brandLoading, setBrandLoading] = useState(false)
    const [alertMessage, setAlertMessage] = useState({
        message: '',
        status: '',
    })

    useEffect(() => {
        getCategories(setCategories, setCategoryLoading)
        getBrand(() => {}, setBrands, setBrandLoading)
    }, [])

    useEffect(() => {
        let filterd: any = []
        if (filters.brand && filters.type) {
            debugger
            filterd = categories.filter(
                (cat: any) =>
                    filters.brand === cat?.brand?.name &&
                    filters.type === cat.type
            )
        } else if (!filters.brand && filters.type) {
            filterd = categories.filter((cat: any) => filters.type === cat.type)
        } else if (filters.brand && !filters.type) {
            filterd = categories.filter(
                (cat: any) => filters.brand === cat.brand.name
            )
        }

        setfilteredCategories(filters.type === 'All' ? categories : filterd)
    }, [filters, categories])

    const refreshCat = () => {
        getCategories(setCategories, setCategoryLoading)
    }

    const deleteHandler = (id: string) => {
        const isConfirmed = window.confirm(
            'Are you sure you want to delete category?'
        )
        if (isConfirmed) {
            deleteCategory(id, setAlertMessage, setCategoryLoading, refreshCat)
        }
    }

    const updateHandler = (item: any) => {
        history.push('/cate', {
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
        history.push('/cate')
    }

    return (
        <>
            {' '}
            <div className="categories-header-container">
                <div className="Brand-section">
                    <div className=" custom-form-set f  w-100">
                        <div className="custom-input-set f s-b  a-c   custom-bg-dropdown  ">
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
                                <div className=" custom-input-set  f s-b a-c custom-bg-dropdown  ">
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
            <table className="table-container  custom-table-container">
                <thead className="table-head">
                    <tr>
                        <th align="left" className="custom-x-padding-left">
                            Brand
                        </th>
                        <th align="left">Category</th>
                        <th align="left">Category in Arabic</th>
                        <th align="right" style={{ paddingRight: '38px' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                {categoryLoading ? (
                    <CustomLoader />
                ) : (
                    <tbody>
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((item: any) => (
                                <tr key={item._id}>
                                    <td>{item?.brand?.name}</td>
                                    <td>{item?.name_en}</td>
                                    <td>{item?.name_ar}</td>
                                    <td align="right">
                                        <button
                                            className="update-button"
                                            onClick={() => {
                                                updateHandler(item)
                                            }}
                                        >
                                            <img src={edit} alt="Edit icon" />
                                        </button>
                                        <button
                                            className="update-button"
                                            onClick={() =>
                                                deleteHandler(item._id)
                                            }
                                        >
                                            <img src={trash} alt="Trash icon" />
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

export default CategoriesPage
