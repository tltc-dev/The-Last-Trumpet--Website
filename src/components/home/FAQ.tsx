import React, { useState } from "react";
import TextAnimation from "../ui/TextAnimation";
import { AnimatePresence, m, motion } from "framer-motion";
import { faqs } from "@/lib/data";

type Props = {};

const FAQ = (props: Props) => {
  const [open, setOpen] = useState<number | null>(null);

  const AddIcon = () => (
    <svg viewBox="0 0 24 24" fill="white" height="1.5em" width="1.5em">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
  );

  const SubIcon = () => (
    <svg height="1em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="15"
        y1="0"
        x2="15"
        y2="25"
        style={{ stroke: "white", strokeWidth: "1" }}
      />
    </svg>
  );

  return (
    <section className="padding flex flex-col md:flex-row gap-20 md:gap-0  md:justify-between h-full py-20 w-full relative">
      <div className="flex flex-col gap-2">
        <TextAnimation
          phrase="Frequently asked"
          className="heading font-poppins"
        />
        <TextAnimation phrase=" Questions" className="heading font-poppins" />
      </div>
      <div className="w-full md:w-1/2">
        <AnimatePresence mode="popLayout">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-b border-white/20 py-4 cursor-pointer flex flex-col justify-between  "
            >
              <div className="flex flex-row items- justify-between ">
                <motion.p className="font-medium">{faq.question}</motion.p>
                <button
                  onClick={() => setOpen(index === open ? null : index)}
                  className="rounded-full border  "
                >
                  <motion.div
                    animate={{ rotate: index === open ? 45 : 0 }}
                    className="p-1"
                  >
                    <AddIcon />
                  </motion.div>
                </button>
              </div>
              {index === open && (
                <motion.p className="w-4/5 opacity-70 text-yellow-300 dark:text-red-400">
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQ;
