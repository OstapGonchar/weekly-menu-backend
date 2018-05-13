package com.ostap.weekly.weeklymenu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class Week {
  private int id;
  private String desc;
  private Day monday;
  private Day tuesday;
  private Day wednesday;
  private Day thursday;
  private Day friday;
  private Day saturday;
  private Day sunday;
}
