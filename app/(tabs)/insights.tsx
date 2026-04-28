import InsightsExpenseSummary from "@/components/insights-expense-summary";
import InsightsHistoryItem from "@/components/insights-history-item";
import InsightsWeeklyChart from "@/components/insights-weekly-chart";
import ListHeading from "@/components/list-heading";
import { INSIGHTS_MOCK } from "@/constants/data";
import { styled } from "nativewind";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={INSIGHTS_MOCK.history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InsightsHistoryItem
            icon={item.icon}
            name={item.name}
            dateLabel={item.dateLabel}
            price={item.price}
            cadenceLabel={item.cadenceLabel}
            color={item.color}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
        ListHeaderComponent={() => (
          <View className="px-5 pt-4">
            <View className="mb-4">
              <Text className="text-2xl font-bold text-foreground">Monthly Insights</Text>
            </View>

            <ListHeading title="Upcoming" />
            <InsightsWeeklyChart data={[...INSIGHTS_MOCK.weeklyUpcoming]} />

            <InsightsExpenseSummary
              monthLabel={INSIGHTS_MOCK.expensesSummary.monthLabel}
              amount={INSIGHTS_MOCK.expensesSummary.amount}
              deltaPct={INSIGHTS_MOCK.expensesSummary.deltaPct}
            />

            <ListHeading title="History" />
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
