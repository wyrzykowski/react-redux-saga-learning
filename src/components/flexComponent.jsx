import React, { Component } from 'react'
import styled from 'styled-components';


const FlexWrapper = styled.div`
display:flex;
background-color:#CCC;
`


const MainColumn = styled.div`
flex:3;
order:2;
`

const SideBarOne = styled.div`
flex:1;
order:1;
`

const SideBarTwo = styled.div`
flex:1;
order:3;
`

const CallOutsContainer = styled.div`
    display:flex;
`

const CallOut = styled.div`
    font-size:60px;
@media (min-width:576px){
    font-size:50px;
}

@media (min-width:768px){
    font-size:40px;
}

@media (min-width:992px){
    font-size:30px;
}

@media (min-width:1200px){
    font-size:20px;
}
   
    flex:1;
    &:nth-child(1){background-color:red}
    &:nth-child(2){background-color:blue}
    &:nth-child(3){background-color:purple}

`

const ExampleWrapper = styled.div`
background-color:#BBB;
height:300px;
display:flex;
`

const ExampleWrapperChild = styled.div`
margin: auto;
`


class FlexComponent extends Component {
    render() {
        return (
            <div>
                <FlexWrapper>
                    <MainColumn>
                        <h1>Hello 1</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendum et felis. Maecenas tristique sed justo et iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel vehicula ante. Vestibulum scelerisque suscipit tortor vel eleifend. Pellentesque laoreet sem iaculis aliquet rutrum. Maecenas consectetur consequat tortor, a volutpat felis molestie id. Sed bibendum leo vel sapien pellentesque, in vulputate metus commodo.
                    </MainColumn>
                    <SideBarOne>
                        <h2>Article 2</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendum et felis. Maecenas tristique sed justo et iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel vehicula ante. Vestibulum scelerisque suscipit tortor vel eleifend. Pellentesque laoreet sem iaculis aliquet rutrum. Maecenas consectetur consequat tortor, a volutpat felis molestie id. Sed bibendum leo vel sapien pellentesque, in vulputate metus commodo.
                    </SideBarOne>
                    <SideBarTwo>
                        <h2>Article 3</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendum et felis. Maecenas tristique sed justo et iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel vehicula ante. Vestibulum scelerisque suscipit tortor vel eleifend. Pellentesque laoreet sem iaculis aliquet rutrum. Maecenas consectetur consequat tortor, a volutpat felis molestie id. Sed bibendum leo vel sapien pellentesque, in vulputate metus commodo.
                    </SideBarTwo>
                </FlexWrapper>

                <CallOutsContainer>
                    <CallOut>
                        <h3>Feature 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendu</p>
                    </CallOut>

                    <CallOut>
                        <h3>Feature 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendu</p>
                    </CallOut>

                    <CallOut>
                        <h3>Feature 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa massa, suscipit vitae odio vel, consequat accumsan metus. Aliquam pretium ante id mi accumsan aliquet. Ut sit amet risus in arcu scelerisque gravida. Phasellus accumsan ex odio. Sed justo neque, posuere vitae sagittis in, bibendu</p>
                    </CallOut>

                </CallOutsContainer>

                <ExampleWrapper>
                    <ExampleWrapperChild>Lorem ipsum dolor sit amet</ExampleWrapperChild>
                </ExampleWrapper>


            </div>
        )
    }
}

export default FlexComponent;