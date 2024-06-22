import { FunctionComponent } from "react";
import Card from "./Card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EmptyCard from "./EmptyCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Status } from "@/lib/types";

interface CardListProps {
  type: string;
  status: Status;
  showEmptyCard: boolean;
}

const CardList: FunctionComponent<CardListProps> = ({
  type,
  status,
  showEmptyCard,
}) => {
  const cards = useQuery(api.card.getCards, { type, status });

  if (cards === undefined) {
    return (
      <div>
        <Skeleton className="w-full h-[30px] mb-2" />
        <Skeleton className="w-full h-[30px]" />
      </div>
    );
  }
  if (cards.length < 1 && showEmptyCard) {
    return <EmptyCard />;
  }
  return cards.map(({ title, _id }) => (
    <Card key={_id} id={_id} type={type} title={title} status={status} />
  ));
};

export default CardList;
