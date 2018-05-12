package com.ostap.weekly.weeklymenu;

import lombok.Data;

@Data
public class Week {
  private final int id;
  private final String desc;
  private final Day monday;
  private final Day tuesday;
  private final Day wednesday;
  private final Day thursday;
  private final Day friday;
  private final Day saturday;
  private final Day sunday;
}
