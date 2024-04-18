import React, { useEffect, useState, useMemo } from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import { getNewsLetter } from './action'
import { formatDate } from '@helpers/utils/dateFormat'
import Pagination from './customPagination'
import CustomLoader from '@components/CustomLoader'
import NoDataFound from '@components/NoDataFound/NoDataFound'

interface newsDataState {
    createdAt: string
    mail: string
    updatedAt: string
}
let PageSize = 10

const NewsFeed = () => {
    const [newsData, setNewsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setLoading] = useState(false)

    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize
        const lastPageIndex = firstPageIndex + PageSize
        return newsData.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, newsData])

    const calculateSerialNumber = (index: number) => {
        return (currentPage - 1) * PageSize + index + 1
    }

    useEffect(() => {
        getNewsLetter(setNewsData, setLoading)
    }, [])

    return (
        <>
            <div
                className="settings-heading-container"
                style={{
                    background: '#eae2d4',
                    paddingTop: '1.7rem',
                    paddingBottom: '1.7rem',
                }}
            >
                <AdminHeader heading={'News Letter'} />
            </div>

            <div
                className="custom-inner-padding  light_bg f f-c x_padding"
                // style={{ paddingTop: '1.7rem', paddingLeft: '2em' }}
            >
                <section className="  ">
                    <table className="table-container  custom-table-container">
                        <thead className="table-head">
                            <tr style={{ textAlign: 'left' }}>
                                <th align="center">Sr.</th>
                                <th align="center">Email</th>
                                <th align="center">Subscription Date</th>
                            </tr>
                        </thead>
                        {isLoading ? (
                            <CustomLoader />
                        ) : (
                            <tbody>
                                {paginatedData.length > 0 ? (
                                    paginatedData.map(
                                        (
                                            item: newsDataState,
                                            index: number
                                        ) => (
                                            <tr key={index}>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {calculateSerialNumber(
                                                        index
                                                    )}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item.mail}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {formatDate(item.createdAt)}
                                                </td>
                                            </tr>
                                        )
                                    )
                                ) : (
                                    <div>
                                        <NoDataFound />
                                    </div>
                                )}
                            </tbody>
                        )}
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={newsData.length}
                        pageSize={PageSize}
                        onPageChange={(page: number) => setCurrentPage(page)}
                    />
                </section>
            </div>
        </>
    )
}

export default NewsFeed
