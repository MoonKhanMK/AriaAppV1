import { cn } from "./ui/cn";

const PriceFormat = ({ amount, className }) => {
  const formattedAmount = new Number(amount).toLocaleString("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  });
  return <span className={cn(className)}>{formattedAmount}</span>;
};

export default PriceFormat;