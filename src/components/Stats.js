const Stats = ({ items }) => {
  const packedItems = items?.filter((item) => item.packed === true);
  const packedPercentage = Math.round((packedItems.length / items.length) * 100);
  
  return (
    <footer className="stats">
      {packedPercentage === 100?<em>You are ready to go 🚀</em> : <em>
        You have {items.length} items on your list, and you already packed{" "}
        {packedItems.length}
        {packedItems.length === 0 ? "" : `(${packedPercentage} %)`}
      </em>}
      
    </footer>
  );
};
export default Stats;
