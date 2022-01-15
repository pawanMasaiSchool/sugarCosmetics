import styled from "styled-components";

export const Wrapper=styled.div`
{
    width:75%;
    margin:auto;
    min-height:100%;
}
`
export const FlexBox=styled.div`
display:flex;
gap:"1rem";
width:100%;
> div{
    width:40%;
}
`
export const ImageListBox=styled.div`
display:flex;
flex-direction:row;
padding:${props=>props.padding};



`
export const ItemDetailsWrapper=styled.div`

`