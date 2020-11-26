import styled from 'styled-components'

export const Container = styled.section`
    padding: 80px 40px;
`

export const Title = styled.h1`
    color: white;
    position: relative;
    width: 100%;
    padding: 0px;
    max-width: 950px;
    font-size: 3.125rem;
    margin: 0 auto;
    text-align: center;
    z-index: 1;

    @media (max-width: 1000px){
        
        max-width: 640px;
    }
`

export const SubTitle = styled.h2`
    color: white;
    position: relative;
    width: 100%;
    padding: 30px;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    font-size: 1.625rem;

    @media (max-width: 1000px){
        
        font-size: 1.625rem;
        padding: 20px;
    }
`