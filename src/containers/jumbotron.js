// import React from 'react'
// import { Jumbotron } from '../components'
// import jumboData from '../fixtures/jumbo.json'

// export function JumbotronContainer() {
//     return (
//         <Jumbotron.Container>
//             {jumboData.map((item) => (
                
//                 <Jumbotron key={item.id} direction={item.direction}>
//                     <Jumbotron.Pane>
//                         <Jumbotron.Title>{item.title}</Jumbotron.Title>
//                         <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
//                     </Jumbotron.Pane>
//                     <Jumbotron.Pane>
//                         { item.movie ? <Jumbotron.Movie src={item.image} mov={item.movie} alt={item.alt} topPos={item.topPos} leftPos={item.leftPos} /> : <Jumbotron.Image src={item.image} alt={item.alt} /> }
//                     </Jumbotron.Pane>
//                 </Jumbotron>
//             ))} 
//         </Jumbotron.Container> 
//     )
// }


import React from 'react'
import { Jumbotron } from '../components'
import jumboData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        { item.movie ? <Jumbotron.Movie { ...item } /> : <Jumbotron.Image src={item.image} alt={item.alt} /> }
                    </Jumbotron.Pane>
                </Jumbotron>
            ))} 
        </Jumbotron.Container> 
    )
}