import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import { HabbitDay } from "../HabbitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7 // 18 week
const amountOfDaysTofill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekday, i) => {
            return (
                <div 
                    key={`${weekday}-${i}`} 
                    className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
                    >
                    {weekday}
                </div>
            )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return <HabbitDay key={date.toString()} />
        })}

        {amountOfDaysTofill > 0 && Array.from({length: amountOfDaysTofill}).map((_, i) => {
          return (
            <div 
              key={i} 
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  );
}
