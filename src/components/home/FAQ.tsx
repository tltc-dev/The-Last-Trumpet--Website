import React, { useState } from "react";
import TextAnimation from "../ui/typography/TextAnimation";
import { AnimatePresence, m, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import { Plus } from "lucide-react";

type Props = {};

const FAQ = (props: Props) => {
  const [open, setOpen] = useState<number | null>(null);

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
                    className="p-1 "
                  >
                    <Plus />
                  </motion.div>
                </button>
              </div>
              {index === open && (
                <motion.p className="w-4/5 opacity-70">{faq.answer}</motion.p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQ;
