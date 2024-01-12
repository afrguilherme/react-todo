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
  background-color: #ffffff;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border: ${(props) => (props.$isChecked ? "2px solid green" : "none")};
  img {
    width: 20px;
    cursor: pointer;
  }
`

export const ListItem = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: 400;
  }
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
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
`
