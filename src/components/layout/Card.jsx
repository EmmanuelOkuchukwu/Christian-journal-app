import React from 'react';
import styled from 'styled-components';

const Card = ({ _id, title, description, postedBy }) => {
    return (
        <CardContainer key={_id}>
            <CardHeader>
                <h2>{title}</h2>
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
`;

const CardHeader = styled.main`
  height: 50px;
  border-bottom: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
`;

const CardBody = styled.main`
  height: 100px;
`;
