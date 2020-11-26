import React from 'react';
import Feature from '../components/feature';
import OptForm from '../components/opt-form'

export function FeatureContainer() {
    return (
        <Feature>
            <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />   
            </OptForm>
        </Feature>
    )
}