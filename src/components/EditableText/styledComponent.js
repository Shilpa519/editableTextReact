import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  min-height: 100vh;
  max-height: 100%;
`

export const ContentContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  margin: 10px;
`

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 34px;
  color: #000000;
`

export const SearchInput = styled.input`
  color: #323f4b;
  border-color: ${props => (props.borderColor ? '#cbd2d9' : 'transparent')};
  height: 50px;
  border-radius: 6px;
`
export const Button = styled.button`
  border-radius: 6px;
  background-color: #d946ef;
  height: 50px;
  width: 80px;
  padding: 5px;
  border-color: transparent;
  margin: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
`
export const SaveContainer = styled.div`
  display: flex;
`

export const EditContainer = styled.div`
  display: flex;
`
