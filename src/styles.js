import styled from "styled-components"

export const Container = styled.div`
  background: #999999;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  max-width: 100vw;
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .input-form {
    margin-right: 10px;
    height: 30px;
    width: 300px;
    outline: none;
    font-size: 16px;
    padding-left: 15px;
  }
`

export const ContainerItems = styled.div`
  background-color: #ebebeb;
  border-radius: 20px;
  padding: 0 50px 50px;

  h1 {
    margin: 50px 0;
    text-align: center;
  }

  ul {
    margin-top: 20px;
  }

  .form {
    margin-bottom: 10px;
  }
`

export const TaskItem = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: #838383;
  height: 30px;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
`
export const ListItem = styled.div`
  list-style: none;
`

export const Button = styled.button`
  height: 30px;
  width: 80px;
`
export const Input = styled.input`
  margin-right: 10px;
  height: 30px;
  width: 300px;
  outline: none;
  font-size: 16px;
  padding-left: 15px;
`
