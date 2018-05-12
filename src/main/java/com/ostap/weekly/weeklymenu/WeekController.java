package com.ostap.weekly.weeklymenu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WeekController {

  private WeekRepository weekRepository;

  @Autowired
  public WeekController(WeekRepository weekRepository) {
    this.weekRepository = weekRepository;
  }

  @GetMapping("/week-desc")
  List<WeekDesc> getWeekDesc() {
    return weekRepository.getAllWeekDesc();
  }
}
