package com.ostap.weekly.weeklymenu;

import java.util.List;

public interface WeekRepository {

  Week getWeek(int id);

  List<WeekDesc> getAllWeekDesc();

  void updateWeek(Week week);

  void addWeek(Week week);
}
