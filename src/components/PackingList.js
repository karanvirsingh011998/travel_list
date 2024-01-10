
const PackagingList = ({items ,setitems}) => {
    
  const Item = ({ list }) => {

    const handleDelete =(id)=>{
        setitems(items=> items.filter((item)=> item.id !== id))
    }

    const handlePacked =(id)=>{

        setitems(items=> items.map((item)=> item.id === id ? {...item, packed: !item.packed}: item))

    }
    return (
      <li>
        <input type="checkbox" defaultChecked={list.packed} onChange={()=>handlePacked(list.id)}/>
        <span style={list.packed ?{textDecoration:'line-through'}:{}}>
          {list.quantity}
          {list.description}
        </span>
        <button onClick={()=>handleDelete(list.id)}>❌</button>
      </li>
    );
  };
  return (
    <div className="list">
      <ul className="list">
        {items.map((list) => {
          return <Item list={list}/>;
        })}
      </ul>
    </div>
  );
};
export default PackagingList;
