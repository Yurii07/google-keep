import React, {useState} from 'react';
import styled from 'styled-components';

import DeleteTodo from "./DeleteTodo/DeleteTodo";
import InputTodo from "../InputTodo/InputTodo";

import {Card} from 'antd';
import {DeleteFilled, EditOutlined} from '@ant-design/icons';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  // padding: 4rem 3rem;
  // background-color: var(--color-mainLighter);
  // box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  // margin-bottom: 3.5rem;
  // border-radius: 0.5rem;
  // font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-mainDark);
`;

const Todo = ({todo}) => {
    const [isDeleting, setisDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Card
            style={{width: 300, margin: '10px'}}
            actions={[
                <EditOutlined key="edit" onClick={() => setIsEditing(true)}/>,
                <DeleteFilled key="delete" onClick={() => setisDeleting(true)}/>,
            ]}
        >
            <Wrapper>
                {todo.todo}
                <DeleteTodo todo={todo} show={isDeleting} close={() => setisDeleting(false)}/>
                <InputTodo editTodo={todo} opened={isEditing} close={() => setIsEditing(false)}/>
            </Wrapper>
        </Card>
    );
};

export default Todo;
