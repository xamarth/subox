import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

export default function InsightsHistoryItem({
  icon,
  name,
  dateLabel,
  price,
  cadenceLabel,
  color,
}: {
  icon: any;
  name: string;
  dateLabel: string;
  price: number;
  cadenceLabel: string;
  color: string;
}) {
  return (
    <View className="insights-history-row" style={{ backgroundColor: color }}>
      <View className="insights-history-left">
        <Image source={icon} className="insights-history-icon" />
        <View className="insights-history-copy">
          <Text className="insights-history-title" numberOfLines={1}>
            {name}
          </Text>
          <Text className="insights-history-meta" numberOfLines={1}>
            {dateLabel}
          </Text>
        </View>
      </View>

      <View className="insights-history-right">
        <Text className="insights-history-price">{formatCurrency(price)}</Text>
        <Text className="insights-history-cadence">{cadenceLabel}</Text>
      </View>
    </View>
  );
}

