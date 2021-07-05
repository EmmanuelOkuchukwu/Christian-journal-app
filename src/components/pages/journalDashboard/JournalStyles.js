import styled from 'styled-components';

export const JournalContainer = styled.main`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //height: 100vh;
  margin: 70px 0;
`;

export const PrayRequestSection = styled.section`
  width: 100%;
  .main-prayers-content {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
