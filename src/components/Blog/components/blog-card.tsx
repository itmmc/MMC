import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../../assets/stylesheets/blog.css'
import '../../../assets/stylesheets/blog.scss'
import Pagination from '@components/AdminComponents/customPagination'
import arrownext from '../../../../images/Open.png'
import arrowar from '../../../../images/blogaricon.png'
import { useTranslation } from 'react-i18next'
let PageSize = 6

function BlogCard({ blogData }: { blogData: any }) {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    const [currentPage, setCurrentPage] = useState(1)

    const history = useHistory()

    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize
        const lastPageIndex = firstPageIndex + PageSize
        return blogData.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, blogData])

    const blogsdetail = (id: any) => {
        history.push(`/blog-detail?id=${id}`)
    }

    function truncateText(text: any, maxLength: any) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...'
        }
        return text
    }

    return (
        <div>
            {blogData?.length > 0 && (
                <div className="blog-container">
                    {paginatedData?.map((data: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className="blog-card-main-container custom-column"
                            >
                                <div className="blog-image-wrapper">
                                    <img
                                        src={data.image}
                                        alt="blog "
                                        className="w-100 blog-top-img"
                                    />
                                </div>
                                <div className="des-container-bg">
                                    <div className="blog-desc-data-continer">
                                        <h3 className="blog-title  _txt words">
                                            {currentLanguage === 'en'
                                                ? truncateText(
                                                      data.title_en,
                                                      27
                                                  )
                                                : truncateText(
                                                      data.title_ar,
                                                      27
                                                  )}
                                        </h3>
                                        {/* <p className="title-desc  "> */}
                                        <p className="_txt words  blog-title-desc ">
                                            {currentLanguage === 'en'
                                                ? truncateText(
                                                      data.shortDescription_en,
                                                      80
                                                  )
                                                : truncateText(
                                                      data.shortDescription_ar,
                                                      80
                                                  )}
                                        </p>
                                    </div>

                                    <div
                                        className="blog-readmore-container pointer"
                                        onClick={() => blogsdetail(data?._id)}
                                    >
                                        <div className="icon-title">
                                            {t('readmorelabel')}
                                        </div>
                                        <div className="icon-wrapper">
                                            <div className="icon-container">
                                                {currentLanguage === 'en' ? (
                                                    <img
                                                        src={arrownext}
                                                        alt="Arrow Next"
                                                    />
                                                ) : (
                                                    <img src={arrowar} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="pagination-container">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={blogData.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}

export default BlogCard
