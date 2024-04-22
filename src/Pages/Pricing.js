import React from 'react';
import PricingCard from '../Components/PricingCard';
import './PricingStyles.css';

const Pricing = () => {
    const card1description = 'Ideal for individuals who are looking to establish an online presence.';
    const card2description = 'Designed for those seeking a more comprehensive online platform to show their products or services.';
    const card3description = 'Designed for those requiring a sophisticated and feature-rich online platform.';
    const addonsDescription = 'Customize your experience with these additional features.';

    const card1features = ['5 day delivery', '1 page', 'Opt-in form', 'Hosting setup'];
    const card2features = ['14 day delivery', 'Up to 5 pages', 'Personal Content Upload', 'Opt-in form', 'Autoresponder integration', 'Hosting setup', '1 revision'];
    const card3features = ['45 day delivery', 'Up to 8 pages', 'Personal Conent Upload', 'Opt-in form', 'Autoresponder integration', 'Hosting setup', '3 revisions'];
    const addonsFeatures = ['24/7 Hosting - Cost Varies', 'Additional Pages - $100', 'Additional Revisions - $50', 'Payment Processing - $250', 'Analytics - $100'];

    return (
        <div className='pricing'>
            <h1>Pricing</h1>
            <div className="pricing-container">
                <div className="pricing-grid">
                    <PricingCard planName={'Starter Website'} description={card1description} price={'$80'} features={card1features} />
                    <PricingCard planName={'Professional Web Solution'} description={card2description} price={'$350'} features={card2features} />
                    <PricingCard planName={'Custom Tailored Web Experience'} description={card3description} price={'$550'} features={card3features} />
                    <PricingCard planName={'Add-Ons'} description={addonsDescription} price={''} features={addonsFeatures} />
                </div>
            </div>
        </div>
    );
};

export default Pricing;