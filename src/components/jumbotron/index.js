import React from 'react'
import { Inner, Item, Container, Title, SubTitle, Image, Movie, Pane, MovieHolder, MovieImage } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item { ...restProps }>
            <Inner directon={ direction }>{ children }</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title { ...restProps }>{ children }</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle { ...restProps }>{ children }</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
    return <Image { ...restProps } />
}

Jumbotron.Movie = function JumbotronImage({ children, ...restProps }) {

    const  { image, movie } = restProps

    return (
        <MovieHolder { ...restProps }>
            <MovieImage { ...restProps } src={ image } />
            <Movie
                { ... restProps }
                src={movie}
                autoPlay
                playsInline
                muted
                loop
             />
        </MovieHolder>
    )
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{ children }</Pane>
}
