import { FunctionComponent, useState } from "react";
import { blocks } from "@/lib/constants";
import CardList from "./CardList";
import CreateFreelanceCard from "@/app/(platform)/dashboard/_forms/CreateFreelanceCard";
import { Status } from "@/lib/types";
import React from "react";
import CreatePersonalCard from "../_forms/CreatePersonalCard";
import NewCardInline from "./NewCardInline";
import NewCard from "./NewCard";
import { motion, AnimatePresence } from "framer-motion";

interface CardGridProps {
  status: Status;
}

const CardGrid: FunctionComponent<CardGridProps> = ({ status }) => {
  const [showNewCard, setShowNewCard] = useState("");
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {blocks.map(({ id }) => (
        <div className="flex flex-col" key={id}>
          <div className="grid grid-cols-1 gap-4 mb-2">
            <AnimatePresence>
              {showNewCard === id && (
                <motion.div
                  transition={{ ease: "backInOut" }}
                  layout
                  initial={{
                    y: -20,
                    opacity: 0.5,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                >
                  <NewCard
                    type={id}
                    status={status}
                    onCancel={() => setShowNewCard("")}
                    onSuccess={() => setShowNewCard("")}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="grid grid-cols-1 gap-4" layout>
              <CardList
                type={id}
                status={status}
                showEmptyCard={showNewCard !== id}
              />
            </motion.div>
          </div>
          {status === "active" && showNewCard !== id && (
            <div className="grid grid-cols-1">
              <NewCardInline newCardHandler={() => setShowNewCard(id)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
