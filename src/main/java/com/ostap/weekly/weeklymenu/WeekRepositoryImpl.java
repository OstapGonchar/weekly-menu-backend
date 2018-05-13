package com.ostap.weekly.weeklymenu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.time.DayOfWeek;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import static java.lang.String.format;
import static java.time.DayOfWeek.*;

@Repository
public class WeekRepositoryImpl implements WeekRepository {
  private DataSource dataSource;

  @Autowired
  public WeekRepositoryImpl(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  @Override
  public Week getWeek(int id) {
    try (Connection connection = dataSource.getConnection()) {
      PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, \"desc\" FROM WEEK WHERE id = ?");
      preparedStatement.setInt(1, id);
      ResultSet resultSet = preparedStatement.executeQuery();
      if (resultSet.next()) {
        String desc = resultSet.getString("desc");
        return Week.builder()
          .id(id)
          .desc(desc)
          .monday(getDay(connection, id, MONDAY))
          .tuesday(getDay(connection, id, TUESDAY))
          .wednesday(getDay(connection, id, WEDNESDAY))
          .thursday(getDay(connection, id, THURSDAY))
          .friday(getDay(connection, id, FRIDAY))
          .saturday(getDay(connection, id, SATURDAY))
          .sunday(getDay(connection, id, SUNDAY))
          .build();
      } else {
        throw new RuntimeException(format("Such id %d doesn't exist", id));
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }

  private Day getDay(Connection connection, int weekId, DayOfWeek dayOfWeek) throws SQLException {
    PreparedStatement preparedStatement = connection.prepareStatement("SELECT date, breakfast, lunch, dinner FROM DAY WHERE week_id = ? AND day_of_week = ?");
    preparedStatement.setInt(1, weekId);
    String dayOfWeekDisplayName = dayOfWeek.getDisplayName(TextStyle.FULL, Locale.ENGLISH);
    preparedStatement.setString(2, dayOfWeekDisplayName);
    ResultSet resultSet = preparedStatement.executeQuery();
    if (resultSet.next()) {
      return Day.builder()
        .weekId(weekId)
        .date(resultSet.getDate("date").toLocalDate())
        .dayOfWeek(dayOfWeekDisplayName)
        .breakfast(resultSet.getString("breakfast"))
        .lunch(resultSet.getString("lunch"))
        .dinner(resultSet.getString("dinner"))
        .build();
    } else {
      throw new RuntimeException(format("Day of week %s with week id %d doesn't exist", dayOfWeekDisplayName, weekId));
    }
  }

  @Override
  public List<WeekDesc> getAllWeekDesc() {
    ArrayList<WeekDesc> weekDescList = new ArrayList<>();
    try (Connection connection = dataSource.getConnection()) {
      PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, \"desc\" FROM WEEK");
      ResultSet resultSet = preparedStatement.executeQuery();
      while (resultSet.next()) {
        weekDescList.add(new WeekDesc(resultSet.getInt("id"), resultSet.getString("desc")));
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
    return weekDescList;
  }

  @Override
  public void updateWeek(Week week) {
    try (Connection connection = dataSource.getConnection()) {
      int weekId = week.getId();
      updateDay(connection, weekId, week.getMonday());
      updateDay(connection, weekId, week.getTuesday());
      updateDay(connection, weekId, week.getWednesday());
      updateDay(connection, weekId, week.getThursday());
      updateDay(connection, weekId, week.getFriday());
      updateDay(connection, weekId, week.getSaturday());
      updateDay(connection, weekId, week.getSunday());
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }

  @Override
  public void addWeek(Week week) {
    try (Connection connection = dataSource.getConnection()) {
      PreparedStatement weekStatement = connection.prepareStatement("INSERT INTO WEEK (\"desc\") VALUES (?) RETURNING id");
      weekStatement.setString(1, week.getDesc());
      ResultSet resultSet = weekStatement.executeQuery();
      if (resultSet.next()) {
        int weekId = resultSet.getInt(1);
        insertDay(connection, weekId, week.getMonday());
        insertDay(connection, weekId, week.getTuesday());
        insertDay(connection, weekId, week.getWednesday());
        insertDay(connection, weekId, week.getThursday());
        insertDay(connection, weekId, week.getFriday());
        insertDay(connection, weekId, week.getSaturday());
        insertDay(connection, weekId, week.getSunday());
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }

  private void insertDay(Connection connection, int weekId, Day day) throws SQLException {
    PreparedStatement dayStatement = connection.prepareStatement("INSERT INTO DAY (week_id, date, day_of_week) VALUES (?, ?, ?)");
    dayStatement.setInt(1, weekId);
    dayStatement.setDate(2, Date.valueOf(day.getDate()));
    dayStatement.setString(3, day.getDayOfWeek());
    dayStatement.execute();
  }

  private void updateDay(Connection connection, int weekId, Day day) throws SQLException {
    PreparedStatement dayStatement = connection.prepareStatement("UPDATE DAY SET breakfast = ?, lunch = ?, dinner = ? WHERE week_id = ?");
    dayStatement.setString(1, day.getBreakfast());
    dayStatement.setString(2, day.getLunch());
    dayStatement.setString(3, day.getDinner());
    dayStatement.setInt(4, weekId);
    dayStatement.execute();
  }
}
