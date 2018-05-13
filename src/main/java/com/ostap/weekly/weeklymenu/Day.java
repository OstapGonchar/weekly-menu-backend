package com.ostap.weekly.weeklymenu;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
class Day {
  private int weekId;
  private final LocalDate date;
  private final String dayOfWeek;
  private String breakfast;
  private String lunch;
  private String dinner;
}
