import styled from 'styled-components';

export const ProductListStyles = styled.section`

    .productsContainer{
      width: 100%;
      height: 500px;
    }

    .productsListContainer{
      width: 100%;
      padding-top: 50px;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .productsListWrapper{
      width: 500px;
      border: 1px solid #f3f1f1;
      border-radius: 30px;
      padding-top: 30px;
      padding-topbottom: 30px;
    }

    .loadContainer{
      position: absolute;
      top: 30px;
      left: 30px;
      width : 200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loadContainer button{
      width : 300px;
      height: 40px;
      cursor: pointer;
      background-color: #4CAF50;
      border: 0px;
      border-radius: 15px;
      color: #f3f1f1;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cartViewContainer{
      position: absolute;
      top: 30px;
      right: 30px;
      width : 100px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cartViewContainer button{
      width : 150px;
      height: 40px;
      cursor: pointer;
      background-color: #a569bd;
      border: 0px;
      border-radius: 15px;
      color: #f3f1f1;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .product{
      clear:both;
      margin-left: 5%;
      width: 90%;
      height: 50px;
      border-botomm: 1px solid white;
    }

    .product-field{
      float:left;
      width: 15%;
    }

    .product-controls{
      margin-left: 30%;
      width: 30%;
    }

    .product-controls .buttons button{
      float: left;
      width : 30px;
      height: 30px;
      cursor: pointer;
      background-color: #008CBA;
      border: 0px;
      border-radius: 30px;
      margin-right: 15px;
      color: #f3f1f1;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`
