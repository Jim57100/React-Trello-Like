import React from 'react';



const ListTitle :React.FC<{title :string}> = (props) => <><h2>{props.title}</h2><button className='btn btn-danger'>x</button></>
   
export default ListTitle;