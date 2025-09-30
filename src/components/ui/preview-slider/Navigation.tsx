import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
  length: number; // event.length 
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const Navigation = ({ length, setCurrent }: Props) => {

  const handleNext = () => setCurrent((prev: number) => (prev + 1) % length);
  const handlePrev = () => setCurrent((prev: number) => (prev - 1 + length) % length);

  return (
    <div className="w-full flex justify-end gap-2 pt-10">
      <button onClick={handlePrev} className="button-trans w-9 h-9">
        <ChevronLeft size={24} strokeWidth={2} />
      </button>
      <button onClick={handleNext} className="button-trans w-9 h-9">
        <ChevronRight size={24} strokeWidth={2} />
      </button>
      <button className="button-rounded flex items-center justify-between w-fit ml-1">
        All Event <ChevronRight strokeWidth="1.5" />
      </button>
    </div>
  )
}

export default Navigation 