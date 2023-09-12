import styled from 'styled-components'

export const FilterButtonContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  background-color: ${props => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 60px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
`

export const FilterButtonText = styled.span`
  font-family: serif;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: 20px;
  border-radius: inherit;
`
