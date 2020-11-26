import React from 'react';
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { FeatureContainer } from '../containers/feature'


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer />
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}