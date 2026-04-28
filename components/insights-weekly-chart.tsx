import { Text, View } from "react-native";

type WeeklyPoint = {
  day: string;
  value: number;
  highlight?: boolean;
};

const GRID_LINES = 4;

export default function InsightsWeeklyChart({ data }: { data: WeeklyPoint[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const highlightIndex = Math.max(0, data.findIndex((d) => d.highlight));

  return (
    <View className="insights-chart-card">
      <View className="insights-chart-grid">
        {Array.from({ length: GRID_LINES }, (_, i) => (
          <View
            key={`grid-${i}`}
            className="insights-chart-gridline"
            style={{ top: `${(i / (GRID_LINES - 1)) * 100}%` }}
          />
        ))}
        <View className="insights-chart-ylabels">
          <Text className="insights-chart-ylabel">{Math.round((max * 0.9) / 5) * 5}</Text>
          <Text className="insights-chart-ylabel">{Math.round((max * 0.7) / 5) * 5}</Text>
          <Text className="insights-chart-ylabel">{Math.round((max * 0.5) / 5) * 5}</Text>
          <Text className="insights-chart-ylabel">{Math.round((max * 0.1) / 5) * 5}</Text>
        </View>
      </View>

      <View className="insights-chart-bars">
        {data.map((d, idx) => {
          const heightPct = Math.max(0.08, d.value / max);
          const isHighlight = Boolean(d.highlight);
          const showPill = isHighlight && idx === highlightIndex;

          return (
            <View key={`${d.day}-${idx}`} className="insights-chart-bar-col">
              <View className="insights-chart-bar-wrap">
                {showPill && (
                  <View className="insights-bar-pill">
                    <Text className="insights-bar-pill-text">${d.value}</Text>
                  </View>
                )}
                <View
                  className={isHighlight ? "insights-bar insights-bar-highlight" : "insights-bar"}
                  style={{ height: `${heightPct * 100}%` }}
                />
              </View>
              <Text className="insights-chart-xlabel">{d.day}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

