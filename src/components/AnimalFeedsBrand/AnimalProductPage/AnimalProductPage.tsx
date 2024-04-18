import React, { useEffect, useState } from 'react'
import AnimalFeedsHeader from '../AnimalFeedsHeader/AnimalFeedsHeader'
import LiveStockFeed from '../FeedsProducts/LiveStockFeed'
import PoultryFeed from '../FeedsProducts/PoultryFeed'
import BranFeeds from '../FeedsProducts/BranFeeds'
import LastSection from '@components/LastSection/LastSection'
import { getProducts } from '../actions'
import AnimalFeeds from '../FeedsProducts/animalFeeds'

interface FeedItem {
    imageSrc: string
    name: string
    weight: string
    feedTypes?: string[]
}

const AnimalProductPage: React.FC = () => {
    const [products, setProducts] = useState<any>([])
    const [productLoading, setProductLoading] = useState(true)
    const [animalFeedProducts_en, setAnimalFeedProducts_en] = useState({})
    const [animalFeedProducts_ar, setAnimalFeedProducts_ar] = useState({})
    useEffect(() => {
        getProducts(setProducts, setProductLoading)
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            const categorizedProducts_en: any = {
                'Live Stock': [],
                Poultry: [],
                Bran: [],
            }
            const categorizedProducts_ar: any = {
                'اعلاف الماشية': [],
                دواجن: [],
                النخالة: [],
            }
            const animalFeeds = products.filter(
                (prod: any) => prod.type === 'Animal Feeds Brand'
            )
            animalFeeds.forEach((product: any) => {
                const category_en = product.category?.name_en
                const category_ar = product.category?.name_ar

                if (!categorizedProducts_en[category_en]) {
                    categorizedProducts_en[category_en] = []
                }
                if (!categorizedProducts_ar[category_ar]) {
                    categorizedProducts_ar[category_ar] = []
                }
                debugger
                categorizedProducts_en[category_en].push(product)
                categorizedProducts_ar[category_ar].push(product)
            })

            setAnimalFeedProducts_en(categorizedProducts_en)
            setAnimalFeedProducts_ar(categorizedProducts_ar)
        }
    }, [products])

    return (
        <div className="inner_padding light_bg f f-c x_padding">
            <div className="section_wrap f f-c">
                <AnimalFeedsHeader
                    animalFeedProducts_ar={animalFeedProducts_ar}
                    animalFeedProducts_en={animalFeedProducts_en}
                    productLoading={productLoading}
                />
                <div className="section_body">
                    <div className="products f f-c">
                        <AnimalFeeds
                            animalFeedProducts_ar={animalFeedProducts_ar}
                            animalFeedProducts_en={animalFeedProducts_en}
                            productLoading={productLoading}
                        />
                        {/* <LiveStockFeed
                                liveStockFeedItems={liveStockFeedItems}
                            />
                            <PoultryFeed poultryFeedItems={poultryFeedItems} />
                            <BranFeeds branFeedItems={branFeedItems} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    /* <div className="lst_section">
    <LastSection />
</div> */
}
export default AnimalProductPage
