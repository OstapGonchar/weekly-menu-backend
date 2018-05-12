package com.ostap.weekly.weeklymenu;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Day {
  private final int weekId;
  private final LocalDate date;
  private final String dayOfWeek;
  private final String breakfast;
  private final String lunch;
  private final String dinner;
}
