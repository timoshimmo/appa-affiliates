import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './route-links';
import Home from '../pages/home';
import Merchant from '../pages/merchant';
import Rider from '../pages/rider';
import Affiliate from '../pages/affiliate';
import SignUp from '../pages/signup';
import Login from '../pages/login';
import Services from '../pages/services';
import About from '../pages/about';
import ContactUs from '../pages/contact-us';
import TermsConditions from '../pages/terms-conditions';
import PrivacyPolicy from '../pages/privacy-policy';
import RefundPolicy from '../pages/refund-policy';
import CancellationPolicy from '../pages/cancellation-policy';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTES.INDEX} element={<Home />} />
            <Route path={ROUTES.MERCHANTS} element={<Merchant />} />
            <Route path={ROUTES.RIDERS} element={<Rider />} />
            <Route path={ROUTES.AFFILIATES} element={<Affiliate />} />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
            <Route path={ROUTES.TERMS_CONDITIONS} element={<TermsConditions />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
            <Route path={ROUTES.REFUND_POLICY} element={<RefundPolicy />} />
            <Route path={ROUTES.CANCELLATION_POLICY} element={<CancellationPolicy />} />
        </Routes>
    )
}

export default RoutesComponent;