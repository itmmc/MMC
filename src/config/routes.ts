import IRoute from '@interfaces/IRoute'
import Counter from '../views/counter'
import Home from '@views/home'
import Header from '../components/Navbar/header'
import Footer from '@components/Footer/Footer'
import FlourBrands from '@views/Brands/FlourBrands'
import AnimalFeeds from '@views/Feeds/AnimalFeeds'
import Careers from '@views/Careers/Careers'
import About from '@views/About/About'
import Contact from '@views/ContactSection/Contact'
import LoginPage from '@components/AdminComponents/LoginPage/LoginPage'

import SideNav from '@components/AdminComponents/SideNav/SideNav'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
// import CareersPosts from '@views/Careers/CareersPosts'
import FlourProducts from '@components/FlourBrandsCompnents/OurBrands/ProductsPages/flourProducts'
import ProductDetail from '@components/ProductDetailComponent/ProductDetail'
import TermsandConditions from '@components/TermsandConditions/TermsandConditions'
import PrivacyPolicy from '@views/PrivacyPolicy'
import Blogs from '@components/Blog/blog'
import BlogDetail from '@components/Blog/blog-detail'
import NotFound from '@components/NotFound/not-found'
import CustomLoader from '@components/CustomLoader'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
    },
    {
        path: '/counter',
        name: 'Counter Page',
        component: Counter,
        exact: true,
    },

    {
        path: '/header',
        name: 'header Page',
        component: Header,
        exact: true,
    },

    {
        path: '/footer',
        name: 'footer Page',
        component: Footer,
        exact: true,
    },
    {
        path: '/flourbrands',
        name: 'brand Page',
        component: FlourBrands,
        exact: true,
    },

    {
        path: '/qamhati',
        name: 'qamhati Page',
        component: FlourProducts,
        exact: true,
    },

    {
        path: '/modernmills',
        name: 'Modernmills Page',
        component: FlourProducts,
        exact: true,
    },

    {
        path: '/qoot-and-root',
        name: 'Qoot and Root Page',
        component: FlourProducts,
        exact: true,
    },

    {
        path: '/animalfeeds',
        name: 'Animal Feeds Brand',
        component: AnimalFeeds,
        exact: true,
    },

    {
        path: '/careers',
        name: 'Careers',
        component: Careers,
        exact: true,
    },

    {
        path: '/about',
        name: 'About',
        component: About,
        exact: true,
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        exact: true,
    },

    // {
    //     path: '/admin',
    //     name: 'Admin',
    //     component: Admin,
    //     exact: true,
    // },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        exact: true,
    },

    {
        path: '/sidenav',
        name: 'SideNav',
        component: SideNav,
        exact: true,
    },

    {
        path: '/spinner',
        name: 'spinner',
        component: LoadingSpinner,
        exact: false,
    },

    // {
    //     path: '/careersposts',
    //     name: 'careers Posts',
    //     component: CareersPosts,
    //     exact: false,
    // },
    {
        path: '/productdetail',
        name: 'careers Posts',
        component: ProductDetail,
        exact: false,
    },
    {
        path: '/termsandconditions',
        name: 'Terms and Conditions',
        component: TermsandConditions,
        exact: true,
    },
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: PrivacyPolicy,
        exact: true,
    },
    {
        path: '/blogs',
        name: 'Blogs List',
        component: Blogs,
        exact: true,
    },
    {
        path: '/blog-detail',
        name: 'Blog Detail',
        component: BlogDetail,
        exact: true,
    },

    {
        path: '/loader',
        name: 'loader',
        component: CustomLoader,
        exact: true,
    },
    // {
    //     path: '/*',
    //     name: '404',
    //     component: NotFound,
    //     exact: true,
    // },
]

export default routes
