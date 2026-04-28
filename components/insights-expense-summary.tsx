import { formatCurrency } from "@/lib/utils";
import { Text, View } from "react-native";

export default function InsightsExpenseSummary({
  monthLabel,
  amount,
  deltaPct,
}: {
  monthLabel: string;
  amount: number;
  deltaPct: number;
}) {
  const deltaPrefix = deltaPct >= 0 ? "+" : "";

  return (
    <View className="insights-expense-card">
      <View className="insights-expense-left">
        <Text className="insights-expense-title">Expenses</Text>
        <Text className="insights-expense-meta">{monthLabel}</Text>
      </View>

      <View className="insights-expense-right">
        <Text className="insights-expense-amount">{formatCurrency(amount)}</Text>
        <Text className="insights-expense-delta">{deltaPrefix}{deltaPct}%</Text>
      </View>
    </View>
  );
}

