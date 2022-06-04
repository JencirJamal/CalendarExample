 // components/CalendarPicker.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
          setSelectedDate(day.dateString);
        }}

        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}

        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        
        hideExtraDays={true}
        
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}

        showWeekNumbers={false}

        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        
        onPressArrowRight={(addMonth) => addMonth()}
        
        disableArrowLeft={false}
        
        disableArrowRight={false}
        
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={{
          [selectedDate]: {selected: true, marked: true, selectedColor: 'green'},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default CalendarPicker;