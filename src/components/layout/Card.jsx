import React from 'react';
import styled from 'styled-components';

const Card = ({ _id, title, description, postedBy, handleDelete }) => {
    return (
        <CardContainer key={_id}>
            <CardHeader>
                <h2>{title}</h2>
                <i className="far fa-trash-alt" onClick={() => handleDelete(_id)} />
            </CardHeader>
            <CardBody>
                <div className="description">
                    <p>{description}</p>
                </div>
                <p>Prayer by{' '}{postedBy?.name}</p>
            </CardBody>
        </CardContainer>
    )
}

export default Card;

const CardContainer = styled.main`
  width: 100%;
  background-color: ${props => props.theme.white};
  padding: 0 10px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 4px;
  margin: 10px 0;
`;

const CardHeader = styled.main`
  height: 50px;
  border-bottom: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fa-trash-alt {
    cursor: pointer;
  }
`;

const CardBody = styled.main`
  height: 100px;
`;
