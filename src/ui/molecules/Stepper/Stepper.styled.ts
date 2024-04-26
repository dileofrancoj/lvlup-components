import styled from 'styled-components'

export const Container = styled.div`
  width: 108px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background: white;
  border-radius: 4px;
`

export const Button = styled.button`
  border: none;
  background: white;
  transition: all 0.2 ease-in-out;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  height: 22px;
  &:active {
   border: 1px solid gray;
  }
`
