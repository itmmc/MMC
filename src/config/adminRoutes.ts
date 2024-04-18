import IRoute from '@interfaces/IRoute'
import Counter from '../views/counter'
import Home from '@views/home'
import Header from '../components/Navbar/header'
import Footer from '@components/Footer/Footer'
import FlourBrands from '@views/Brands/FlourBrands'
import Qamhati from '@components/FlourBrandsCompnents/OurBrands/ProductsPages/Qamhati/Qamhati'
import ModernMills from '@components/FlourBrandsCompnents/OurBrands/ProductsPages/ModernMills/ModernMills'
import QootandRoot from '@components/FlourBrandsCompnents/OurBrands/ProductsPages/QootandRoot/QootandRoot'
import AnimalFeeds from '@views/Feeds/AnimalFeeds'
import Careers from '@views/Careers/Careers'
import About from '@views/About/About'
import Contact from '@views/ContactSection/Contact'
import Admin from '@views/Admin/Admin'
import LoginPage from '@components/AdminComponents/LoginPage/LoginPage'

import AddCategories from '@components/CategoriesComponents/AddCategory/AddCategories'
import Categories from '@views/Categories/Categories'
import Products from '@views/Products/Products'

import GeneralSettings from '@views/GeneralSettings/GeneralSettings'
import CreateProduct from '@components/ProductComponents/CreateProduct/CreateProduct'

import CreateTermsandCondition from '@components/DynamicallyInputField/CreateTermsandCondition'
import TermsandConditions from '@components/TermsandConditions/TermsandConditions'
import CreateCareersPosts from '@components/AdminComponents/CareersPosts/CreateCareersPosts/CreateCareersPosts'
import NewsFeed from '@components/AdminComponents/NewsFeed'
import CreateNewsFeed from '@components/AdminComponents/CreateNewsFeed'
import CareersRequests from '@views/CareersRequests'
import ShowPrivacyPolicy from '@components/PrivacyPolicy/ShowPrivacyPolicy'
import PrivacyPolicy from '@views/PrivacyPolicy'
import CreatePrivacyPolicy from '@components/PrivacyPolicy/CreatePrivacyPolicy'
import ProductDetail from '@components/ProductDetailComponent/ProductDetail'
import BlogsList from '@views/Blogs/BlogsList'
import BlogDetail from '@components/Blog/blog-detail'
import CreateBlog from '@components/BlogComponents/CreateBlog/CreateBlog'
import BlogListing from '@views/Blogs/BlogListing'
import CreateBrand from '@components/Brands/CreateBrand'
import BrandsList from '@components/Brands/BrandsList'
import ViewBrand from '@components/Brands/ViewBrand'
import ContactUs from '@components/ContactUs'
import JobPosts from '@views/JobPosts/JobPosts'
import ViewCareerPosts from '@components/AdminComponents/CareersPosts/ViewCareer Posts/ViewCareerPosts'

const adminRoutes: IRoute[] = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        exact: true,
    },
    // {
    //     path: '/sidenav',
    //     name: 'SideNav',
    //     component: SideNav,
    //     exact: true,
    // },
    // {
    //     path: '/admin/cate',
    //     name: 'Add Category',
    //     component: AddCategories,
    //     exact: true,
    // },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
        exact: true,
    },

    {
        path: '/products',
        name: 'Products',
        component: Products,
        exact: false,
    },

    {
        path: '/settings',
        name: 'Settings',
        component: GeneralSettings,
        exact: false,
    },

    {
        path: '/cate',
        name: 'Add CateGory',
        component: AddCategories,
        exact: false,
    },

    {
        path: '/createproduct',
        name: 'Create Produts',
        component: CreateProduct,
        exact: false,
    },

    {
        path: '/createtermsandconditions',
        name: 'Terms and Conditions',
        component: CreateTermsandCondition,
        exact: true,
    },

    {
        path: '/termsandconditions',
        name: 'Terms and Conditions',
        component: TermsandConditions,
        exact: true,
    },

    {
        path: '/createcareersposts',
        name: 'Terms and Conditions',
        component: CreateCareersPosts,
        exact: true,
    },

    {
        path: '/viewcareerposts',
        name: 'Careers Posts',
        component: ViewCareerPosts,
        exact: true,
    },

    {
        path: '/jobposts',
        name: 'Job Posts',
        component: JobPosts,
        exact: true,
    },

    {
        path: '/newsfeeds',
        name: 'News Letter',
        component: NewsFeed,
        exact: true,
    },

    {
        path: '/createnewsfeed',
        name: 'News Letter',
        component: CreateNewsFeed,
        exact: true,
    },

    {
        path: '/careersrequests',
        name: 'Careers Requests',
        component: CareersRequests,
        exact: true,
    },
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: PrivacyPolicy,
        exact: true,
    },
    {
        path: '/createprivacy',
        name: ' Create Privacy Policy',
        component: CreatePrivacyPolicy,
        exact: true,
    },

    {
        path: '/productdetail',
        name: ' Product Detail',
        component: ProductDetail,
        exact: true,
    },
    {
        path: '/blogs-list',
        name: 'Blogs List',
        component: BlogsList,
        exact: true,
    },
    {
        path: '/blog-detail',
        name: 'Blog Detail',
        component: BlogDetail,
        exact: true,
    },
    {
        path: '/create-blog',
        name: 'Create Blog',
        component: CreateBlog,
        exact: true,
    },

    {
        path: '/blog-listing',
        name: 'Blog Listing',
        component: BlogListing,
        exact: true,
    },

    {
        path: '/create-brand',
        name: 'Create Brand',
        component: CreateBrand,
        exact: true,
    },

    {
        path: '/brands-list',
        name: 'Brands List',
        component: BrandsList,
        exact: true,
    },

    {
        path: '/view-brand',
        name: 'View Brand',
        component: ViewBrand,
        exact: true,
    },
    {
        path: '/contactus',
        name: 'Contact US ',
        component: ContactUs,
        exact: true,
    },
]

export default adminRoutes
