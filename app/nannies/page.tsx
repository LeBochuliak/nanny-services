import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import "../globals.css";
import { getNannies } from "@/services/nannies";

const Nannies = async () => {
  const nannies = await getNannies();

  return (
    <div className="container">
      <Filter />
      {nannies.map((nanny) => (
        <Card key={nanny.id} nanny={nanny} />
      ))}
    </div>
  );
};

export default Nannies;
