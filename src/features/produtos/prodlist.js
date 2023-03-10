import React from 'react';
import { prodApi } from "../api/apislice"
import './style.css';

const List = () => {

const {data, 
  isLoading,
  isSuccess,
  isError
} = prodApi.useGetProdsQuery();


let content;
if(isLoading){
  content = <tr>Loading.....</tr>;
}else if(isSuccess){
  content = data && data.map(produtos => {
    return (
        <tr key={produtos.idProduto}>
            <td className="show992">#{produtos.idProduto}</td>
            <td>{produtos.descricao}</td>
            <td>R$ {produtos.precoVenda.toFixed(2)}</td>   
        </tr> )})
}else if (isError){
  content =  <tr><td>error</td></tr>
}


 return  <div className="dsmeta-card">
 <h2 className="title">Lista de Produtos</h2>
 <div>    
 </div>
 <div>
     <table className="table">
         <thead>
             <tr>
                 <th className="show992">ID</th>
                 <th className="show576">Descrição</th>
                 <th>Preço venda</th>  
             </tr>
         </thead>
         <tbody>

          {content}
             
         </tbody>
     </table>
 </div>
</div >
}


 export default List 
  