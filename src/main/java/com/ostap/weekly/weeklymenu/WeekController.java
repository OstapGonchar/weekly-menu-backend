package com.ostap.weekly.weeklymenu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.function.Predicate;

import static java.time.DayOfWeek.*;

@RestController
@RequestMapping("week")
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

  @GetMapping("/current")
  Week getCurrentWeek() {
    LocalDate currentDate = LocalDate.now();
    return weekRepository.getAllWeekDesc().stream()
      .map(this::toWeekRange)
      .filter(this.isInRange(currentDate))
      .findFirst()
      .map(weekRange -> weekRepository.getWeek(weekRange.weekId))
      .orElseGet(() -> {
        createNewWeek(currentDate);
        return getCurrentWeek();
      });
  }

  @GetMapping("add-extra")
  public void addExtraWeek() {
    List<WeekDesc> allWeekDesc = weekRepository.getAllWeekDesc();
    if (allWeekDesc.isEmpty()) {
      LocalDate currentDate = LocalDate.now();
      weekRepository.addWeek(createNewWeek(currentDate));
    } else {
      WeekDesc lastWeekDesc = allWeekDesc.stream().max(Comparator.comparing(WeekDesc::getId)).orElseThrow(RuntimeException::new);
      Week lastWeek = weekRepository.getWeek(lastWeekDesc.getId());
      LocalDate nextWeekDate = lastWeek.getSunday().getDate().plusDays(1);
      weekRepository.addWeek(createNewWeek(nextWeekDate));
    }
  }

  @PostMapping()
  public void updateWeek(Week week) {
    weekRepository.updateWeek(week);
  }

  @GetMapping("{id}")
  public Week getWeek(@PathVariable int id) {
    return weekRepository.getWeek(id);
  }

  private Predicate<WeekRange> isInRange(LocalDate date) {
    return weekRange -> date.isEqual(weekRange.startOfWeek)
      || date.isEqual(weekRange.endOfWeek)
      || (date.isAfter(weekRange.startOfWeek) && date.isBefore(weekRange.endOfWeek));
  }

  private WeekRange toWeekRange(WeekDesc weekDesc) {
    String[] strings = weekDesc.getDesc().split("-");
    WeekRange weekRange = new WeekRange();
    weekRange.weekId = weekDesc.getId();
    weekRange.startOfWeek = LocalDate.parse(strings[0].trim());
    weekRange.endOfWeek = LocalDate.parse(strings[1].trim());
    return weekRange;
  }

  private static class WeekRange {
    private int weekId;
    private LocalDate startOfWeek;
    private LocalDate endOfWeek;
  }

  private Week createNewWeek(LocalDate date) {
    return Week.builder()
      .desc(date.with(MONDAY).toString().concat(" - ").concat(date.with(SUNDAY).toString()))
      .monday(toDay(date.with(MONDAY)))
      .tuesday(toDay(date.with(TUESDAY)))
      .wednesday(toDay(date.with(WEDNESDAY)))
      .thursday(toDay(date.with(THURSDAY)))
      .friday(toDay(date.with(FRIDAY)))
      .saturday(toDay(date.with(SATURDAY)))
      .sunday(toDay(date.with(SUNDAY)))
      .build();
  }

  private Day toDay(LocalDate date) {
    return Day.builder()
      .date(date)
      .dayOfWeek(date.getDayOfWeek().getDisplayName(TextStyle.FULL, Locale.ENGLISH))
      .build();
  }
}
