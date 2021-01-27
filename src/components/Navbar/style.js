import styled from 'styled-components';   
 export const NavWrapper = styled.div
 `
 background-color: #fdb73b;
 form{
     background:#fff;
     margin-left: 40px;
     height: 40px;
     padding: 0 20px;
     border-radius: 150px;
     
 }
  input{
      border:none;
  }
  input: focus{
      box-shadow:none
  }
  @media screen and (max-width:640px)
{
  .form{
    height:60px;
    }
}
`;

